(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function item(name, price, desc, note) { return { name: name, price: price, desc: desc || "", note: note || "" }; }
  function item2(name, tot, bottle) { return { name: name, tot: tot, bottle: bottle }; }

  var MENUS = {
    dining: {
      eyebrow: "Grotta Resort · Dining Menu",
      title: "Dining",
      chapters: [
        {
          name: "Grotta Signature Dining",
          subs: [
            { name: "Grotta Signature Picks", items: [
              item("Grotta Korean Style Fish", "20,000 RWF", "Korean-style glaze, flame-grilled finish"),
              item("Steak & Fries with Creamy Pepper Sauce", "29,000 RWF", "Premium steak, fries, coleslaw, pepper cream"),
              item("BBQ Pork", "18,000 RWF", "Smoky barbecue finish"),
              item("Brochette: Chicken or Beef", "10,000 RWF", "Classic grilled skewers")
            ]},
            { name: "Starters, Salads & Soups", items: [
              item("Avocado Salad with Fried Chicken & Breadsticks", "10,000 RWF"),
              item("Kachumbari Salad with Crispy Bacon & Breadsticks", "9,000 RWF"),
              item("Brunch Continental", "21,000 RWF"),
              item("Tomato Velouté Basil Soup with Croutons", "9,000 RWF"),
              item("Pumpkin Cream Soup with Breadsticks or Yams", "18,000 RWF")
            ]},
            { name: "Resort Main Course Favourites", items: [
              item("Chicken Club Sandwich with Chips & Coleslaw", "15,000 RWF"),
              item("Double Cheeseburger with Chips & Sauce", "15,000 RWF"),
              item("Steak & Fries with Basil Pesto and Fresh Vegetable Salad", "26,000 RWF"),
              item("Barbecue Curry Wings with Chips and Coleslaw", "9,000 RWF"),
              item("Loaded French Fries with Crispy Chicken, Cheese & Sauce", "11,000 RWF"),
              item("Chicken Drumsticks with Mashed Potatoes, Mushrooms & Gravy", "18,000 RWF"),
              item("Steamed Chicken Breast with Rice and Grilled Vegetables", "15,000 RWF")
            ]}
          ]
        },
        {
          name: "Land, Sea, Garden & Sweet Finish",
          subs: [
            { name: "Pasta & Pizza", items: [
              item("Pasta Tetrazzini with Chicken & Mushrooms", "19,000 RWF"),
              item("Pasta Pappardelle Bolognese", "15,000 RWF"),
              item("Pizza of Your Choice: Hawaiian | Margherita", "14,000 RWF")
            ]},
            { name: "Rwandan & Regional Comfort", items: [
              item("Agatogo Banana Stew", "15,000 RWF"),
              item("Beef Boilo with Vegetables, Potatoes & Plantain", "29,000 RWF"),
              item("Isombe, Ubugali & Peanut Sauce", "14,000 RWF")
            ]},
            { name: "Family Platters", items: [
              item("Whole Chicken", "60,000 RWF"),
              item("Whole Fish", "50,000 RWF")
            ]},
            { name: "Sweet Treatment", items: [
              item("Classic Crêpes Orange Suzette with Strawberry Reduction", "10,000 RWF"),
              item("Deep-Fried Chocolate Ice Cream with Strawberry Coulis", "15,000 RWF"),
              item("Caramelized Pineapple with Toasted Almond", "10,000 RWF"),
              item("Passion Fruit Panna Cotta", "10,000 RWF")
            ]},
            { name: "Kids Corner", items: [
              item("3 Mini-Burgers with French Fries", "11,000 RWF"),
              item("Mini Margherita Pizza", "9,000 RWF"),
              item("Pasta al Sugo with Tomato Sauce & Cheese", "9,000 RWF"),
              item("Hot Dogs with Vegetables & Fries", "12,000 RWF")
            ]}
          ]
        }
      ]
    },
    drinks: {
      eyebrow: "Grotta Resort · Drinks Menu",
      title: "Drinks",
      chapters: [
        {
          name: "Non-Alcoholic Selection",
          subs: [
            { name: "Signature Mocktails", items: [ item("Grotta Pink Cloud","10,000 RWF"), item("Grotta Sunrise","10,000 RWF"), item("Virgin Kari Cooler","10,000 RWF") ]},
            { name: "Classic Mocktails", items: [ item("Virgin Mojito","9,000 RWF"), item("Virgin Grotta Lagoon","10,000 RWF"), item("Virgin Rainbow Paradise","10,000 RWF") ]},
            { name: "Fresh Juices", items: [ item("Passion Fruit Juice","7,000 RWF"), item("Cucumber & Pineapple Juice","7,000 RWF"), item("Mango Juice","7,000 RWF"), item("Watermelon Juice","7,000 RWF"), item("Mixed Fruit Juice (3 fruits of your choice)","9,000 RWF") ]},
            { name: "Smoothies", items: [ item("Gym Smoothie","10,000 RWF"), item("Mango Banana Smoothie","9,000 RWF"), item("Avocado Smoothie","9,000 RWF") ]},
            { name: "Milkshakes", items: [ item("Vanilla Milkshake","9,000 RWF"), item("Strawberry Milkshake","9,000 RWF"), item("Chocolate Milkshake","9,000 RWF") ]},
            { name: "Soft Drinks", items: [ item("Water","3,000 RWF"), item("Sparkling Water","3,000 RWF"), item("Soda","3,000 RWF"), item("Panaché","3,000 RWF") ]},
            { name: "Coffee", items: [ item("Espresso","3,000 RWF"), item("Double Espresso","3,000 RWF"), item("Americano","5,000 RWF"), item("Grotta Africana","5,000 RWF"), item("Cappuccino","5,000 RWF"), item("Café Latte","5,000 RWF"), item("Caramel Latte","8,000 RWF"), item("Café Mocha","5,000 RWF") ]},
            { name: "Tea", items: [ item("African Tea","5,000 RWF"), item("Dawa Tea","5,000 RWF"), item("Hibiscus Tea","4,000 RWF"), item("Lemon & Black Tea","4,000 RWF"), item("Herbal Tea (Rosemary, Lemongrass, Mint)","4,000 RWF"), item("Hot Chocolate","6,000 RWF") ]}
          ]
        },
        {
          name: "Wine Cellar",
          subs: [
            { name: "Red Wine — By the Glass", items: [ item("Drostdy Hof Red Dry Wine","10,000 RWF"), item("Cellar Cask Red Sweet Wine","10,000 RWF") ]},
            { name: "Red Wine — By the Bottle", items: [
              item("Robertson Winery Sweet Red","80,000 RWF"), item("Gérard Bertrand Réserve Spéciale Merlot","90,000 RWF"),
              item("Principato Merlot","80,000 RWF"), item("Gérard Bertrand Or & Azur Rouge Shiraz","90,000 RWF"),
              item("Grand Sud Merlot","80,000 RWF"), item("Bosman Generation 8 Cabernet Sauvignon","100,000 RWF"),
              item("Bosman Generation 8 Shiraz","100,000 RWF"), item("Spier Signature Pinotage","70,000 RWF"),
              item("Kanonkop Kadette Cape Blend","120,000 RWF")
            ]},
            { name: "Rosé", items: [ item("Provence Rose","40,000 RWF"), item("White Zinfandel","35,000 RWF") ]},
            { name: "White Wine — By the Glass", items: [ item("Drostdy Hof Dry White Wine","10,000 RWF"), item("Cellar Cask Sweet White Wine","10,000 RWF") ]},
            { name: "White Wine — By the Bottle", items: [
              item("Paul Cluver Village Riesling (Sweet)","100,000 RWF"), item("Robertson Sweet White","80,000 RWF"),
              item("Secret Safari Sweet White","80,000 RWF"), item("Kaapzicht Chenin Blanc (Medium)","100,000 RWF"),
              item("Bruce Jack Lifestyle Sauvignon Blanc (Dry)","80,000 RWF"), item("Spier Signature Chardonnay (Dry)","80,000 RWF"),
              item("Robertson Dry White Wine","80,000 RWF")
            ]},
            { name: "Sparkling Wine", items: [
              item("Signore Prosecco","120,000 RWF"), item("Mionetto Prosecco","120,000 RWF"), item("Masottina","120,000 RWF"),
              item("Freixenet","120,000 RWF"), item("Châteaux de Mauny","120,000 RWF"), item("Pinta Negra Sparkling","120,000 RWF")
            ]},
            { name: "Champagne", items: [ item("Moët & Chandon","400,000 RWF"), item("Laurent-Perrier","300,000 RWF") ]}
          ]
        },
        {
          name: "Cocktail & Beer",
          subs: [
            { name: "Signature Cocktails", items: [
              item("Grotta Delight","20,000 RWF"), item("Bonfire Sip","20,000 RWF"), item("Kari Cave Mood","20,000 RWF"),
              item("Kari Grotta","20,000 RWF"), item("Kari Candle","20,000 RWF")
            ]},
            { name: "Classic Cocktails", items: [
              item("Long Island Iced Tea","25,000 RWF","Vodka, gin, rum, tequila, triple sec, cola"),
              item("Margarita","20,000 RWF","Tequila, triple sec, lime juice, salt rim"),
              item("Classic Mojito","20,000 RWF","White rum, lime, mint, sugar, soda water"),
              item("Blue Lagoon","20,000 RWF","White rum, coconut cream, pineapple juice"),
              item("Classic Vodka","20,000 RWF","White rum, lime juice, simple syrup")
            ]},
            { name: "Beer", items: [
              item("Mutzig","7,000 RWF"), item("Amstel","5,000 RWF"), item("Mutzig","5,000 RWF"),
              item("Heineken","5,000 RWF"), item("Virunga","5,000 RWF"), item("Skol Malt","5,000 RWF")
            ]}
          ]
        },
        {
          name: "Bar Bottle Service",
          twoPrice: true,
          subs: [
            { name: "Rum", items: [ item2("Bacardi White","7,000","100,000"), item2("Bacardi Black","7,000","100,000"), item2("Captain Morgan","7,000","100,000") ]},
            { name: "Vodka", items: [
              item2("Kari Vodka","8,000","200,000"), item2("Absolut Vodka","8,000","120,000"), item2("Absolut Mandrin","7,000","100,000"),
              item2("Absolut Mango","7,000","100,000"), item2("Absolut Vanilla","7,000","100,000"), item2("Smirnoff Vodka","5,000","60,000")
            ]},
            { name: "Liqueur", items: [
              item2("Amarula","20,000","110,000"), item2("Jägermeister","20,000","150,000"), item2("Baileys Cream","30,000","200,000"),
              item2("Malibu","12,000","140,000"), item2("Kahlúa","12,000","120,000"), item2("Cointreau","10,000","250,000"),
              item2("Limoncello","16,000","150,000"), item2("Dicapri","16,000","150,000")
            ]}
          ]
        },
        {
          name: "Premium Spirits",
          twoPrice: true,
          subs: [
            { name: "Gin", items: [ item2("Gordon's","7,000","120,000"), item2("Beefeater Dry Gin","7,000","120,000"), item2("Beefeater Pink Gin","5,000","90,000"), item2("Hendrick's Gin","10,000","300,000") ]},
            { name: "Aperitif", items: [ item2("Martini Bianco","15,000","110,000"), item2("Campari","8,000","120,000") ]},
            { name: "Tequila", items: [ item2("Tequila Camino","5,000","100,000"), item2("Olmeca Tequila","10,000","150,000"), item2("Olmeca Tequila Silver","10,000","150,000") ]},
            { name: "Whisky", items: [
              item2("Glenfiddich 12","10,000","300,000"), item2("Glenfiddich 15","15,000","350,000"), item2("Chivas Regal","10,000","220,000"),
              item2("Jack Daniel's","12,000","180,000"), item2("Jameson Irish","8,000","220,000"), item2("Jameson Irish Barrel","10,000","180,000"),
              item2("Johnnie Walker Black Label","12,000","180,000"), item2("Johnnie Walker Red Label","7,000","160,000"),
              item2("Johnnie Walker Double Black","12,000","220,000"), item2("Grant's","12,000","180,000")
            ]},
            { name: "Cognac", items: [
              item2("Martell VS","20,000","350,000"), item2("Martell VSOP","25,000","500,000"), item2("St-Rémy XO","30,000","850,000"),
              item2("Courvoisier","24,000","400,000"), item2("Rémy Martin VSOP","25,000","500,000"), item2("Rémy Martin XO","28,000","650,000"),
              item2("Hennessy VS","20,000","350,000"), item2("Hennessy VSOP","25,000","400,000")
            ]}
          ]
        }
      ]
    }
  };

  /* ---- nav scroll state ---- */
  var nav = document.getElementById("siteNav");
  function toggleNav() { if (window.scrollY > 40) nav.classList.add("scrolled"); else nav.classList.remove("scrolled"); }
  toggleNav();
  window.addEventListener("scroll", toggleNav, { passive: true });

  /* ---- reveal ---- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* ---- menu sheet ---- */
  var overlay = document.getElementById("menuOverlay");
  var sheet = overlay.querySelector(".menu-sheet");
  var elEyebrow = document.getElementById("menuSheetEyebrow");
  var elTitle = document.getElementById("menuSheetTitle");
  var elChapters = document.getElementById("menuSheetChapters");
  var elPills = document.getElementById("menuPills");
  var elBody = document.getElementById("menuSheetBody");
  var lastFocused = null;
  var chapterObserver = null;

  function slug(str) { return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }

  function renderItem(it, twoPrice) {
    var row = document.createElement("div");
    row.className = "menu-item";
    var top = document.createElement("div");
    top.className = "menu-item-row";
    var name = document.createElement("span");
    name.className = "menu-item-name";
    name.textContent = it.name;
    top.appendChild(name);

    if (twoPrice) {
      var prices = document.createElement("div");
      prices.className = "menu-item-prices";
      [["Tot", it.tot], ["Bottle", it.bottle]].forEach(function (pair) {
        var col = document.createElement("div");
        col.className = "price-col";
        var label = document.createElement("span");
        label.className = "price-label";
        label.textContent = pair[0];
        var val = document.createElement("span");
        val.className = "price-val";
        val.textContent = pair[1] + " RWF";
        col.appendChild(label);
        col.appendChild(val);
        prices.appendChild(col);
      });
      top.appendChild(prices);
    } else {
      var price = document.createElement("span");
      price.className = "menu-item-price";
      price.textContent = it.price;
      top.appendChild(price);
    }
    row.appendChild(top);

    if (it.desc) {
      var desc = document.createElement("p");
      desc.className = "menu-item-desc";
      desc.textContent = it.desc;
      row.appendChild(desc);
    }
    if (it.note) {
      var note = document.createElement("p");
      note.className = "menu-item-note";
      note.textContent = it.note;
      row.appendChild(note);
    }
    return row;
  }

  function renderMenu(id) {
    var data = MENUS[id];
    if (!data) return;

    elEyebrow.textContent = data.eyebrow;
    elTitle.textContent = data.title;
    elChapters.innerHTML = "";
    elPills.innerHTML = "";

    data.chapters.forEach(function (chapter, i) {
      var chapId = "chap-" + id + "-" + slug(chapter.name);

      var pill = document.createElement("button");
      pill.type = "button";
      pill.className = "menu-pill" + (i === 0 ? " active" : "");
      pill.textContent = chapter.name;
      pill.setAttribute("data-target", chapId);
      elPills.appendChild(pill);

      var chapEl = document.createElement("div");
      chapEl.className = "menu-chapter";
      chapEl.id = chapId;

      var h = document.createElement("h3");
      h.className = "menu-chapter-title";
      h.textContent = chapter.name;
      chapEl.appendChild(h);

      chapter.subs.forEach(function (sub) {
        var subEl = document.createElement("div");
        subEl.className = "menu-sub";
        var subH = document.createElement("p");
        subH.className = "menu-sub-title";
        subH.textContent = sub.name;
        subEl.appendChild(subH);
        sub.items.forEach(function (it) { subEl.appendChild(renderItem(it, !!chapter.twoPrice)); });
        chapEl.appendChild(subEl);
      });

      elChapters.appendChild(chapEl);
    });

    elPills.querySelectorAll(".menu-pill").forEach(function (pill) {
      pill.addEventListener("click", function () {
        var target = document.getElementById(pill.getAttribute("data-target"));
        if (target) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      });
    });

    if (chapterObserver) chapterObserver.disconnect();
    var chaps = elChapters.querySelectorAll(".menu-chapter");
    if ("IntersectionObserver" in window) {
      chapterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var match = elPills.querySelector('[data-target="' + entry.target.id + '"]');
            if (match) {
              elPills.querySelectorAll(".menu-pill").forEach(function (p) { p.classList.remove("active"); });
              match.classList.add("active");
            }
          }
        });
      }, { root: elBody, threshold: 0.2, rootMargin: "-10% 0px -60% 0px" });
      chaps.forEach(function (c) { chapterObserver.observe(c); });
    }
  }

  function getFocusable() { return sheet.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])'); }
  function trapFocus(e) {
    if (e.key !== "Tab") return;
    var focusable = getFocusable();
    if (!focusable.length) return;
    var first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  function onKeydown(e) { if (e.key === "Escape") closeMenu(); trapFocus(e); }

  function openMenu(id, trigger) {
    lastFocused = trigger || document.activeElement;
    renderMenu(id);
    elBody.scrollTop = 0;
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeydown);
    var focusTarget = sheet.querySelector(".menu-close");
    if (focusTarget) focusTarget.focus();
  }
  function closeMenu() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKeydown);
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  document.querySelectorAll("[data-menu-open]").forEach(function (btn) {
    btn.addEventListener("click", function () { openMenu(btn.getAttribute("data-menu-open"), btn); });
  });
  overlay.querySelectorAll("[data-menu-close]").forEach(function (btn) { btn.addEventListener("click", closeMenu); });
})();
