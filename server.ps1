$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$data = Join-Path $root "data"
New-Item -ItemType Directory -Force -Path $data | Out-Null
$msgFile = Join-Path $data "messages.json"
$txtFile = Join-Path $data "texts.json"
if (-not (Test-Path $msgFile)) { "[]" | Set-Content -Encoding utf8 $msgFile }
if (-not (Test-Path $txtFile)) { "{}" | Set-Content -Encoding utf8 $txtFile }

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:8790/")
$listener.Start()
Write-Output "BALTIQ http://127.0.0.1:8790/"

function Read-Body($req) {
  $reader = New-Object IO.StreamReader($req.InputStream, [Text.Encoding]::UTF8)
  $txt = $reader.ReadToEnd()
  $reader.Close()
  return $txt
}

function Write-Json($ctx, $obj, $code = 200) {
  $json = $obj | ConvertTo-Json -Compress -Depth 10
  $bytes = [Text.Encoding]::UTF8.GetBytes($json)
  $ctx.Response.StatusCode = $code
  $ctx.Response.ContentType = "application/json; charset=utf-8"
  $ctx.Response.AddHeader("Access-Control-Allow-Origin", "*")
  $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  $ctx.Response.Close()
}

function Write-File($ctx, $file) {
  $ext = [IO.Path]::GetExtension($file)
  $type = "text/plain; charset=utf-8"
  if ($ext -eq ".html") { $type = "text/html; charset=utf-8" }
  elseif ($ext -eq ".js") { $type = "application/javascript; charset=utf-8" }
  elseif ($ext -eq ".css") { $type = "text/css; charset=utf-8" }
  elseif ($ext -eq ".json") { $type = "application/json; charset=utf-8" }
  $bytes = [IO.File]::ReadAllBytes($file)
  $ctx.Response.ContentType = $type
  $ctx.Response.StatusCode = 200
  $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  $ctx.Response.Close()
}

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $path = [Uri]::UnescapeDataString($ctx.Request.Url.LocalPath)
  $method = $ctx.Request.HttpMethod
  if ($method -eq "OPTIONS") {
    $ctx.Response.AddHeader("Access-Control-Allow-Origin", "*")
    $ctx.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type")
    $ctx.Response.StatusCode = 204
    $ctx.Response.Close()
    continue
  }
  if ($path -eq "/api/messages" -and $method -eq "GET") {
    $raw = Get-Content -Raw -Encoding utf8 $msgFile
    $arr = $raw | ConvertFrom-Json
    Write-Json $ctx @($arr)
    continue
  }
  if ($path -eq "/api/messages" -and $method -eq "POST") {
    $body = Read-Body $ctx.Request | ConvertFrom-Json
    $arr = @(Get-Content -Raw -Encoding utf8 $msgFile | ConvertFrom-Json)
    $arr += $body
    $arr | ConvertTo-Json -Depth 10 | Set-Content -Encoding utf8 $msgFile
    Write-Json $ctx @($arr)
    continue
  }
  if ($path -eq "/api/texts" -and $method -eq "GET") {
    Write-Json $ctx (Get-Content -Raw -Encoding utf8 $txtFile | ConvertFrom-Json)
    continue
  }
  if ($path -eq "/api/texts" -and $method -eq "POST") {
    $body = Read-Body $ctx.Request
    Set-Content -Encoding utf8 $txtFile $body
    Write-Json $ctx (@{ ok = $true })
    continue
  }
  if ($path -eq "/") { $path = "/index.html" }
  $file = Join-Path $root ($path.TrimStart("/").Replace("/", "\"))
  if (Test-Path $file -PathType Leaf) { Write-File $ctx $file }
  else { $ctx.Response.StatusCode = 404; $ctx.Response.Close() }
}
