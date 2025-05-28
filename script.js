// Product data
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    description: "Latest Apple iPhone with A17 Pro chip and titanium design",
    icon: "📱",
    featured: true,
  },
  {
    id: 2,
    name: "MacBook Air M3",
    price: 1299,
    description: "Ultra-thin laptop with M3 chip for incredible performance",
    icon: "💻",
    featured: true,
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 249,
    description: "Premium wireless earbuds with active noise cancellation",
    icon: "🎧",
    featured: true,
  },
  {
    id: 4,
    name: 'iPad Pro 12.9"',
    price: 1099,
    description: "Professional tablet with M2 chip and Liquid Retina display",
    icon: "📱",
    featured: false,
  },
  {
    id: 5,
    name: "Apple Watch Ultra",
    price: 799,
    description: "Rugged smartwatch designed for extreme adventures",
    icon: "⌚",
    featured: false,
  },
  {
    id: 6,
    name: "Sony WH-1000XM5",
    price: 399,
    description: "Industry-leading noise canceling headphones",
    icon: "🎧",
    featured: false,
  },
  {
    id: 7,
    name: "Samsung Galaxy S24",
    price: 899,
    description: "Flagship Android phone with AI-powered features",
    icon: "📱",
    featured: false,
  },
  {
    id: 8,
    name: "Dell XPS 13",
    price: 1199,
    description: "Premium ultrabook with stunning InfinityEdge display",
    icon: "💻",
    featured: false,
  },
  {
    id: 9,
    name: "PlayStation 5",
    price: 499,
    description: "Next-gen gaming console with 4K gaming and ray tracing",
    icon: "🎮",
    featured: true,
  },
  {
    id: 10,
    name: "Nintendo Switch OLED",
    price: 349,
    description: "Portable gaming console with vibrant OLED screen",
    icon: "🎮",
    featured: false,
  },
  {
    id: 11,
    name: "Xbox Series X",
    price: 499,
    description: "Microsoft's most powerful gaming console ever",
    icon: "🎮",
    featured: false,
  },
  {
    id: 12,
    name: "Meta Quest 3",
    price: 499,
    description: "Advanced VR headset with mixed reality capabilities",
    icon: "🥽",
    featured: true,
  },
  {
    id: 13,
    name: "GoPro Hero 12",
    price: 399,
    description: "Ultra-compact action camera with 5.3K video",
    icon: "📷",
    featured: false,
  },
  {
    id: 14,
    name: "Canon EOS R6 Mark II",
    price: 2499,
    description: "Professional mirrorless camera with dual pixel autofocus",
    icon: "📷",
    featured: false,
  },
  {
    id: 15,
    name: "DJI Mini 4 Pro",
    price: 759,
    description: "Compact drone with 4K HDR video and obstacle avoidance",
    icon: "🚁",
    featured: false,
  },
  {
    id: 16,
    name: 'Samsung 65" Neo QLED',
    price: 1799,
    description: "Premium 4K smart TV with quantum dot technology",
    icon: "📺",
    featured: false,
  },
  {
    id: 17,
    name: 'LG OLED C3 55"',
    price: 1299,
    description: "Self-lit OLED TV with perfect blacks and vibrant colors",
    icon: "📺",
    featured: false,
  },
  {
    id: 18,
    name: "Sonos Arc Soundbar",
    price: 899,
    description: "Premium soundbar with Dolby Atmos and voice control",
    icon: "🔊",
    featured: false,
  },
  {
    id: 19,
    name: "Bose QuietComfort 45",
    price: 329,
    description: "Wireless noise-canceling headphones with 24-hour battery",
    icon: "🎧",
    featured: false,
  },
  {
    id: 20,
    name: "JBL Charge 5",
    price: 179,
    description: "Portable Bluetooth speaker with powerbank feature",
    icon: "🔊",
    featured: false,
  },
  {
    id: 21,
    name: "Tesla Model S Plaid",
    price: 89999,
    description: "Electric luxury sedan with 1020 horsepower",
    icon: "🚗",
    featured: true,
  },
  {
    id: 22,
    name: "Microsoft Surface Laptop 5",
    price: 999,
    description: "Sleek laptop with 12th Gen Intel Core processors",
    icon: "💻",
    featured: false,
  },
  {
    id: 23,
    name: "HP Spectre x360",
    price: 1149,
    description: "Convertible laptop with OLED touchscreen display",
    icon: "💻",
    featured: false,
  },
  {
    id: 24,
    name: "Razer Blade 15",
    price: 2499,
    description: "Gaming laptop with RTX 4070 and 240Hz display",
    icon: "💻",
    featured: false,
  },
  {
    id: 25,
    name: "Google Pixel 8 Pro",
    price: 999,
    description: "Android phone with advanced AI photography features",
    icon: "📱",
    featured: false,
  },
  {
    id: 26,
    name: "OnePlus 12",
    price: 799,
    description: "Flagship Android with 100W fast charging",
    icon: "📱",
    featured: false,
  },
  {
    id: 27,
    name: "Nothing Phone (2)",
    price: 599,
    description: "Unique transparent design with Glyph Interface",
    icon: "📱",
    featured: false,
  },
  {
    id: 28,
    name: "Samsung Galaxy Tab S9",
    price: 799,
    description: "Premium Android tablet with S Pen included",
    icon: "📱",
    featured: false,
  },
  {
    id: 29,
    name: "Microsoft Surface Pro 9",
    price: 999,
    description: "2-in-1 tablet and laptop with detachable keyboard",
    icon: "💻",
    featured: false,
  },
  {
    id: 30,
    name: "Garmin Fenix 7X",
    price: 899,
    description: "Rugged GPS smartwatch for outdoor adventures",
    icon: "⌚",
    featured: false,
  },
  {
    id: 31,
    name: "Fitbit Charge 6",
    price: 199,
    description: "Advanced fitness tracker with GPS and heart rate monitor",
    icon: "⌚",
    featured: false,
  },
  {
    id: 32,
    name: "Samsung Galaxy Buds Pro 2",
    price: 229,
    description: "Premium wireless earbuds with spatial audio",
    icon: "🎧",
    featured: false,
  },
  {
    id: 33,
    name: "Anker PowerCore 26800",
    price: 65,
    description: "High-capacity portable charger with fast charging",
    icon: "🔋",
    featured: false,
  },
  {
    id: 34,
    name: "Logitech MX Master 3S",
    price: 99,
    description: "Advanced wireless mouse for productivity",
    icon: "🖱️",
    featured: false,
  },
  {
    id: 35,
    name: "Keychron K8 Pro",
    price: 139,
    description: "Wireless mechanical keyboard with hot-swappable switches",
    icon: "⌨️",
    featured: false,
  },
  {
    id: 36,
    name: 'LG UltraGear 27" 4K',
    price: 699,
    description: "Gaming monitor with 144Hz refresh rate and HDR",
    icon: "🖥️",
    featured: false,
  },
  {
    id: 37,
    name: 'Dell UltraSharp 32" 4K',
    price: 799,
    description: "Professional monitor with accurate color reproduction",
    icon: "🖥️",
    featured: false,
  },
  {
    id: 38,
    name: "Nvidia RTX 4090",
    price: 1599,
    description: "Flagship graphics card for 4K gaming and content creation",
    icon: "🎨",
    featured: false,
  },
  {
    id: 39,
    name: "AMD Ryzen 9 7950X",
    price: 699,
    description:
      "High-performance 16-core processor for gaming and productivity",
    icon: "⚡",
    featured: false,
  },
  {
    id: 40,
    name: "ASUS ROG Strix Helios",
    price: 299,
    description: "Premium gaming PC case with tempered glass panels",
    icon: "🖥️",
    featured: false,
  },
];

// Cart data
let cart = [];

// Current page
let currentPage = "home";

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  loadFeaturedProducts();
  loadAllProducts();
  updateCartCount();
  updateCartDisplay();
});

// Navigation functions
function showPage(pageName) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  // Show selected page
  document.getElementById(pageName).classList.add("active");

  // Update active navigation link
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  const activeLink = document.querySelector(
    `.nav-links a[onclick="showPage('${pageName}')"]`
  );
  if (activeLink) {
    activeLink.classList.add("active");
  }

  currentPage = pageName;

  // Close mobile menu if open
  document.getElementById("navLinks").classList.remove("active");

  // Update cart display if viewing cart
  if (pageName === "cart") {
    updateCartDisplay();
  }
}

function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Product loading functions
function loadFeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured);
  const container = document.getElementById("featuredProducts");
  container.innerHTML = "";

  featuredProducts.forEach((product) => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });
}

function loadAllProducts() {
  const container = document.getElementById("allProducts");
  container.innerHTML = "";

  products.forEach((product) => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
                <div class="product-image">${product.icon}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price}</div>
                <div class="product-description">${product.description}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            `;
  return card;
}

// Cart functions
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  updateCartCount();
  updateCartDisplay();

  // Show a brief animation or feedback
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = "Added!";
  button.style.background = "#4ecdc4";

  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = "";
  }, 1000);
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartCount();
  updateCartDisplay();
}

function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartCount();
      updateCartDisplay();
    }
  }
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartCount").textContent = totalItems;
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const emptyCart = document.getElementById("emptyCart");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "";
    cartTotal.style.display = "none";
    emptyCart.style.display = "block";
    return;
  }

  emptyCart.style.display = "none";
  cartTotal.style.display = "block";

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
                    <div class="cart-item-image">${item.icon}</div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price}</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                `;
    cartItemsContainer.appendChild(cartItem);
    total += item.price * item.quantity;
  });

  document.getElementById("totalAmount").textContent = `$${total.toFixed(2)}`;
}

function checkout() {
  if (cart.length === 0) return;

  const button = document.querySelector(".checkout-btn");
  const originalText = button.textContent;

  button.innerHTML = '<div class="loading"></div> Processing...';
  button.disabled = true;

  setTimeout(() => {
    alert(
      `Thank you for your purchase! Total: $${cart
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2)}`
    );
    cart = [];
    updateCartCount();
    updateCartDisplay();

    button.textContent = originalText;
    button.disabled = false;
  }, 2000);
}

// Contact form submission
function submitForm(event) {
  event.preventDefault();

  const submitBtn = document.getElementById("submitBtn");
  const successMessage = document.getElementById("successMessage");

  submitBtn.innerHTML = '<div class="loading"></div> Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    successMessage.classList.add("show");
    document.querySelector(".contact-form").reset();

    submitBtn.textContent = "Send Message";
    submitBtn.disabled = false;

    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 5000);
  }, 1500);
}

// Smooth scrolling and animations
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(102, 126, 234, 0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background =
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    header.style.backdropFilter = "none";
  }
});

// Handle window resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    document.getElementById("navLinks").classList.remove("active");
  }
});
