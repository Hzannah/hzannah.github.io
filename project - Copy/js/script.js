let searchForm = document.querySelector(".search-form");

let product = [
    (product1 = {
        image: "product-1.png",
        name: "Orange",
        price: "8:99",
    }),
    (product2 = {
        image: "product-2.png",

        name: "Onion",
        price: "4:99",
    }),
    (product3 = {
        image: "product-3.png",
        name: "Fresh Meat",
        price: "9:99",
    }),
    (product4 = {
        image: "product-4.png",
        name: "Cabbage",
        price: "8:99",
    }),
    (product5 = {
        image: "product-5.png",
        name: "Fresh Potato",
        price: "6:99",
    }),
    (product6 = {
        image: "product-6.png",
        name: "Avocado",
        price: "8:99",
    }),
    (product7 = {
        image: "product-7.png",
        name: "Carrot",
        price: "4:99",
    }),
    (product8 = {
        image: "product-8.png",
        name: "Lemon",
        price: "8:99",
    }),
];
let orderArr = [];

let shoppingCart = document.querySelector(".shopping-cart");
const placeOrder = document.querySelectorAll(".placeOrder");
placeOrder.forEach((e) => {
    e.addEventListener("click", function () {
        console.log(e.dataset.food);
        const order = e.dataset.food;
        orderArr.push(product.find((e) => e.name === order));
        renderCart();
    });
});
const renderCart = function () {
    shoppingCart.textContent = "";
    orderArr.forEach((e) => {
        const html = `                <div class="box">
                    <i class="fas fa-trash"></i>
                    <img src="image/${e.image}" alt="" />
                    <div class="content">
                        <h3>${e.name}</h3>
                        <span class="price">${e.price}/-</span>
                        <span class="quantity">qty : 1</span>
                    </div>
                </div>`;
        shoppingCart.insertAdjacentHTML("beforeend", html);
    });
};
document.querySelector("#cart-btn").onclick = () => {
    shoppingCart.classList.toggle("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
};

window.onscroll = () => {
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    navbar.classList.remove("active");
};
