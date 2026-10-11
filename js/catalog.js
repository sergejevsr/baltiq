(function () {
  const B = window.Baltiq;
  const t = B.t;
  const esc = B.escapeHtml;
  B.injectChrome("catalog");

  const FASHION_IMAGES = {
    women: "images/cat-women.png",
    men: "images/cat-men.png",
    shoes: "images/cat-shoes.png",
    accessories: "images/cat-accessories.png",
  };
  const POPULAR_FASHION = [
    ["women", "w_dresses"], ["women", "w_jeans"], ["women", "w_coats"], ["women", "w_sweaters"],
    ["men", "m_jackets"], ["men", "m_shirts"], ["men", "m_jeans"],
    ["shoes", "shoes_women"], ["shoes", "shoes_men"], ["shoes", "shoes_kids"],
    ["accessories", "acc_women_bags"], ["accessories", "acc_backpacks"], ["accessories", "acc_glasses"],
  ];
  const DEFAULTS = { cat: "", group: "", leaf: "", q: "", country: "all", cond: "all", sort: "new" };
  const state = { ...DEFAULTS };
  const $ = (id) => document.getElementById(id);
  const tree = B.SUB_TREE || {};

  function readURL() {
    const p = new URLSearchParams(location.search);
    const cat = p.get("cat") || "";
    state.cat = B.CATEGORY_IDS.includes(cat) ? cat : "";
    state.group = state.cat ? p.get("group") || "" : "";
    state.leaf = state.group ? p.get("leaf") || "" : "";
    state.q = p.get("q") || "";
    state.country = ["LV", "LT", "EE"].includes(p.get("country")) ? p.get("country") : "all";
    state.cond = ["new", "used"].includes(p.get("cond")) ? p.get("cond") : "all";
    state.sort = ["new", "cheap", "exp"].includes(p.get("sort")) ? p.get("sort") : "new";
  }

  function urlFor(patch) {
    const s = { ...state, ...patch };
    const p = new URLSearchParams();
    if (s.cat) p.set("cat", s.cat);
    if (s.cat && s.group) p.set("group", s.group);
    if (s.cat && s.group && s.leaf) p.set("leaf", s.leaf);
    if (s.q) p.set("q", s.q);
    if (s.country !== "all") p.set("country", s.country);
    if (s.cond !== "all") p.set("cond", s.cond);
    if (s.sort !== "new") p.set("sort", s.sort);
    const str = p.toString();
    return "index.html" + (str ? "?" + str : "");
  }

  function go(patch, { replace = false, scroll = true } = {}) {
    const url = urlFor(patch);
    history[replace ? "replaceState" : "pushState"](null, "", url);
    readURL();
    render();
    if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function baseItems({ ignoreCat = false } = {}) {
    const q = state.q.toLowerCase().trim();
    return B.getProducts().filter((item) => {
      if (!ignoreCat && state.cat && state.cat !== "all" && item.category !== state.cat) return false;
      if (state.country !== "all" && item.country !== state.country) return false;
      if (state.cond !== "all" && item.condition !== state.cond) return false;
      if (q && !(B.adText(item).toLowerCase().includes(q) || String(item.city).toLowerCase().includes(q) || B.subLabel(item.subcategory).toLowerCase().includes(q))) return false;
      return true;
    });
  }

  function sortItems(list) {
    const out = list.slice();
    if (state.sort === "cheap") out.sort((a, b) => a.price_eur - b.price_eur);
    else if (state.sort === "exp") out.sort((a, b) => b.price_eur - a.price_eur);
    else out.reverse();
    return out;
  }

  function matchesSub(item, group, leaf) {
    if (leaf) return item.subcategory === leaf;
    if (group) return B.inSubGroup(item, group);
    return true;
  }

  function chip(href, label, { active = false, count = null, extra = "" } = {}) {
    return `<a href="${href}" data-spa ${active ? 'aria-current="page"' : ""}
      class="shrink-0 inline-flex items-center gap-2 h-9 px-4 rounded-full border text-sm font-semibold ${active ? "bg-stone-900 border-stone-900 text-white" : "bg-white border-stone-200 text-stone-700 hover:border-stone-400"} ${extra}">
      ${label}${count !== null ? `<span class="text-xs ${active ? "text-stone-300" : "text-stone-400"}">${count}</span>` : ""}</a>`;
  }

  function emptyState() {
    return `<div class="col-span-full flex flex-col items-center text-center py-16 px-6 rounded-3xl border border-dashed border-stone-300 bg-white">
      <span class="w-14 h-14 rounded-full bg-stone-100 grid place-items-center text-stone-400 text-xl mb-4"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></span>
      <p class="text-lg font-bold">${t("empty")}</p>
      <a href="${urlFor({ q: "", country: "all", cond: "all", group: "", leaf: "" })}" data-spa class="mt-4 inline-flex items-center h-10 px-5 rounded-xl bg-stone-900 text-white text-sm font-bold hover:bg-stone-700">${t("reset")}</a>
    </div>`;
  }

  function syncChrome() {
    document.querySelectorAll("header nav [data-nav-cat]").forEach((a) => {
      const on = a.dataset.navCat === "" ? !state.cat && !state.q : a.dataset.navCat === state.cat;
      if (on) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    const input = $("searchInput");
    if (input && document.activeElement !== input) input.value = state.q;
  }

  function renderHome() {
    const all = B.getProducts();
    $("catGrid").innerHTML = B.CATEGORY_IDS.filter((id) => id !== "all").map((id) => {
      const n = all.filter((p) => p.category === id).length;
      return `<a href="index.html?cat=${id}" data-spa class="group flex flex-col items-center gap-2.5 p-3 sm:p-4 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 hover:-translate-y-0.5 transition text-center">
        <span class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${id === "fashion" ? "bg-amber-400 text-stone-900" : "bg-stone-100 text-stone-700 group-hover:bg-stone-900 group-hover:text-white"} grid place-items-center text-lg sm:text-xl transition">
          <i class="fa-solid ${B.categoryIcon(id)}" aria-hidden="true"></i>
        </span>
        <span class="text-xs sm:text-sm font-bold leading-tight">${t("cat." + id)}</span>
        <span class="text-[11px] text-stone-400 -mt-1.5">${n} ${t("itemsCount")}</span>
      </a>`;
    }).join("");

    $("fashionTiles").innerHTML = Object.keys(FASHION_IMAGES).map((group) => {
      const n = all.filter((p) => p.category === "fashion" && B.inSubGroup(p, group)).length;
      const leaves = (tree[group] || []).slice(0, 3).map(B.subLabel).join(" · ");
      return `<a href="index.html?cat=fashion&group=${group}" data-spa class="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200">
        <img src="${FASHION_IMAGES[group]}" alt="" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent"></div>
        <div class="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white">
          <p class="text-lg sm:text-xl font-extrabold leading-tight">${B.subLabel(group)}</p>
          <p class="text-xs text-white/75 mt-1 line-clamp-1 hidden sm:block">${leaves}</p>
          <span class="mt-3 inline-flex items-center gap-2 text-xs font-bold bg-white/15 backdrop-blur px-3 py-1.5 rounded-full">${n} ${t("itemsCount")} <i class="fa-solid fa-arrow-right text-[10px]" aria-hidden="true"></i></span>
        </div>
      </a>`;
    }).join("");

    $("fashionChips").innerHTML = POPULAR_FASHION.map(([group, leaf]) =>
      chip(`index.html?cat=fashion&group=${group}&leaf=${leaf}`, `${B.subLabel(leaf)} <span class="text-stone-400 font-normal">· ${B.subLabel(group).split(" ")[0]}</span>`)
    ).join("");

    $("freshGrid").innerHTML = all.slice().reverse().slice(0, 8).map(B.productCard).join("");
  }

  function renderCrumbs() {
    const sep = `<i class="fa-solid fa-chevron-right text-[9px] text-stone-300 mx-2" aria-hidden="true"></i>`;
    const parts = [`<a href="index.html" data-spa class="hover:text-stone-900">${t("home")}</a>`];
    if (state.cat) parts.push(`<a href="${urlFor({ group: "", leaf: "" })}" data-spa class="hover:text-stone-900">${t("cat." + state.cat)}</a>`);
    if (state.group) parts.push(`<a href="${urlFor({ leaf: "" })}" data-spa class="hover:text-stone-900">${B.subLabel(state.group)}</a>`);
    if (state.leaf) parts.push(`<span class="text-stone-900 font-semibold" aria-current="page">${B.subLabel(state.leaf)}</span>`);
    if (!state.cat && state.q) parts.push(`<span class="text-stone-900 font-semibold">${t("resultsFor")}</span>`);
    $("crumbs").innerHTML = `<ol class="flex flex-wrap items-center">${parts.map((p, i) => `<li class="flex items-center">${i ? sep : ""}${p}</li>`).join("")}</ol>`;
  }

  function renderSideTree(base) {
    const link = (href, label, count, active, depth = 0) =>
      `<li><a href="${href}" data-spa ${active ? 'aria-current="page"' : ""}
        class="flex items-center justify-between gap-2 rounded-lg ${depth ? "pl-4 pr-2 py-1.5 text-[13px]" : "px-3 py-2 text-sm"} ${active ? "bg-stone-900 text-white font-bold" : count ? "text-stone-700 hover:bg-stone-100 font-semibold" : "text-stone-400 hover:bg-stone-100"}">
        <span class="truncate">${label}</span><span class="text-xs ${active ? "text-stone-300" : "text-stone-400"}">${count}</span></a></li>`;

    let html = "";
    if (!state.cat || state.cat === "all") {
      const pool = state.cat === "all" ? base : baseItems({ ignoreCat: true });
      html = B.CATEGORY_IDS.filter((id) => id !== "all").map((id) =>
        link(urlFor({ cat: id, group: "", leaf: "" }), t("cat." + id), pool.filter((p) => p.category === id).length, false)
      ).join("");
    } else {
      const groups = B.SUBCATEGORIES[state.cat] || [];
      html = link(urlFor({ group: "", leaf: "" }), t("allSection"), base.length, !state.group);
      html += groups.map((g) => {
        const active = state.group === g;
        let row = link(urlFor({ group: g, leaf: "" }), B.subLabel(g), base.filter((p) => B.inSubGroup(p, g)).length, active && !state.leaf);
        if (active && tree[g]) {
          row += `<li><ul class="mt-1 mb-2 ml-3 border-l border-stone-200 space-y-0.5 max-h-96 overflow-y-auto">${tree[g].map((leaf) =>
            link(urlFor({ group: g, leaf }), B.subLabel(leaf), base.filter((p) => p.subcategory === leaf).length, state.leaf === leaf, 1)
          ).join("")}</ul></li>`;
        }
        return row;
      }).join("");
    }
    $("sideTree").innerHTML = `<div class="sticky top-36 rounded-2xl bg-white border border-stone-200 p-3">
      <h2 class="px-3 pt-1 pb-2 text-xs font-bold uppercase tracking-wider text-stone-400">${t(state.cat && state.cat !== "all" ? "sections" : "catsTitle")}</h2>
      <ul class="space-y-0.5">${html}</ul></div>`;
  }

  function renderSubNav(base) {
    const groups = state.cat && state.cat !== "all" ? B.SUBCATEGORIES[state.cat] || [] : [];
    let tiles = "";
    let chips = "";

    if (state.cat === "fashion" && !state.group) {
      tiles = `<div class="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">${Object.keys(FASHION_IMAGES).map((g) => {
        const n = base.filter((p) => B.inSubGroup(p, g)).length;
        return `<a href="${urlFor({ group: g, leaf: "" })}" data-spa class="group relative h-28 sm:h-36 rounded-2xl overflow-hidden bg-stone-200">
          <img src="${FASHION_IMAGES[g]}" alt="" class="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105">
          <div class="absolute inset-0 bg-gradient-to-t from-stone-950/75 to-stone-950/0"></div>
          <div class="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white flex items-end justify-between gap-2">
            <span class="font-extrabold leading-tight">${B.subLabel(g)}</span><span class="text-xs font-bold text-white/80">${n}</span>
          </div></a>`;
      }).join("")}</div>`;
    }

    if (state.group && tree[state.group]) {
      const leaves = tree[state.group].filter((leaf) => leaf === state.leaf || base.some((p) => p.subcategory === leaf));
      chips = chip(urlFor({ leaf: "" }), t("allSection"), { active: !state.leaf, count: base.filter((p) => B.inSubGroup(p, state.group)).length }) +
        leaves.map((leaf) => chip(urlFor({ leaf }), B.subLabel(leaf), { active: state.leaf === leaf, count: base.filter((p) => p.subcategory === leaf).length })).join("");
      chips = `<div class="mt-6 flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">${chips}</div>`;
    } else if (groups.length > 1) {
      chips = `<div class="mt-4 flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 lg:hidden">${
        groups.map((g) => chip(urlFor({ group: g, leaf: "" }), B.subLabel(g), { active: state.group === g, count: base.filter((p) => B.inSubGroup(p, g)).length })).join("")
      }</div>`;
    } else if (!state.cat || state.cat === "all") {
      const pool = state.cat === "all" ? base : baseItems({ ignoreCat: true });
      chips = `<div class="mt-4 flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 lg:hidden">${
        B.CATEGORY_IDS.filter((id) => id !== "all").map((id) => chip(urlFor({ cat: id, group: "", leaf: "" }), t("cat." + id), { count: pool.filter((p) => p.category === id).length })).join("")
      }</div>`;
    }
    $("subTiles").innerHTML = tiles;
    $("subChips").innerHTML = chips;
  }

  function renderList() {
    const base = baseItems();
    const items = sortItems(base.filter((p) => matchesSub(p, state.group, state.leaf)));
    const title = state.leaf ? B.subLabel(state.leaf)
      : state.group ? B.subLabel(state.group)
      : state.cat ? t("cat." + state.cat)
      : `${t("resultsFor")} «${esc(state.q)}»`;
    $("listTitle").innerHTML = state.cat && state.q ? `${title} <span class="text-stone-400 font-bold">«${esc(state.q)}»</span>` : title;
    $("listCount").textContent = `${items.length} ${t("itemsCount")}`;
    document.title = `${$("listTitle").textContent} — BALTIQ`;
    renderCrumbs();
    renderSubNav(base);
    renderSideTree(base);
    $("productGrid").innerHTML = items.length ? items.map(B.productCard).join("") : emptyState();
  }

  function render() {
    const isHome = !state.cat && !state.q;
    $("homeView").hidden = isHome ? false : true;
    $("listView").hidden = !isHome ? false : true;
    syncChrome();
    $("countryFilter").value = state.country;
    $("condFilter").value = state.cond;
    $("sortSelect").value = state.sort;
    if (isHome) {
      document.title = "BALTIQ — маркетплейс Балтии";
      renderHome();
    } else {
      renderList();
    }
  }

  $("countryFilter").innerHTML = `
    <option value="all">${t("allBaltics")}</option>
    <option value="LV">${t("lv")}</option>
    <option value="LT">${t("lt")}</option>
    <option value="EE">${t("ee")}</option>`;
  $("condFilter").innerHTML = `
    <option value="all">${t("allConditions")}</option>
    <option value="new">${B.optLabel("new")}</option>
    <option value="used">${B.optLabel("used")}</option>`;
  $("sortSelect").innerHTML = `
    <option value="new">${t("sortNew")}</option>
    <option value="cheap">${t("sortCheap")}</option>
    <option value="exp">${t("sortExp")}</option>`;

  $("countryFilter").onchange = (e) => go({ country: e.target.value }, { replace: true, scroll: false });
  $("condFilter").onchange = (e) => go({ cond: e.target.value }, { replace: true, scroll: false });
  $("sortSelect").onchange = (e) => go({ sort: e.target.value }, { replace: true, scroll: false });

  const form = $("headerSearch");
  const input = $("searchInput");
  if (form && input) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      go({ q: input.value.trim() });
    });
    let wasEmpty = !state.q;
    input.addEventListener("input", () => {
      const q = input.value.trim();
      go({ q }, { replace: !wasEmpty, scroll: false });
      wasEmpty = !q;
    });
  }

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-spa]");
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    history.pushState(null, "", a.getAttribute("href"));
    readURL();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("popstate", () => {
    readURL();
    render();
  });

  readURL();
  render();
})();
