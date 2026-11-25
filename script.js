
// PINK LABEL - JAVASCRIPT

// SHOPPING BAG

let cart = [];

const bagCount = document.getElementById("bagCount");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

// ADD PRODUCTS TO BAG

document.querySelectorAll(".add-button").forEach(button => {

    button.addEventListener("click", function() {

        const name = this.dataset.name;
        const price = Number(this.dataset.price);

        cart.push({
            name: name,
            price: price
        });

        updateCart();

        alert(name + " added to your bag!");

    });

});

// UPDATE SHOPPING BAG

function updateCart() {

    bagCount.textContent = cart.length;

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your bag is currently empty.</p>";
    }

    cart.forEach((item, index) => {

        total += item.price;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>₹${item.price.toLocaleString("en-IN")}</p>
            </div>

            <button class="remove-item" data-index="${index}">
                REMOVE
            </button>
        `;

        cartItems.appendChild(div);

    });

    cartTotal.textContent = total.toLocaleString("en-IN");

    // REMOVE PRODUCTS

    document.querySelectorAll(".remove-item").forEach(button => {

        button.addEventListener("click", function() {

            const index = Number(this.dataset.index);

            cart.splice(index, 1);

            updateCart();

        });

    });

}

// OPEN BAG

document.getElementById("bagButton").addEventListener("click", function() {

    cartOverlay.classList.add("open");

});

// CLOSE BAG

document.getElementById("closeCart").addEventListener("click", function() {

    cartOverlay.classList.remove("open");

});

// CLOSE BAG WHEN CLICKING OUTSIDE

cartOverlay.addEventListener("click", function(event) {

    if (event.target === cartOverlay) {
        cartOverlay.classList.remove("open");
    }

});

// CATEGORY FILTERS

const filterButtons = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

        const category = this.dataset.filter;

        products.forEach(product => {

            if (
                category === "All" ||
                product.dataset.category === category
            ) {
                product.classList.remove("hidden");
            } else {
                product.classList.add("hidden");
            }

        });

    });

});

// CATEGORY CARDS

document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", function() {

        const category = this.dataset.category;

        const matchingFilter = document.querySelector(
            `.filter[data-filter="${category}"]`
        );

        if (matchingFilter) {
            matchingFilter.click();
        }

    });

});

// MOBILE MENU

document.getElementById("menuButton").addEventListener("click", function() {

    document.getElementById("navMenu").classList.toggle("show");

});

// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-left a").forEach(link => {

    link.addEventListener("click", function() {

        document.getElementById("navMenu").classList.remove("show");

    });

});

// NEWSLETTER

document.getElementById("newsletterForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    document.getElementById("newsletterMessage").textContent =
        "Thank you for subscribing! Welcome to PINK LABEL.";

    this.reset();

});

// CHECKOUT DEMO

document.getElementById("checkoutButton").addEventListener("click", function() {

    if (cart.length === 0) {

        alert("Your shopping bag is empty!");

    } else {

        alert("Thank you for shopping with PINK LABEL! This is a demo checkout.");

    }

});
