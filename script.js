window.offline = true;
! function (e, t, o) {
	"use strict";

	function n() {
		dom.search.querySelector(".h1").textContent = ut.brand.replace(/-/g, " ")
	}

	function s() {
		fe = !0, document.body.classList.remove("productPane"), de(ut.brand ? "/brand/" + ut.brand : t.querySelector("#cats .active").getAttribute("href"))
	}

	function i() {
		var e = window.innerWidth - 400;
		e > 1280 && (e = 1280), dom.main.style.maxWidth = e + "px", dom.paneCont.style.maxWidth = e + "px", dom.footerRow.style.maxWidth = e + "px"
	}

	function r() {
		document.body.classList.remove("navAnim")
	}

	function a(e) {
		return e.preventDefault(), !1
	}

	function l() {
		be = e.innerHeight, Le = be - ge, we = be - Ee, Se = e.innerWidth - 2 * pe, Ce = be / 2
	}

	function d() {
		function e(e, t) {
			if (Oe === !0) {
				var o = t.getAttribute("src");
				return o = o.split("/").pop(), o = o.replace("brand-", ""), o = o.split(".")[0], void de("/brand/" + o)
			}
			if (e.classList.contains("limit")) {
				e.classList.remove("limit");
				var n = mt.brand.indexOf(t.getAttribute("alt"));
				mt.brand.splice(n, 1)
			} else e.classList.add("limit"), mt.brand.push(t.getAttribute("alt"))
		}
		dom.brandFilters = document.getElementById("brandFilters"), dom.subFilters = document.getElementById("subFilters"), dom.brandFilters.addEventListener("click", function (t) {
			return "brandFilters" === t.target.getAttribute("id") || void ("IMG" === t.target.nodeName ? (t.preventDefault(), e(t.target.parentElement, t.target), u()) : "DIV" === t.target.nodeName && (t.preventDefault(), e(t.target, t.target.querySelector("img")), u()))
		}), dom.subFilters.addEventListener("click", function (e) {
			if ("LI" === e.target.nodeName)
				if (e.preventDefault(), e.target.classList.contains("limit")) {
					e.target.classList.remove("limit");
					var t = mt.sub.indexOf(e.target.textContent);
					mt.sub.splice(t, 1), u()
				} else e.target.classList.add("limit"), mt.sub.push(e.target.textContent), u()
		})
	}

	function u() {
		Oe !== !0 && G(!0, null, re)
	}

	function h() {
		t.getElementById("prodSubImgs").addEventListener("click", function (e) {
			if (e.target.dataset.full) {
				dom.paneCont.classList.add("imgLoading");
				var t = new Image;
				t.onload = m, t.setAttribute("src", e.target.dataset.full)
			} else {
				var o = e.target.parentElement.dataset.full;
				o && (dom.paneCont.classList.add("imgLoading"), t = new Image, t.onload = m, t.setAttribute("src", o))
			}
		})
	}

	function m() {
		console.log(this.getAttribute("src")), dom.mainProdImg.src = this.getAttribute("src"), dom.paneCont.classList.remove("imgLoading")
	}

	function g(e) {
		Oe !== !0 && (document.body.classList.add("prodLoading"), document.body.classList.add("productPane"), I(e, p))
	}

	function p(e) {
		if (e = e[0], e.brand) var t = "/img/brand-" + te(e.brand) + ".svg";
		else t = "/img/logo.svg";
		if (!e) return void console.log("No product found.");
		e.images.web[0] ? dom.productPaneImg.src = e.images.web[0] : dom.productPaneImg.src = t, dom.productPaneName.textContent = e.brand + " " + e.name, dom.productPaneSku.textContent = e.sku, dom.productPanePrice.textContent = e.price, e.manual ? (dom.productPaneManual.setAttribute("href", e.manual), dom.productPaneManual.classList.remove("hide")) : dom.productPaneManual.classList.add("hide"), dom.productPaneBrand.setAttribute("src", t), dom.title.textContent = "Escalade Sports // " + e.brand + " " + e.name, e.bullets && "object" == typeof e.bullets && e.bullets[0] ? dom.productPaneCopy.innerHTML = "<ul><li>" + e.bullets.join("</li><li>") + "</li></ul>" : "string" == typeof e.bullets ? dom.productPaneCopy.innerHTML = "<ul><li>" + e.bullets + "</li></ul>" : dom.productPaneCopy.textContent = "No description.";
		for (var o = dom.prodSubImgs.querySelectorAll(".cell"), n = e.images.web.length <= 8 ? e.images.web.length : 8, s = 0; s < n; s++) {
			if (s >= o.length) {
				var i = o[0].cloneNode(!0);
				dom.prodSubImgs.appendChild(i)
			} else i = o[s];
			i.classList.remove("hide");
			var r = i.querySelector("img");
			r.src = e.images.web[s].replace(".com/1200/", ".com/400/"), i.querySelector("a").dataset.full = e.images.web[s]
		}
		for (; s < o.length;) o[s].classList.add("hide"), s++;
		document.body.classList.remove("prodLoading")
	}

	function f() {
		Ie.classList.add("closing")
	}

	function v() {
		Oe = !0;
		var e = document.getElementById("searchForm"),
			t = "";
		t += '<span class="offlineCallout">', t += "<span>Visit the live</span> ", t += '<span class="link" data-href="https://www.escaladesports.com/">Escalade Sports 2016 Online Catalog</span> ', t += "<span>to stay up to date on new brands and products!</span>", t += "</span>", e.innerHTML = t, document.querySelector("#search label").textContent = "Online Catalog";
		e.querySelector(".link").addEventListener("click", y)
	}

	function y() {
		if (this.dataset && this.dataset.href) var e = this.dataset.href;
		else e = this.href;
		window.open(e, "_system")
	}

	function b(e, t) {
		if (e.indexOf('..') === 0) {
			e = e.replace('..', '')
		}
		if (console.log("Getting offline page " + e), "/" == e || "./" == e) return w();
		var o = new XMLHttpRequest;
		o.onreadystatechange = function () {
			o.readyState == XMLHttpRequest.DONE && (200 == o.status || 0 == o.status ? L(e, o.responseText, t) : 400 == o.status ? console.error("There was an error 400") : console.error(o.status + " status was returned"))
		}, 0 === e.indexOf("/") && (e = e.replace("/", "")), e += "/index.html", console.log("Getting page: " + e), o.open("GET", e, !0), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.send()
	}

	function L(e, t, o) {
		e = e.split("/");
		var n = document.createElement("div");
		n.innerHTML = t;
		var s;
		if (console.log("PAGE:"), console.log(e), e.length && e[0])
			if (0 == e.indexOf("brand")) n = n.querySelector("#categoryCont"), s = document.getElementById("categoryCont"), s ? s.parentElement.replaceChild(n, s) : dom.main.appendChild(n), C();
			else if (0 == e.indexOf("product")) n = n.querySelector("#prodCont"), s = document.getElementById("prodCont"), s ? s.parentElement.replaceChild(n, s) : dom.main.appendChild(n), S();
			else {
				n = n.querySelector("#categoryCont");
				var s = document.getElementById("categoryCont");
				s ? s.parentElement.replaceChild(n, s) : dom.main.appendChild(n), C()
			} else w();
		ce(), o && o()
	}

	function w() {
		var e = E("#categoryCont");
		e && e.classList.add("hide"), e = E("#indexCont"), e && e.classList.remove("hide")
	}

	function S() {
		console.log("offlineProductRender"), t.body.classList.add("productPane"), dom.mainProdImg = dom.paneCont.querySelector("#mainProdImg"), h()
	}

	function C() {
		var e = E("#indexCont");
		e && e.classList.add("hide"), d()
	}

	function E(e) {
		var t = e.substring(1);
		return dom[t] || (dom[t] = document.querySelector(e)), dom[t]
	}

	function k(e, t) {
		e.brand && (e.brand.value = e.brand.value.replace(/-/g, " ")), ut.brand && delete e.category, e.site = "ecatalog", e.sort = {
			price: "DESC"
		}, mt.brand.length && (e.brand = {
			value: mt.brand,
			match: "any"
		}), mt.sub.length && (e.subcategory = {
			value: mt.sub,
			match: "any"
		}), e.category && (e.category.value = e.category.value.replace(/-/g, " "));
		var o = new XMLHttpRequest;
		o.onreadystatechange = function () {
			if (o.readyState == XMLHttpRequest.DONE)
				if (200 == o.status) {
					try {
						console.log(o.responseText);
						var e = JSON.parse(o.responseText)
					} catch (n) {
						console.log(n), console.log(o.responseText)
					}
					t(e.products)
				} else 400 == o.status ? console.error("There was an error 400") : console.error("Non 200/400 status was returned: " + o.status)
		}, o.open("POST", Ve + "/salsify/search", !0), o.setRequestHeader("Content-Type", "application/json");
		var n = JSON.stringify(e);
		o.send(n)
	}

	function T(e, t) {
		if (e = e.replace(/-/g, " "), "search" === e) return t();
		var o = {
			category: e,
			site: "ecatalog"
		},
			n = new XMLHttpRequest;
		n.onreadystatechange = function () {
			if (n.readyState == XMLHttpRequest.DONE)
				if (200 == n.status) {
					try {
						console.log(n.responseText);
						var e = JSON.parse(n.responseText)
					} catch (o) {
						console.log(o), console.log(n.responseText)
					}
					t(e)
				} else 400 == n.status ? console.log("There was an error 400") : (console.log(n.responseText), console.log("Non 200/400 status was returned: " + n.status))
		}, n.open("POST", Ve + "/salsify/get", !0), n.setRequestHeader("Content-Type", "application/json");
		var s = JSON.stringify(o);
		n.send(s)
	}

	function x(e, t) {
		e = e.replace(/-/g, " ");
		var o = {
			brand: e,
			site: "ecatalog"
		},
			n = new XMLHttpRequest;
		n.onreadystatechange = function () {
			if (n.readyState == XMLHttpRequest.DONE)
				if (200 == n.status) {
					try {
						console.log(n.responseText);
						var e = JSON.parse(n.responseText)
					} catch (o) {
						console.log(o), console.log(n.responseText)
					}
					t(e)
				} else 400 == n.status ? console.log("There was an error 400") : console.log("Non 200/400 status was returned: " + n.status)
		}, n.open("POST", Ve + "/salsify/get", !0), n.setRequestHeader("Content-Type", "application/json");
		var s = JSON.stringify(o);
		n.send(s)
	}

	function q(e, t, o, n) {
		k({
			category: {
				value: e
			},
			limit: {
				count: t,
				offset: o
			}
		}, n)
	}

	function A(e, t, o, n) {
		k({
			brand: {
				value: e
			},
			limit: {
				count: t,
				offset: o
			}
		}, n)
	}

	function P(e, t, o, n) {
		k({
			sku: {
				value: e,
				match: "any",
				compare: "contains"
			},
			name: {
				value: e,
				match: "any",
				compare: "contains"
			},
			brand: {
				value: e,
				match: "any",
				compare: "contains"
			},
			category: {
				value: e,
				match: "any",
				compare: "contains"
			},
			limit: {
				count: t,
				offset: o
			},
			fieldmatch: "or",
			fuzzy: !0
		}, n)
	}

	function I(e, t) {
		k({
			sku: {
				value: e
			}
		}, t)
	}

	function O(e, t) {
		return Ge === !0 ? (t && t(), !1) : (Me = !1, Re = !1, Ge = !0, Ne = e, Xe = t, Fe = window.pageYOffset || document.documentElement.scrollTop, De = Ne > Fe ? 1 : -1, Be = Math.abs(Ne - Fe), void requestAnimationFrame(N))
	}

	function N(e) {
		Me === !1 ? (Me = e, He = 0) : (He = e - Me, He > ze && (He = ze)), je = He / ze, t.documentElement.scrollTop = t.body.scrollTop = Fe + Be * H(je) * De, je > .75 && Re === !1 && (Re = !0, Xe && Xe()), je < 1 ? requestAnimationFrame(N) : setTimeout(M, Je)
	}

	function M() {
		Ge = !1
	}

	function H(e) {
		return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
	}

	function B() {
		clearTimeout(Ye), t.body.classList.add("foldAnim"), Ye = setTimeout(F, 1e3)
	}

	function F() {
		t.body.classList.remove("foldAnim")
	}

	function D() {
		gt = dom.searchInput.value, G(!0, !1, re), O(we)
	}

	function j(e) {
		if ($e) {
			e += 200;
			for (var t = dom.storyView.length; t--;)
				if (X(dom.storyView[t])) dom.storyView[t].classList.contains("active") || (dom.storyView[t].classList.add("active"), "number" == typeof Qe[t] && dom.storyItems[Qe[t]].classList.add("active"), t === Ze && Y());
				else if (dom.storyView[t].classList.contains("active") && (dom.storyView[t].classList.remove("active"), "number" == typeof Qe[t] && dom.storyItems[Qe[t]].classList.remove("active"), t === Ze)) {
					et = !1;
					for (var o = dom.storyCells.length; o--;) dom.storyCells[o].classList.remove("active")
				}
		}
	}

	function X(e) {
		return e.getBoundingClientRect().top < Ce
	}

	function R() {
		$e || (dom.brandCount = t.getElementById("brandCount"), dom.brandCount && ($e = !0, dom.story = t.getElementById("story"), dom.storyLines = dom.story.querySelectorAll("path"), dom.storyItems = dom.story.querySelectorAll(".item"), dom.storyCells = dom.story.querySelectorAll(".cell"), dom.storyView = dom.story.querySelectorAll(".view"), dom.brandCount.textContent = 0, dom.storyCells && (Ke = dom.storyCells.length)))
	}

	function Y() {
		if (et !== !0) {
			et = !0;
			var e = 0,
				t = setInterval(function () {
					return et === !1 ? void clearInterval(t) : (e++ , e >= Ke && (et = !1, clearInterval(t)), dom.storyCells[e - 1].classList.add("active"), void (dom.brandCount.textContent = e))
				}, 30)
		}
	}

	function W(e) {
		ot = e.touches[0].clientX, nt = e.touches[0].clientY
	}

	function V(e) {
		if (ot && nt && !(window.innerWidth < dt.mediumBreakpoint)) {
			var t = e.touches[0].clientX,
				o = e.touches[0].clientY,
				n = ot - t,
				s = nt - o;
			Math.abs(n) > Math.abs(s) && (n > tt ? J() : n < -tt && z()), ot = null, nt = null
		}
	}

	function J() {
		for (var e = !1, t = 0; t < dom.categories.length; t++) {
			if (e === !0) {
				console.log("found"), de(dom.categories[t].getAttribute("href")), e = !1;
				break
			}
			dom.categories[t].classList.contains("active") && (e = !0)
		}
		e === !0 && de(dom.categories[0].getAttribute("href"))
	}

	function z() {
		for (var e = !1, t = dom.categories.length; t--;) {
			if (e === !0) {
				console.log("found"), de(dom.categories[t].getAttribute("href")), e = !1;
				break
			}
			dom.categories[t].classList.contains("active") && (e = !0)
		}
		e === !0 && de(dom.categories[0].getAttribute("href"))
	}

	function G(e, t, o) {
		function n(e) {
			s === st && (e && ("string" == typeof e ? a = _(t, e) : "object" == typeof e ? Array.isArray(e) ? c = e : e.subcategories ? l = e : a = e : a = e), i++ , i >= r && (t ? Q(a, c, l) : $(c), o && o()))
		}
		if (Oe !== !0) {
			var s = ++st,
				i = 0,
				r = 0;
			e && r++ , t ? (r++ , K()) : Z(), "category" === t && r++ , e && (ut.productShowing = 0, gt ? P(gt, it, 0, n) : ut.brand ? (x(ut.brand, n), A(ut.brand, it, 0, n)) : ut.category && (T(ut.category, n), q(ut.category, it, 0, n))), t && U(t, n);
			var a, c, l
		}
	}

	function U(e, t) {
		if (console.log("loadTemplate()"), e in rt) t && t(rt[e]);
		else {
			var o = new XMLHttpRequest;
			o.onreadystatechange = function () {
				o.readyState == XMLHttpRequest.DONE && (200 == o.status ? (console.log(o.responseText), t(o.responseText)) : 400 == o.status ? console.error("There was an error 400") : console.error("Non 200/400 status was returned"))
			}, o.open("POST", "/getTemplate.php", !0), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.send("template=" + e + "&category=" + ut.category)
		}
	}

	function _(e, o) {
		var n = t.createElement("div");
		return n.innerHTML = o, n = n.firstChild, dom.main.insertBefore(n, dom.tplLoading), dom.templates[n.id] = n, n.classList.add("hide"), rt[e] = n, n
	}

	function K() {
		for (var e in dom.templates) dom.templates[e].classList.add("hide");
		dom.tplLoading.classList.remove("hide"), ee()
	}

	function Q(e, t, o) {
		e && e.classList.remove("hide"), dom.tplLoading ? dom.tplLoading.classList.add("hide") : console.log("dom.tplLoading does not exist"), re(), t && oe(t, o, !0)
	}

	function Z() {
		dom.product.classList.add("hide"), dom.tplLoading.classList.remove("hide"), ee()
	}

	function $(e) {
		dom.product.classList.remove("hide"), dom.tplLoading.classList.add("hide"), e && oe(e, !1, !0)
	}

	function ee() {
		if (lt)
			for (var e = lt.extension.children.length; e--;) lt.extension.children[e].querySelector("img").setAttribute("src", "")
	}

	function te(e) {
		return e.replace(ct, "-").toLowerCase()
	}

	function oe(e, t, o) {
		if (!lt) return void console.log("No product var!");
		if (o) {
			lt.reset(), ut.productShowing = e.length;
			var n = 0
		} else n = ut.productShowing, ut.productShowing += e.length;
		for (var s = 0; s < e.length; s++) lt.extension.children[n] ? (e[s].name ? lt.extension.children[n].querySelector(".title").textContent = e[s].brand + " " + e[s].name : lt.extension.children[n].querySelector(".title").textContent = " ", e[s].images && e[s].images.web && e[s].images.web[0] ? lt.extension.children[n].querySelector("img").src = e[s].images.web[0] : e[s].brand ? lt.extension.children[n].querySelector("img").src = "/img/brand-" + te(e[s].brand) + ".svg" : lt.extension.children[n].querySelector("img").src = "/img/logo.svg", e[s].bullets && e[s].bullets[0] ? "object" == typeof e[s].bullets ? lt.extension.children[n].querySelector(".desc").innerHTML = "<ul><li>" + e[s].bullets.join("</li><li>") + "</li></ul>" : lt.extension.children[n].querySelector(".desc").innerHTML = "<ul><li>" + e[s].bullets + "</li></ul>" : lt.extension.children[n].querySelector(".desc").textContent = "No description.", lt.extension.children[n].querySelector("a").setAttribute("href", "/product/" + e[s].sku), lt.extension.children[n].querySelector(".itemNo").textContent = e[s].sku ? e[s].sku : "", lt.extension.children[n].querySelector(".msrp").textContent = e[s].price ? e[s].price : "", n++) : (console.log("Not enough cells: " + n), console.log(s), n++);
		if (o && (lt.extension.total(e.length), lt.extension.show(e.length)), e.length < it ? lt.processing = !0 : lt.processing = !1, t) {
			ne(t.brands);
			for (var i = [].slice.call(dom.brandFilters.querySelectorAll("div")); i.length < t.brands.length;) {
				if (i.length) var r = i[0].cloneNode(!0);
				else r = document.createElement("div"), r.innerHTML = "<img>";
				dom.brandFilters.appendChild(r), i.push(r)
			}
			for (var s = 0; s < i.length; s++) {
				if (s < t.brands.length) {
					var a = i[s].querySelector("img");
					i[s].classList.remove("hide"), a.setAttribute("alt", t.brands[s]), a.setAttribute("src", "/img/brand-" + te(t.brands[s]) + ".svg")
				} else i[s].classList.add("hide");
				i[s].classList.remove("limit")
			}
			for (i = [].slice.call(dom.subFilters.querySelectorAll("li")); i.length < t.subcategories.length;) {
				if (i.length) var r = i[0].cloneNode(!0);
				else r = document.createElement("li");
				dom.subFilters.appendChild(r), i.push(r)
			}
			for (s = 0; s < i.length; s++) s < t.subcategories.length ? (i[s].textContent = t.subcategories[s], i[s].classList.remove("hide")) : i[s].classList.add("hide"), i[s].classList.remove("limit");
			i = dom.subFilters
		}
		ce()
	}

	function ne(e) {
		for (var t = e.length; t--;)
			if ("Unassigned" === e[t]) {
				e.splice(t, 1);
				break
			}
		return e
	}

	function se() {
		if (!dom.sortForm && (dom.sortForm = t.querySelector("#sorting form"), dom.sortForm))
			for (var e = dom.sortForm.querySelectorAll('input[type="radio"], select'), o = e.length; o--;) e[o].addEventListener("change", ie)
	}

	function ie() {
		ut[this.name] = this.value
	}

	function re() {
		R(), dom.productList || (dom.productList = t.getElementById("productList"), dom.productList ? (t.querySelector(".sortToggle").addEventListener("click", function (e) {
			return e.preventDefault(), t.body.classList.toggle("showSorting"), !1
		}), d(), dom.product = t.getElementById("product"), lt = new c.InfiniteScroll({
			parent: dom.productList,
			loader: t.getElementById("listEnd"),
			onIncrement: function (e) {
				gt ? P(gt, it, ut.productShowing, function (t) {
					e(t.length), oe(t)
				}) : ut.brand ? A(ut.brand, it, ut.productShowing, function (t) {
					e(t.length), oe(t)
				}) : ut.category && q(ut.category, it, ut.productShowing, function (t) {
					e(t.length), oe(t)
				})
			}
		})) : console.log("No product list found!"))
	}

	function ae(e, o) {
		if (mt.brand.length = 0, mt.sub.length = 0, gt = !1, !e) {
			var n = "cat-" + ut.category,
				s = t.body.classList;
			if (ut.category === '..') return
			for (me = s.length; me--;) 0 === s[me].indexOf("cat-") && s[me] !== n && s.remove(s[me]);
			for (s.add(n), me = dom.categories.length; me--;) dom.categories[me].id !== ut.category ? dom.categories[me].classList.remove("active") : dom.categories[me].classList.add("active")
		}
		"cover" === ut.category ? G(null, "index", re) : G(!0, "category", re)
	}

	function ce() {
		for (var e = t.querySelectorAll("a:not(.skip)"), o = e.length; o--;) {
			var n = e[o].getAttribute("href");
			n && "#" !== n && 0 !== n.indexOf("http") && 0 !== n.indexOf("tel:") && 0 !== n.indexOf("mailto:") && e[o].addEventListener("click", le), e[o].classList.add("skip")
		}
	}

	function le(e) {
		return console.log("click"), e.preventDefault(), !this.classList.contains("active") && void de(this.getAttribute("href"))
	}

	function de(o) {
		var n = o.split("/").filter(ue);
		e.innerWidth < dt.mediumBreakpoint && t.body.classList.contains("navOpen") && (dom.mainNav.scrollTop = 0, yt.close()), "." === n[0] && n.shift(), n[0] ? "product" === n[0] ? ut.product = n[1] : "brand" === n[0] ? (ut.brand = n[1], ut.category = "search") : (ut.brand = !1, ut.category = n[0], ut.product = !1) : (ut.category = "cover", ut.product = !1), "ga" in window && ga("send", "pageview", o), Oe === !0 && b(o), Oe === !0 ? history.pushState(ht, null, window.location.href) : history.pushState(ht, null, o)
	}

	function ue(e) {
		return e
	}
	if (!("querySelector" in document && "localStorage" in window && "addEventListener" in window)) return !1;
	! function () {
		function e(t, n) {
			function s(e, t) {
				return function () {
					return e.apply(t, arguments)
				}
			}
			var i;
			if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = t, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !e.notNeeded(t)) {
				for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, c = 0, l = r.length; c < l; c++) a[r[c]] = s(a[r[c]], a);
				o && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (e, o, n) {
					var s = Node.prototype.removeEventListener;
					"click" === e ? s.call(t, e, o.hijacked || o, n) : s.call(t, e, o, n)
				}, t.addEventListener = function (e, o, n) {
					var s = Node.prototype.addEventListener;
					"click" === e ? s.call(t, e, o.hijacked || (o.hijacked = function (e) {
						e.propagationStopped || o(e)
					}), n) : s.call(t, e, o, n)
				}), "function" == typeof t.onclick && (i = t.onclick, t.addEventListener("click", function (e) {
					i(e)
				}, !1), t.onclick = null)
			}
		}
		var t = navigator.userAgent.indexOf("Windows Phone") >= 0,
			o = navigator.userAgent.indexOf("Android") > 0 && !t,
			n = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
			s = n && /OS 4_\d(_\d)?/.test(navigator.userAgent),
			i = n && /OS [6-7]_\d/.test(navigator.userAgent),
			r = navigator.userAgent.indexOf("BB10") > 0;
		e.prototype.needsClick = function (e) {
			switch (e.nodeName.toLowerCase()) {
				case "button":
				case "select":
				case "textarea":
					if (e.disabled) return !0;
					break;
				case "input":
					if (n && "file" === e.type || e.disabled) return !0;
					break;
				case "label":
				case "iframe":
				case "video":
					return !0
			}
			return /\bneedsclick\b/.test(e.className)
		}, e.prototype.needsFocus = function (e) {
			switch (e.nodeName.toLowerCase()) {
				case "textarea":
					return !0;
				case "select":
					return !o;
				case "input":
					switch (e.type) {
						case "button":
						case "checkbox":
						case "file":
						case "image":
						case "radio":
						case "submit":
							return !1
					}
					return !e.disabled && !e.readOnly;
				default:
					return /\bneedsfocus\b/.test(e.className)
			}
		}, e.prototype.sendClick = function (e, t) {
			var o, n;
			document.activeElement && document.activeElement !== e && document.activeElement.blur(), n = t.changedTouches[0], o = document.createEvent("MouseEvents"), o.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), o.forwardedTouchEvent = !0, e.dispatchEvent(o)
		}, e.prototype.determineEventType = function (e) {
			return o && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
		}, e.prototype.focus = function (e) {
			var t;
			n && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
		}, e.prototype.updateScrollParent = function (e) {
			var t, o;
			if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
				o = e;
				do {
					if (o.scrollHeight > o.offsetHeight) {
						t = o, e.fastClickScrollParent = o;
						break
					}
					o = o.parentElement
				} while (o)
			}
			t && (t.fastClickLastScrollTop = t.scrollTop)
		}, e.prototype.getTargetElementFromEventTarget = function (e) {
			return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
		}, e.prototype.onTouchStart = function (e) {
			var t, o, i;
			if (e.targetTouches.length > 1) return !0;
			if (t = this.getTargetElementFromEventTarget(e.target), o = e.targetTouches[0], n) {
				if (i = window.getSelection(), i.rangeCount && !i.isCollapsed) return !0;
				if (!s) {
					if (o.identifier && o.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
					this.lastTouchIdentifier = o.identifier, this.updateScrollParent(t)
				}
			}
			return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = o.pageX, this.touchStartY = o.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
		}, e.prototype.touchHasMoved = function (e) {
			var t = e.changedTouches[0],
				o = this.touchBoundary;
			return Math.abs(t.pageX - this.touchStartX) > o || Math.abs(t.pageY - this.touchStartY) > o
		}, e.prototype.onTouchMove = function (e) {
			return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
		}, e.prototype.findControl = function (e) {
			return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
		}, e.prototype.onTouchEnd = function (e) {
			var t, r, a, c, l, d = this.targetElement;
			if (!this.trackingClick) return !0;
			if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
			if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
			if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, r = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, i && (l = e.changedTouches[0], d = document.elementFromPoint(l.pageX - window.pageXOffset, l.pageY - window.pageYOffset) || d, d.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = d.tagName.toLowerCase(), "label" === a) {
				if (t = this.findControl(d)) {
					if (this.focus(d), o) return !1;
					d = t
				}
			} else if (this.needsFocus(d)) return e.timeStamp - r > 100 || n && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(d), this.sendClick(d, e), n && "select" === a || (this.targetElement = null, e.preventDefault()), !1);
			return !(!n || s || (c = d.fastClickScrollParent, !c || c.fastClickLastScrollTop === c.scrollTop)) || (this.needsClick(d) || (e.preventDefault(), this.sendClick(d, e)), !1)
		}, e.prototype.onTouchCancel = function () {
			this.trackingClick = !1, this.targetElement = null
		}, e.prototype.onMouse = function (e) {
			return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
		}, e.prototype.onClick = function (e) {
			var t;
			return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
		}, e.prototype.destroy = function () {
			var e = this.layer;
			o && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
		}, e.notNeeded = function (e) {
			var t, n, s, i;
			if ("undefined" == typeof window.ontouchstart) return !0;
			if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
				if (!o) return !0;
				if (t = document.querySelector("meta[name=viewport]")) {
					if (t.content.indexOf("user-scalable=no") !== -1) return !0;
					if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
				}
			}
			if (r && (s = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), s[1] >= 10 && s[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
				if (t.content.indexOf("user-scalable=no") !== -1) return !0;
				if (document.documentElement.scrollWidth <= window.outerWidth) return !0
			}
			return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (i = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(i >= 27 && (t = document.querySelector("meta[name=viewport]"), t && (t.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction))
		}, e.attach = function (t, o) {
			return new e(t, o)
		}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
			return e
		}) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e
	}(), window.c = {
		noop: function () { }
	}, ! function (e, t, o, n) {
		function s(e) {
			for (var t in e) this[t] = e[t];
			return this.children = this.parent.children, this.children.length && (this.orig = this.children[0].cloneNode(this.deep), this.orig.style.display = "none"), this.showing = this.children.length, this
		}

		function i() { }
		var r = {
			deep: !0,
			showEl: function (e) {
				e && (e.style.display = "block")
			},
			hideEl: function (e) {
				e && (e.style.display = "none")
			},
			onExtend: i,
			onContract: i,
			total: function (e) {
				return this.showing < e ? this.extendChildren(e) : this
			},
			incrementTotal: function (e) {
				return this.total(this.showing + e)
			},
			incrementShow: function (e) {
				return this.show(this.showing + e)
			},
			extendChildren: function (e) {
				var t = e - this.children.length;
				if (t > 0)
					for (; t--;) {
						var o = this.orig.cloneNode(this.deep);
						this.parent.appendChild(o)
					}
				return this
			},
			reset: function () {
				this.show(0)
			},
			show: function (e) {
				for (; this.showing > e;) this.showing-- , this.hideEl(this.children[this.showing]), this.onContract();
				for (; this.showing < e;) this.showing++ , this.showEl(this.children[this.showing - 1]), this.onExtend();
				return this
			}
		};
		s.prototype = r, o.DomExtension = s
	}(document, window, c), ! function (e, t, o, n) {
		function s(e) {
			for (var n in e) this[n] = e[n];
			return this.extension = new o.DomExtension({
				parent: this.parent
			}), this.requestTick(), t.addEventListener("scroll", this.requestTick.bind(this)), t.addEventListener("resize", this.requestTick.bind(this)), this
		}

		function i(e, t) {
			t()
		}
		var r = {
			increment: 8,
			onLoad: i,
			threshold: 10,
			listenerActive: !0,
			processing: !1,
			requestTick: function () {
				this.processing === !1 && requestAnimationFrame(this.update.bind(this)), this.processing = !0
			},
			update: function () {
				var o = t.innerHeight + (t.pageYOffset || e.documentElement.scrollTop),
					n = e.body.scrollHeight,
					s = n - o;
				s <= this.threshold ? (this.loader.style.visibility = "visible", this.onIncrement ? this.onIncrement(this.dynamicIncrement.bind(this)) : this.loaderShowing()) : this.processing = !1
			},
			reset: function () {
				this.extension.reset()
			},
			dynamicIncrement: function (e) {
				this.increment = e, this.loaderShowing()
			},
			loaderShowing: function () {
				this.extension.incrementTotal(this.increment), this.onLoad(this.extension.children, this.showConfirm.bind(this))
			},
			showConfirm: function () {
				this.processing = !1, this.extension.incrementShow(this.increment), this.loader.style.visibility = "hidden"
			}
		};
		s.prototype = r, o.InfiniteScroll = s
	}(document, window, c), ! function (e, t, o, n) {
		function s(e) {
			for (var t in e) this[t] = e[t];
			for (this.mainLinks = [], this.dropdowns = this.parent.querySelectorAll("ul ul"), t = this.dropdowns.length; t--;) this.dropdowns[t].addEventListener("click", this.clickBack.bind(this, this.dropdowns[t])), this.mainLinks.push(this.dropdowns[t].parentElement);
			for (var t = this.mainLinks.length; t--;) this.jsHover && (this.mainLinks[t].addEventListener("mouseover", this.hoverOpen.bind(this, this.mainLinks[t])), this.mainLinks[t].addEventListener("mouseout", this.hoverClose.bind(this, this.mainLinks[t]))), this.mainLinks[t].addEventListener("click", this.clickOpen.bind(this, this.mainLinks[t]));
			return this
		}

		function i() {
			for (var t = e.querySelectorAll("." + r.classes.nav), o = t.length; o--;) new s({
				parent: t[o]
			})
		}
		var r = {
			jsHover: !0,
			classes: {
				nav: "nav",
				vertical: "ver",
				open: "open"
			},
			closeAll: function (e) {
				if (e)
					for (var t = e.querySelectorAll("li"), o = t.length; o--;) t[o].classList.remove(this.classes.open);
				else
					for (o = this.mainLinks.length; o--;) this.mainLinks[o].classList.remove(this.classes.open)
			},
			hoverOpen: function (e) {
				var t = getComputedStyle(e).display;
				"block" !== t && "list-item" !== t && e.classList.add(this.classes.open)
			},
			hoverClose: function (e) {
				var t = getComputedStyle(e).display;
				"block" !== t && "list-item" !== t && e.classList.remove(this.classes.open)
			},
			clickOpen: function (e, t) {
				var o = getComputedStyle(e).display;
				"block" === o ? (t.preventDefault(), e.classList.add(this.classes.open), this.adjustHeight(e.querySelector("ul"))) : "list-item" === o && (t.preventDefault(), t.stopPropagation(), e.classList.contains(this.classes.open) ? this.closeAll(e.parentElement) : (this.closeAll(e.parentElement), e.classList.add(this.classes.open)))
			},
			clickBack: function (e, t) {
				if (t.stopPropagation(), "UL" === t.target.tagName) {
					var o = e.parentElement;
					o.classList.remove(this.classes.open), o = o.parentElement, o.parentElement.classList.contains(this.classes.vertical) ? this.parent.style.height = "100%" : this.adjustHeight(o)
				}
			},
			adjustHeight: function (e) {
				this.parent.style.height = e.offsetHeight + "px"
			}
		};
		s.prototype = r, o.findNavigation = i, o.Navigation = s
	}(document, window, c), ! function (e, t, o, n) {
		function s(e) {
			for (var t in e) this[t] = e[t];
			return this.el.classList.add(this.classes.processed), this.el.addEventListener("click", this.toggle.bind(this)), this.el.classList.contains(this.classes.activated) && (this.active = !0), this
		}

		function i() {
			for (var t = e.querySelectorAll("." + a.classes.hamburger), o = t.length; o--;) new s({
				el: t[o]
			})
		}

		function r() { }
		var a = {
			active: !1,
			classes: {
				hamburger: "ham",
				activated: "active",
				processed: "hamProc"
			},
			onOpen: r,
			onClose: r,
			toggle: function (e) {
				e.preventDefault(), this.active === !1 ? this.open() : this.close()
			},
			close: function () {
				this.active = !1, this.el.classList.remove(this.classes.activated), this.onClose()
			},
			open: function () {
				this.active = !0, this.el.classList.add(this.classes.activated), this.onOpen()
			}
		};
		s.prototype = a, o.Hamburger = s, o.findHamburger = i
	}(document, window, c), ! function (e, t, o, n) {
		function s(t) {
			for (var o in t) this[o] = t[o];
			return this.el.classList.add(this.classes.processed), this.el.dataset.toggleclass && (this.toggleClass = this.el.dataset.toggleclass), this.el.dataset.toggle && (this.target = e.querySelector(this.el.dataset.toggle), this.target.classList.contains(this.toggleClass) && (this.showing = !0)), this.el.dataset.toggleall && (this.targetAll = e.querySelectorAll(this.el.dataset.toggleAll), this.targetAll[0].classList.contains(this.toggleClass) && (this.showing = !0)), this.el.addEventListener(this.toggleOn, this.toggle.bind(this)), this
		}

		function i() {
			for (var t = e.querySelectorAll("[data-" + a.data.toggle + "]:not(." + a.classes.processed + "), [data-" + a.data.toggleAll + "]:not(." + a.classes.processed + ")"), o = t.length; o--;) new s({
				el: t[o]
			})
		}

		function r() { }
		var a = {
			toggleOn: "click",
			toggleClass: "show",
			classes: {
				toggled: "toggled",
				processed: "toggleProc"
			},
			data: {
				toggle: "toggle",
				toggleAll: "toggleall"
			},
			showing: !1,
			onShow: r,
			onHide: r,
			toggle: function () {
				return this.showing === !1 ? this.show() : this.hide()
			},
			show: function () {
				if (this.showing = !0, this.el.classList.add(this.classes.toggled), this.target) this.target.classList.add(this.toggleClass);
				else if (this.targetAll)
					for (var e = this.targetAll.length; e--;) this.targetAll[e].classList.add(this.toggleClass);
				return this.onShow(), this
			},
			hide: function () {
				if (this.showing = !1, this.el.classList.remove(this.classes.toggled), this.target) this.target.classList.remove(this.toggleClass);
				else if (this.targetAll)
					for (var e = this.targetAll.length; e--;) this.targetAll[e].classList.remove(this.toggleClass);
				return this.onHide(), this
			}
		};
		s.prototype = a, o.findToggle = i, o.Toggle = s
	}(document, window, c), e.dom = {
		cats: t.getElementById("cats"),
		mainNav: t.querySelector("header nav"),
		main: t.querySelector("main"),
		tplLoading: t.getElementById("tplLoading"),
		templates: t.getElementsByClassName("cont"),
		productPane: t.getElementById("productPane"),
		mainProdImg: t.getElementById("mainProdImg"),
		catArrow: t.getElementById("catArrow"),
		title: t.querySelector("title"),
		searchInput: t.querySelector("#searchForm input"),
		paneCont: t.querySelector("#paneCont"),
		prods: t.querySelector("#prods"),
		prodSubImgs: t.querySelector("#prodSubImgs .table"),
		search: t.getElementById("search"),
		ham: t.querySelector(".ham"),
		footerRow: t.querySelector("footer .row")
	}, dom.categories = dom.cats.querySelectorAll("a"), dom.productPaneImg = dom.productPane.querySelector("#mainProdImg"), dom.productPaneName = dom.productPane.querySelector("h4"), dom.productPaneSku = dom.productPane.querySelector("#prodId"), dom.productPanePrice = dom.productPane.querySelector("#prodMsrp"), dom.productPaneCopy = dom.productPane.querySelector("#prodCopy"), dom.productPaneRow = dom.productPane.querySelector(".row"), dom.productPaneBrand = dom.productPane.querySelector(".prodLogo"), dom.productPaneManual = dom.productPane.querySelector(".manualLink"), dom.productLoader = dom.paneCont.querySelector(".load");
	for (var he = {}, me = dom.templates.length; me--;) he[dom.templates[me].id] = dom.templates[me];
	dom.templates = he;
	var ge = 150,
		pe = 50;
	t.querySelector("#navService").addEventListener("click", function () {
		t.querySelector('[href="http://support.escaladesports.com"]').click()
	});
	var fe = !1;
	dom.productPane.addEventListener("click", function (e) {
		"productPane" !== e.target.id && "paneCont" !== e.target.id || s()
	}), dom.productPane.querySelector(".close").addEventListener("click", s), window.addEventListener("resize", i), i();
	var ve, ye = !1;
	c.Hamburger.prototype.onOpen = function () {
		dom.mainNav.classList.add("active"), document.body.classList.add("navOpen"), dom.mainNav.classList.add("active"), document.body.classList.add("navAnim"), clearTimeout(ve), ve = setTimeout(r, 500), dom.mainNav.scrollTop = 0, ye = !0, t.body.classList.remove("showLeftCats")
	}, c.Hamburger.prototype.onClose = function () {
		dom.mainNav.classList.remove("active"), document.body.classList.remove("navOpen"), dom.mainNav.classList.remove("active"), document.body.classList.add("navAnim"), clearTimeout(ve), ve = setTimeout(r, 500), ye = !0, t.body.classList.remove("showLeftCats")
	};
	for (var me = dom.categories.length; me--;) dom.categories[me].addEventListener("dragstart", a);
	var be, Le, we, Se, Ce, Ee = 200;
	e.addEventListener("resize", l), l();
	var ke, Te, xe = .84,
		qe = !1,
		Ae = 1 - xe,
		Pe = !1;
	if (dom.cats.addEventListener("mousemove", function (e) {
		ke = (e.clientX - pe) / Se, Te = ke, qe === !1 ? ke > xe && (qe = !0, t.body.classList.add("showCats")) : ke <= xe && (qe = !1, t.body.classList.remove("showCats")), Pe === !1 ? Te < Ae && (Pe = !0, t.body.classList.add("showLeftCats")) : Te >= Ae && (Pe = !1, t.body.classList.remove("showLeftCats"))
	}), h(), t.body.classList.contains("not-found")) {
		t.body.classList.remove("not-found");
		var Ie = t.createElement("div");
		Ie.classList.add("notFound"), Ie.innerHTML = '<div class="row"><div class="paneCont"><div class="row"><div class="close"></div><div class="msg"><p>Page not found!</p><p>For assistance, please contact customer support at:<br><a href="tel:18004671421" class="skip">1-800-467-1421</a><br><a href="mailto:customerservice@escaladesports.com" class="skip">customerservice@escaladesports.com</a></p></div></div></div></div>', e.history.replaceState({}, "", "/"), t.body.appendChild(Ie);
		var fe = !1;
		Ie.addEventListener("click", function (e) {
			(e.target.classList.contains("notFound") || e.target.classList.contains("paneCont")) && f()
		}), Ie.querySelector(".close").addEventListener("click", f)
	}
	var Oe = !1;
	document.body.classList.contains("offline") && v(), t.querySelector(".printLink").addEventListener("click", function (e) {
		return e.preventDefault(), yt.close(), dom.productPaneImg.src = dom.productPane.querySelector("#prodSubImgs a").dataset.full, setTimeout(window.print, 100), !1
	});
	var Ne, Me, He, Be, Fe, De, je, Xe, Re, Ye, We, Ve = "https://apis.escaladesports.com/v1",
		Je = 500,
		ze = 800,
		Ge = !1,
		Ue = !0;
	t.addEventListener("scroll", function (o) {
		We = e.pageYOffset || t.documentElement.scrollTop, Ue === !0 ? We > Le && (Ue = !1, t.body.classList.add("belowFold"), t.body.classList.remove("showLeftCats"), B()) : We <= Le && (Ue = !0, t.body.classList.remove("belowFold"), B()), "cover" == ht.category && j(We)
	}, !1), t.getElementById("downArrowCont").addEventListener("click", function () {
		if (e.innerWidth >= dt.largeBreakpint) var t = 60;
		else t = 80;
		O(document.body.classList.contains("belowFold") ? 0 : Le + t)
	});
	var _e = t.querySelector("#searchForm .form .button");
	_e && _e.addEventListener("click", D), dom.searchInput.addEventListener("keyup", function (e) {
		13 === e.keyCode && D()
	}), dom.searchInput.addEventListener("click", function () {
		this.select()
	});
	var Ke = 36;
	R();
	var Qe = [];
	Qe[0] = 0, Qe[4] = 4;
	var Ze = 2;
	window.svg = t.querySelector("#story svg");
	var $e = !1,
		et = !1,
		tt = 8;
	dom.cats.addEventListener("touchstart", W, !1), dom.cats.addEventListener("touchmove", V, !1);
	var ot = null,
		nt = null,
		st = 0,
		it = 6,
		rt = {},
		at = t.querySelector("main .cont");
	rt[at.id.replace("Cont", "")] = at;
	var ct = / /g;
	se(), re(), t.body.classList.remove("noJs");
	for (var lt, dt = {
		mediumBreakpoint: 900,
		largeBreakpint: 1280
	}, ut = {}, ht = {
		productShowing: document.querySelectorAll("#productList .cell").length,
		sortBy: "title",
		sortDir: "asc"
	}, mt = {
		brand: [],
		sub: []
	}, gt = !1, me = dom.categories.length; me--;) dom.categories[me].classList.contains("active") && (ht.category = dom.categories[me].id);
	Object.defineProperty(ut, "category", {
		set: function (o) {
			if ("cover" === o) dom.title.textContent = "Escalade Sports", ut.brand = !1;
			else if ("search" === o && ut.brand) {
				for (var n = ut.brand.split("-"), s = n.length; s--;) n[s] = n[s].charAt(0).toUpperCase() + n[s].slice(1);
				n = n.join(" "), dom.title.textContent = "Escalade Sports // " + n
			} else {
				for (var i = o.split("-"), s = i.length; s--;) i[s] = i[s].charAt(0).toUpperCase() + i[s].slice(1);
				i = i.join(" "), dom.title.textContent = "Escalade Sports // " + i
			}
			if (ht.category === o) {
				if (!ut.brand) return pt === !0 ? void (pt = !1) : void O(0)
			} else pt = !1, fe = !1;
			if (ht.category = o, ht.brand) {
				if (fe === !0) return void (fe = !1);
				(e.pageYOffset || t.documentElement.scrollTop) > 100 ? O(0, ae) : ae()
			} else {
				if (ut.category === '..') return
				if (t.body.classList.contains("cat-" + ut.category)) return ae(!0);
				(e.pageYOffset || t.documentElement.scrollTop) > 100 ? O(0, ae) : ae()
			}
		},
		get: function () {
			return ht.category
		}
	}), Object.defineProperty(ut, "brand", {
		set: function (e) {
			if (ut.product = !1, ht.brand !== e) {
				ht.brand = e;
				var t, o = document.body.classList;
				if (e) {
					for (t = o.length; t--;) 0 === o[t].indexOf("brand-") && o.remove(o[t]);
					o.add("brand"), o.add("brand-" + e), n()
				} else
					for (t = o.length; t--;) 0 === o[t].indexOf("brand") && o.remove(o[t]);
				if (e) {
					ht.brand === !1 && console.log("scroll up");
					for (var s = e.split("-"), t = s.length; t--;) s[t] = s[t].charAt(0).toUpperCase() + s[t].slice(1);
					s = s.join(" "), dom.title.textContent = "Escalade Sports // " + s
				}
			}
		},
		get: function () {
			return ht.brand
		}
	});
	var pt = !1;
	Object.defineProperty(ut, "product", {
		set: function (e) {
			ht.product !== e && (ht.product = e, e ? g(e) : (pt = !0, document.body.classList.remove("productPane")))
		},
		get: function () {
			return ht.product
		}
	}), Object.defineProperty(ut, "productShowing", {
		set: function (e) {
			if (ht.productShowing !== e) {
				ht.productShowing;
				ht.productShowing = e, lt ? (lt.extension.total(e), 0 === e ? dom.productList.classList.add("empty") : dom.productList.classList.remove("empty")) : console.log("Infinite loader does not exist!")
			}
		},
		get: function () {
			return ht.productShowing
		}
	}), Object.defineProperty(ut, "sortBy", {
		set: function (e) {
			ht.sortBy !== e && (ht.sortBy = e, G(!0, null, re))
		},
		get: function () {
			return ht.sortBy
		}
	}), Object.defineProperty(ut, "sortDir", {
		set: function (e) {
			ht.sortDir !== e && (ht.sortDir = e, G(!0, null, re))
		},
		get: function () {
			return ht.sortDir
		}
	});
	var ft = location.pathname.replace("/", "").split("/");
	if (ft.length) {
		if ("product" === ft[0]) {
			var vt = document.querySelector("#nav .active");
			vt && (ht.category = vt.getAttribute("id")), ht.product = ft[1]
		} else "brand" === ft[0] ? (ht.brand = ft[1], ht.category = "search", mt.brand[0] = ht.brand) : ft[0] ? ht.category = ft[0] : ht.category = "cover";
		history.replaceState(ht, null, "/" + ft.join("/"))
	} else history.replaceState(ht, null, ft.join("/"));
	e.addEventListener("popstate", function (e) {
		console.log(e);
		for (var t in e.state) ut[t] = e.state[t]
	}), ce();
	var yt = new c.Hamburger({
		el: dom.ham
	});
	c.findNavigation(), c.findToggle(), FastClick.attach(t.body)
}(window, document);
//# sourceMappingURL=script.js.map