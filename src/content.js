const siteContent = {
  name: "Roseville Slice Co.",
  tagline: "Wood-fired. Hand-stretched. Made right.",
  subtitle: "Artisan pizza baked at 900°F in our imported Neapolitan oven. Crispy, charred, and loaded with the good stuff.",
  cuisine: "Wood-Fired Pizza",
  location: "Roseville, CA",

  address: {
    street: "1234 Roseville Rd.",
    suite: "",
    city: "Roseville, CA 95747",
  },
  phone: "(916) 832-0195",
  email: "hello@rosevilleslice.com",

  hours: [
    "Monday – Thursday: 11am – 9pm",
    "Friday – Saturday: 11am – 10pm",
    "Sunday: 12pm – 8pm",
  ],

  images: {
    hero: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80",
    about1: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&q=80",
    about2: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    interior: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
  },

  signaturePies: [
    { name: "The Margherita", desc: "San Marzano tomato, fresh mozzarella, basil, EVOO", image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&q=80" },
    { name: "Pepperoni Classico", desc: "Cup & char pepperoni, mozzarella, house red sauce", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80" },
    { name: "Wild Mushroom", desc: "Cremini, shiitake, oyster mushrooms, truffle oil, fontina", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" },
    { name: "Prosciutto & Arugula", desc: "Prosciutto di Parma, wild arugula, shaved parm, lemon", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80" },
    { name: "Spicy Calabrese", desc: "Soppressata, Calabrian chili, hot honey, ricotta dollops", image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&q=80" },
    { name: "The Roseville", desc: "Our house special — sausage, roasted peppers, caramelized onion, mozzarella, basil pesto", image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=80" },
  ],

  menuCategories: [
    { id: "pizzas", label: "Pizzas" },
    { id: "starters", label: "Starters" },
    { id: "salads", label: "Salads" },
    { id: "drinks", label: "Drinks" },
  ],

  menuItems: {
    pizzas: [
      { name: "The Margherita", desc: "San Marzano tomato, fresh mozzarella, basil", slice: "5", med: "18", lg: "24", popular: true },
      { name: "Pepperoni Classico", desc: "Cup & char pepperoni, house red sauce", slice: "5", med: "19", lg: "25", popular: true },
      { name: "Wild Mushroom", desc: "Mixed mushrooms, truffle oil, fontina", slice: "6", med: "21", lg: "27", popular: false },
      { name: "Prosciutto & Arugula", desc: "Prosciutto, arugula, shaved parm, lemon", slice: "6", med: "22", lg: "28", popular: false },
      { name: "Spicy Calabrese", desc: "Soppressata, Calabrian chili, hot honey, ricotta", slice: "6", med: "21", lg: "27", popular: true },
      { name: "The Roseville", desc: "Sausage, roasted peppers, caramelized onion, pesto", slice: "6", med: "22", lg: "28", popular: true },
      { name: "BBQ Chicken", desc: "Grilled chicken, BBQ sauce, red onion, cilantro", slice: "5", med: "20", lg: "26", popular: false },
      { name: "Four Cheese", desc: "Mozzarella, fontina, gorgonzola, pecorino", slice: "5", med: "19", lg: "25", popular: false },
    ],
    starters: [
      { name: "Garlic Knots", desc: "House dough, roasted garlic butter, parmesan (6 pcs)", price: "8", popular: true },
      { name: "Burrata & Tomato", desc: "Creamy burrata, heirloom tomato, basil, balsamic drizzle", price: "14", popular: true },
      { name: "Crispy Calamari", desc: "Lightly fried, lemon aioli, marinara", price: "13", popular: false },
      { name: "Meatballs al Forno", desc: "Beef & pork, San Marzano tomato sauce, ricotta, crostini", price: "12", popular: false },
      { name: "Bruschetta", desc: "Grilled sourdough, diced tomato, garlic, fresh basil, EVOO", price: "10", popular: false },
    ],
    salads: [
      { name: "Caesar", desc: "Romaine, house Caesar dressing, croutons, shaved parmesan", price: "11", popular: true },
      { name: "Arugula & Pear", desc: "Wild arugula, sliced pear, walnuts, gorgonzola, honey vinaigrette", price: "13", popular: false },
      { name: "Caprese", desc: "Fresh mozzarella, heirloom tomato, basil, balsamic reduction", price: "12", popular: false },
      { name: "Chopped Italian", desc: "Romaine, salami, pepperoncini, olive, provolone, red wine vin.", price: "12", popular: false },
    ],
    drinks: [
      { name: "Draft Beer", desc: "Rotating local & craft taps — ask your server", price: "7", popular: true },
      { name: "House Red Wine", desc: "Italian Montepulciano, by the glass", price: "10", popular: false },
      { name: "House White Wine", desc: "Pinot Grigio, by the glass", price: "10", popular: false },
      { name: "Italian Soda", desc: "San Pellegrino — Blood Orange, Limonata, or Pompelmo", price: "4", popular: false },
      { name: "Fresh Lemonade", desc: "House-squeezed, served over ice", price: "4", popular: false },
    ],
  },

  cateringHeading: "Feeding a crowd?",
  cateringText: "We cater events of all sizes — from office lunches to birthday parties. Full pies, garlic knots by the dozen, and salad trays made to order.",
  cateringEmail: "catering@rosevilleslice.com",

  orderPickupUrl: "#",
  orderDeliveryUrl: "#",
};

export default siteContent;
