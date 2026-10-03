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
          name: "Signature, Starters & Mains",
          subs: [
            { name: "Grotta Signature Picks", items: [
              item("Grotta Signature Salad", "16,000 RWF", "Chayote, carrots, onions, lettuce, ginger, candied cashews, orange zest, coriander, mint, citrus dressing."),
              item("Grotta Stlye Fish/Chicken/Pork", "29,000 RWF", "Tossed in our signature glaze and fresh vegetables served with plain rice."),
              item("Barbecue Pork", "27,500 RWF", "Grilled pork fillet finished with our BBQ sauce served with avocado salad and your choice of fried green bananas, plantain, or potato wedges.")
            ]},
            { name: "Starters", items: [
              item("Avocado Salad", "15,500 RWF", "Avocados, lettuce, tomatoes, onions, carrots served with garlic bread."),
              item("+ Crispy Chicken Breast", "5,000 RWF"),
              item("Ginger & Carrot Soup", "15,000 RWF", "Served with toasted bread"),
              item("Creamy Pumpkin Soup", "15,000 RWF", "Served with toasted bread"),
              item("Cheesy Garlic Bread", "13,000 RWF")
            ]},
            { name: "Resort Mains", items: [
              item("Steak & Fries", "28,500 RWF", "Pan seared beef fillet served with fries, mixed vegetables and creamy pepper sauce."),
              item("Roasted Chicken Tigh", "23,500 RWF", "Deboned chicken leg, creamy mushroom sauce mixed vegetables and your choice of rice, plantain fries or mashed potatoes."),
              item("Grilled Chicken Breast", "23,500 RWF", "Vegetables, tomato sauce and your choice of rice, fries, plantain, or mashed potatoes"),
              item("Sweet & Tangy Barbecue Chicken Wings", "21,500 RWF", "Chicken wings finished with rich BBQ sauce served with fries, or plantain."),
              item("Loaded Fries with Crispy Chicken", "20,500 RWF", "Fries, crispy chicken, cheese drizzled with our house sauce."),
              item("Avocado Chicken Club Sandwich", "21,500 RWF", "Avocado, chicken, onion, tomato, lettuce, fried egg, house sauce, toasted breads, and fries."),
              item("Club Wrap", "22,500 RWF", "Avocado, tomato, cucumber, onion, lettuce, and your choice of chicken, beef or fish wrapped in tortilla with our house sauce"),
              item("Double Cheeseburger", "20,000 RWF", "Served with fries"),
              item("Panseared Tilapia", "24,500 RWF", "Served with root vegetables, creamy mushroom sauce and your choice of mashed potatoes, plantain, fries or rice."),
              item("Vegetable Curry", "19,500 RWF", "Sweetpotato, green banana, seasonal vegetables, curry and coconut milk.")
            ]}
          ]
        },
        {
          name: "Pasta, Regional, Platters & Sweets",
          subs: [
            { name: "Pasta", items: [
              item("Chicken & Mushroom Creamy Penne", "19,500 RWF", "Served with garlic bread"),
              item("Classic Spaghetti Bolognese", "19,500 RWF", "Served with garlic bread.")
            ]},
            { name: "Our Pizza Selection", items: [
              item("Margherita Pizza", "15,000 RWF"),
              item("Hawaiian Pizza", "16,500 RWF")
            ]},
            { name: "Rwandan & Regional Comfort", items: [
              item("Agatogo", "20,000 RWF", "Green banana stew with your choice of beef or chicken."),
              item("Beef Boilo", "25,000 RWF", "With vegetable, green banana and potatoes"),
              item("Ubugali & Isombe", "22,500 RWF", "With peanut sauce.")
            ]},
            { name: "Family Platters", items: [
              item("Whole Baked Tilapia (3kg)", "60,000 RWF", "Served with 3 portions of french fries (1 hour)"),
              item("Whole Oven-Roasted Chicken", "55,000 RWF", "Served with 3 portions of french fries (1 hour)")
            ]},
            { name: "Sweet Treats", items: [
              item("Double Chocolate Cake", "18,000 RWF"),
              item("Fruit Salad with Mint and Honey", "9,500 RWF"),
              item("Ice Cream Sundae", "14,000 RWF")
            ]},
            { name: "Kids' Corner", items: [
              item("Mini Sliders", "15,000 RWF", "With french fries and coleslaw"),
              item("Mini Margherita Pizza", "10,000 RWF"),
              item("Chicken Nuggets", "14,000 RWF", "Served with fries"),
              item("Penne Pasta with Tomato Sauce", "10,000 RWF")
            ]}
          ]
        }
      ]
    },
    drinks: {
      eyebrow: "Grotta Resort · Beverage Menu",
      title: "Beverage",
      chapters: [
        {
          name: "Non-Alcoholic Selection",
          subs: [
            { name: "Classic Mocktails", items: [
              item("Virgin Mojito","9,000 RWF"), item("Virgin Grotta Lagoon","10,000 RWF"), item("Virgin Rainbow Paradise","10,000 RWF"),
              item("Lemonade Classic","16,000 RWF","Soda, simple syrup, lemon"),
              item("Lemonade Flavored","17,000 RWF","Soda, simple syrup, lemon and your choice of flavour"),
              item("Detox","20,000 RWF","Cucumber, lemon, pineapple, ginger, simple syrup"),
              item("Virgin Piña Colada","20,000 RWF","Pineapple juice, cream of coconut, lime juice")
            ]},
            { name: "Fresh Juices", items: [ item("Passion Fruit Juice","7,000 RWF"), item("Cucumber & Pineapple Juice","7,000 RWF"), item("Mango Juice","7,000 RWF"), item("Watermelon Juice","7,000 RWF"), item("Mixed Fruit Juice (3 fruits of your choice)","9,000 RWF") ]},
            { name: "Smoothies", items: [ item("Gym Smoothie","10,000 RWF"), item("Mango Banana Smoothie","9,000 RWF"), item("Avocado Smoothie","9,000 RWF") ]},
            { name: "Milkshakes", items: [ item("Vanilla Milkshake","9,000 RWF"), item("Strawberry Milkshake","9,000 RWF"), item("Chocolate Milkshake","9,000 RWF") ]},
            { name: "Soft Drinks", items: [ item("Water","3,000 RWF"), item("Sparkling Water","3,000 RWF"), item("Soda","3,000 RWF"), item("Panaché","3,000 RWF") ]},
            { name: "Coffee", items: [
              item("Espresso","3,000 RWF"), item("Double Espresso","3,000 RWF"), item("Americano","5,000 RWF"), item("Grotta Africana","5,000 RWF"), item("Cappuccino","5,000 RWF"), item("Café Latte","5,000 RWF"), item("Caramel Latte","8,000 RWF"), item("Café Mocha","5,000 RWF"),
              item("Vanilla Latte","6,000 RWF"), item("Cortado","5,000 RWF"), item("Piccolo","5,000 RWF"), item("Flat White","5,500 RWF"), item("Macchiato","4,500 RWF")
            ]},
            { name: "Iced Coffee", items: [
              item("Iced Americano","5,000 RWF"), item("Iced Latte","5,500 RWF"), item("Iced Vanilla Latte","6,000 RWF"),
              item("Iced Mocha","6,000 RWF"), item("Frappuccino","6,500 RWF"), item("Affogato Coffee","7,000 RWF"),
              item("Coffee Milkshake","10,000 RWF","Vanilla ice cream blended with chilled coffee and vanilla syrup"),
              item("Vanilla Iced Coffee Float","7,000 RWF","A scoop of vanilla ice cream floating on sweet iced coffee"),
              item("Coffee Frappe","8,000 RWF","Blended with ice until smooth, topped with whipped cream")
            ]},
            { name: "Signature Coffee", items: [
              item("Grotta Sunrise Latte","7,000 RWF"), item("Champions Espresso Cream","7,000 RWF"),
              item("Grotta Bloom Coffee Latte","8,000 RWF"), item("Grotta Cinnamon Latte","7,000 RWF")
            ]},
            { name: "Cocktail Coffee", items: [
              item("Iced Coffee Lemon Soda","10,000 RWF"), item("Espresso Bomb","10,000 RWF"), item("Grotta Kissed Espresso","10,000 RWF"),
              item("Coffee Mojito","10,000 RWF"), item("Iced Tonic Espresso","10,000 RWF")
            ]},
            { name: "Tea", items: [
              item("African Tea","5,000 RWF"), item("Dawa Tea","5,000 RWF"), item("Hibiscus Tea","4,000 RWF"), item("Lemon & Black Tea","4,000 RWF"), item("Herbal Tea (Rosemary, Lemongrass, Mint)","4,000 RWF"), item("Hot Chocolate","6,000 RWF"),
              item("Black Tea","5,000 RWF"), item("Lemon Tea","7,500 RWF"), item("Ginger Tea","7,500 RWF"), item("Mint Tea","7,500 RWF"),
              item("Green Tea","6,000 RWF"), item("Spiced Tea","6,500 RWF"), item("Cinnamon Tea","7,500 RWF"), item("Masala Chai","6,500 RWF"),
              item("Hot Milk","4,500 RWF"), item("Hot Water","3,600 RWF")
            ]},
            { name: "Premier & Special Tea", items: [
              item("Mango, Lemon & Ginger Tea","7,000 RWF"), item("Chamomile Flowers Tea","6,500 RWF"),
              item("Detox Herbal Tea","6,500 RWF"), item("Passion Fruit Iced Tea","7,500 RWF")
            ]}
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
            { name: "Grotta Signature Cocktails", items: [
              item("Kari Kiss","25,000 RWF","Kari gin, tree tomato, tonic soda, simple syrup"),
              item("Kari Kalon","25,000 RWF","Kari gin, fresh lime juice, simple syrup, champagne"),
              item("Grotta Kari","25,000 RWF","Kari vodka, passion juice, chili, simple syrup, sparkling water"),
              item("Kivu Kari","25,000 RWF","Kari gin, sweet vermouth, Campari, muddled orange, sprig of rosemary"),
              item("Bright Kari","25,000 RWF","Kari vodka, Kari gin, strawberry syrup, chickpea brine")
            ]},
            { name: "Classic Cocktails", items: [
              item("Long Island Iced Tea","25,000 RWF","Vodka, gin, rum, tequila, triple sec, cola"),
              item("Margarita","20,000 RWF","Tequila, triple sec, lime juice, salt rim"),
              item("Classic Mojito","20,000 RWF","White rum, lime, mint, sugar, soda water"),
              item("Blue Lagoon","20,000 RWF","White rum, coconut cream, pineapple juice"),
              item("Classic Vodka","20,000 RWF","White rum, lime juice, simple syrup")
            ]},
            { name: "Whiskey-Based Cocktails", items: [
              item("Old Fashioned","25,000 RWF","Classic mix of bourbon, sugar and bitters"),
              item("Manhattan","25,000 RWF","Bold blend of bourbon and sweet vermouth"),
              item("Whiskey Sour","25,000 RWF","Tangy and smooth, with fresh lemon and sugar"),
              item("Boulevardier","25,000 RWF","Bourbon, Campari and sweet vermouth")
            ]},
            { name: "Vodka-Based Cocktails", items: [
              item("Espresso Martini","25,000 RWF","Chilled vodka and espresso"),
              item("Cosmopolitan","25,000 RWF","Stylish vodka, cranberry and citrus"),
              item("Dirty Martini","25,000 RWF","Vodka with a savory olive twist")
            ]},
            { name: "Gin-Based Cocktails", items: [
              item("Dry Martini","25,000 RWF","Gin and vermouth, plain and classic"),
              item("Negroni","25,000 RWF","Bold mix of gin, Campari and vermouth"),
              item("French 75","25,000 RWF","Bubbly blend of gin and champagne"),
              item("Tom Collins","25,000 RWF","Citrusy gin fizz with soda")
            ]},
            { name: "Rum-Based Cocktails", items: [
              item("Daiquiri","25,000 RWF","Simple mix of rum, lime and sugar"),
              item("Mai Tai","25,000 RWF","Tropical blend of rums and citrus")
            ]},
            { name: "Brandy / Cognac-Based Cocktails", items: [
              item("Sidecar","40,000 RWF","Citrusy and smooth with a cognac base"),
              item("Vieux Carré","40,000 RWF","Rich, complex New Orleans classic")
            ]},
            { name: "Spritz & Sparkling Cocktails", items: [
              item("Aperol Spritz","30,000 RWF","Bright and bubbly with orange notes"),
              item("Campari Spritz","30,000 RWF","Bitter and refreshing sparkling blend"),
              item("Limoncello Spritz","30,000 RWF","Zesty lemon with bubbly prosecco"),
              item("Negroni Sbagliato","30,000 RWF","A lighter, sparkling Negroni"),
              item("Passion Fruit Spritz","30,000 RWF","Tropical and fruity prosecco cocktail")
            ]},
            { name: "Strong Cocktails (Up to 5 Shorts)", items: [
              item("Adios MF","25,000 RWF","Powerful mix of spirits with a blue twist")
            ]},
            { name: "Tequila-Based Cocktails", items: [
              item("Tequila Sunrise","25,000 RWF","Vibrant tequila, orange and grenadine")
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
        },
        {
          name: "Breakfast Buffet",
          subs: [
            { name: "Daily Hot Breakfast", items: [
              item("Monday", "", "French toast · Chipolata · Fried green bananas · Mushrooms · Baked beans · Grilled tomatoes"),
              item("Tuesday", "", "Pancake with banana · Chicken sausage · Mushrooms · Grilled tomatoes · Baked beans · Fried Mizuzu"),
              item("Wednesday", "", "Waffles · Mini beef burger · Hash browns · Vegetable ratatouille · Creamy spinach · Fried green bananas"),
              item("Thursday", "", "Roasted potatoes · Mushrooms · Scrambled eggs · Baked beans · French toast with banana · Pork sausage"),
              item("Friday", "", "Mushroom quiche · Roasted potatoes · Pancakes · Roasted baby zucchini · Green bananas with onions · Mini beef burger"),
              item("Saturday", "", "Waffles · Mushrooms · Baked beans · Hash browns · Beef sausage · Grilled tomatoes"),
              item("Sunday", "", "Scrambled eggs · Vegetable ratatouille · Mini beef burgers · Pancakes · Roasted potatoes · Spinach quiche")
            ]},
            { name: "Served Every Day", items: [
              item("From the Cheese & Deli Table", "", "Cheeseboard"),
              item("Fresh & Healthy", "", "Avocado plate · Selection of yogurts · Fresh fruit · Breakfast salad"),
              item("Bakery", "", "Pastry selection · Assortment of breads"),
              item("Juice Bar", "", "Three fresh juices", "Please ask our breakfast team about today's selection.")
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
