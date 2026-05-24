export const brand = {
  name: "Nabil's Açaí Station",
  tagline: "Made for sweet moments.",
  phone: "+61 8 6285 5935",
  phoneHref: "tel:+61862855935",
  instagram: {
    handle: "@nabilsacaistation",
    url: "https://instagram.com/nabilsacaistation",
    followers: 5289,
  },
  tiktok: {
    handle: "@nabilsacaistation",
    url: "https://tiktok.com/@nabilsacaistation",
  },
};

export const locations = [
  {
    slug: "mount-lawley",
    name: "Mount Lawley",
    address: "664 Beaufort St, Mount Lawley WA 6050",
    note: "Dine-in · Takeout · Delivery",
    rating: 5.0,
    reviewCount: 5,
    mapsUrl: "https://maps.google.com/?q=664+Beaufort+St+Mount+Lawley",
    hours: [
      ["Mon", "11 AM – 10 PM"],
      ["Tue", "11 AM – 10 PM"],
      ["Wed", "11 AM – 10 PM"],
      ["Thu", "11 AM – 11 PM"],
      ["Fri", "11 AM – 11 PM"],
      ["Sat", "11 AM – 11 PM"],
      ["Sun", "11 AM – 10:30 PM"],
    ] as const,
  },
  {
    slug: "ballajura",
    name: "Ballajura",
    address:
      "Inside Ballajura City Shopping Centre · N Illawarra Cres, Ballajura WA 6066",
    note: "Home of Nabil's Lebanese Sweets — where it all started.",
    rating: 4.5,
    reviewCount: null,
    phone: "+61 8 6285 5935",
    mapsUrl: "https://maps.google.com/?q=Ballajura+City+Shopping+Centre",
    hours: null,
  },
] as const;

export const reviews = [
  {
    quote:
      "Everyone who works there is so sweet. The food is amazing and really worth the price.",
    author: "Emily Brown",
    badge: null,
    location: "Mt Lawley",
  },
  {
    quote:
      "Best dessert and açaí in town. Keep up the good work Nabil and team. Loved it.",
    author: "Rakesh Jha",
    badge: "Local Guide",
    location: "Mt Lawley",
  },
  {
    quote:
      "Strawberries were fresh, brownies were nice and warm, and the drink was really refreshing. Portions were good and everything tasted homemade. Place has a chill vibe too.",
    author: "Raina Aljorany",
    badge: "Local Guide",
    location: "Mt Lawley",
  },
] as const;

export const signatures = [
  {
    name: "Viral Dubai Strawberry Cup",
    price: "$17.50",
    blurb:
      "Kataifi filling, fresh strawberries, milk chocolate and Dubai sauce. Sold out on TikTok, served year-round here.",
    image: "/images/enhanced/signature-dubai-strawberry-cup-v2.jpg",
    tag: "viral",
  },
  {
    name: "Build Your Own Açaí",
    price: "from $9",
    blurb:
      "Large · Regular · Small · Cone. Granola, banana and strawberries included — then drizzle and top your way.",
    image: "/images/enhanced/signature-build-your-own-acai-v2.jpg",
    tag: "signature",
  },
  {
    name: "Matcha Açaí Bowl",
    price: "from $10",
    blurb:
      "Açaí under a slow pour of matcha cream, fresh strawberries and banana. The calm cousin of the Bueno tower.",
    image: "/images/enhanced/signature-matcha-bowl-v2.jpg",
    tag: null,
  },
  {
    name: "Brownie Bowl",
    price: "$14",
    blurb:
      "Premium milk chocolate over warm brownie, with strawberries, banana and crushed Oreos. Built like dessert, eats like a bowl.",
    image: "/images/enhanced/signature-waffle-snack-pack-v2.jpg",
    tag: null,
  },
  {
    name: "Fruit Cocktails",
    price: "$15",
    blurb:
      "Avocado · Mango · Strawberry · Sunset Swirl · The Beast. Blended fresh with ashta, cashew and honey.",
    image: "/images/enhanced/signature-fruit-cocktails-v2.jpg",
    tag: null,
  },
  {
    name: "Lebanese Sweets",
    price: "from $4",
    blurb:
      "Where Nabil's started — baklava, knafeh and the classics. Made in-house, still served at the Ballajura stall every day.",
    image: "/images/enhanced/lebanese-sweets-display.jpg",
    tag: null,
  },
] as const;

export type MenuItem = { name: string; price?: string; note?: string };
export type MenuSection = {
  title: string;
  subtitle?: string;
  items: MenuItem[];
  footnote?: string;
};

export const menu: MenuSection[] = [
  {
    title: "Açaí — Build Your Own",
    subtitle:
      "All cups come with granola, banana and strawberries. Then choose your drizzle and toppings.",
    items: [
      { name: "Large", price: "$15" },
      { name: "Regular", price: "$12" },
      { name: "Small", price: "$10" },
      { name: "Cone", price: "$9" },
    ],
    footnote:
      "Drizzles $1–$2 (honey, condensed milk, passion fruit, Nutella, pistachio, Biscoff, Bueno, peanut butter, milk chocolate). Toppings $1–$3 (Dubai filling +$3).",
  },
  {
    title: "Classic Crêpes",
    subtitle:
      "All crêpes come with bananas and strawberries on the side.",
    items: [
      { name: "Nutella Crêpe", price: "$14", note: "Filled with Nutella." },
      {
        name: "Lotus Biscoff Crêpe",
        price: "$14",
        note: "Biscoff spread with crushed Lotus biscuits.",
      },
      {
        name: "Bueno Crêpe",
        price: "$14",
        note: "Hazelnut cream with Bueno pieces.",
      },
      {
        name: "Cookies & Cream Crêpe",
        price: "$14",
        note: "Oreo cookies with Nutella.",
      },
    ],
  },
  {
    title: "Signature Crêpes",
    items: [
      {
        name: "Triple Indulgence",
        price: "$15",
        note: "Bueno, crushed Oreos and milk chocolate.",
      },
      {
        name: "Pistachio Delight",
        price: "$16",
        note: "Pistachio spread, crushed pistachio.",
      },
      {
        name: "Dubai Royal",
        price: "$16",
        note: "Dubai chocolate filling with pistachio.",
      },
      { name: "Fettuccine Crêpe", price: "$14" },
    ],
  },
  {
    title: "Strawberry Cups",
    items: [
      {
        name: "Classic — Large",
        price: "$12",
        note: "Strawberries with milk chocolate.",
      },
      { name: "Classic — Small", price: "$9" },
      {
        name: "Viral Dubai Strawberry Cup — Large",
        price: "$17.50",
        note: "Kataifi filling, strawberries, milk chocolate, Dubai sauce.",
      },
      { name: "Viral Dubai Strawberry Cup — Small", price: "$12" },
    ],
  },
  {
    title: "Dubai Chocolate",
    items: [
      { name: "Nabil's Dubai Chocolate", price: "$30" },
      { name: "Small Choc Bar", price: "$18" },
      { name: "Dubai Crunch Box", price: "$25" },
    ],
  },
  {
    title: "Brownies",
    items: [
      {
        name: "Dubai Choc Brownies",
        price: "$16",
        note: "Brownies, Dubai chocolate filling, milk chocolate drizzles and pistachios.",
      },
      {
        name: "Brownie Bowl",
        price: "$14",
        note: "Premium milk chocolate, strawberries and choice of drizzle.",
      },
    ],
  },
  {
    title: "Waffle Snack Pack",
    items: [
      {
        name: "Waffle Snack Pack",
        price: "$14",
        note: "Strawberries, banana and choice of drizzle.",
      },
    ],
  },
  {
    title: "Fruit Cocktails",
    subtitle: "Each layered with fruit pieces, ashta, cashew and honey drizzle.",
    items: [
      {
        name: "Avocado Cocktail",
        price: "$15",
        note: "Avocado blend, crushed pistachios on top.",
      },
      {
        name: "The Beast",
        price: "$15",
        note: "Mango, avocado & strawberry blend.",
      },
      { name: "Strawberry Cocktail", price: "$15" },
      { name: "Sunny Mango", price: "$15" },
      { name: "Sunset Swirl", price: "$15", note: "Mango & strawberry blend." },
    ],
  },
  {
    title: "Matcha",
    items: [
      { name: "Strawberry Iced Matcha", price: "$9" },
      { name: "Lychee Iced Matcha", price: "$9" },
      { name: "Passionfruit Iced Matcha", price: "$9" },
      { name: "Ube Matcha", price: "$9" },
    ],
  },
  {
    title: "Mocktails",
    items: [
      { name: "Watermelon", price: "$8" },
      { name: "Blue Hawaii", price: "$8" },
      { name: "Fizzy Pomegranate", price: "$8" },
      { name: "Strawberry", price: "$8" },
      { name: "Passionfruit", price: "$8" },
      { name: "Yuzu", price: "$8" },
    ],
  },
  {
    title: "Iced Lattes",
    items: [
      { name: "Matcha", price: "$9" },
      { name: "Pistachio", price: "$9" },
      { name: "Bueno", price: "$9" },
      { name: "Biscoff", price: "$9" },
      { name: "Hazelnut", price: "$9" },
    ],
  },
  {
    title: "Milkshakes",
    items: [
      { name: "Cookies & Cream", price: "$10" },
      { name: "Snickers", price: "$10" },
      { name: "Bueno", price: "$10" },
      { name: "Nutella", price: "$10" },
      { name: "Dulce de Leche", price: "$10" },
      { name: "Pistachio", price: "$10" },
    ],
  },
  {
    title: "Probiotic Splash",
    items: [
      { name: "Lychee", price: "$9" },
      { name: "Mango", price: "$9" },
      { name: "Pineapple", price: "$9" },
      { name: "Strawberry", price: "$9" },
    ],
  },
];
