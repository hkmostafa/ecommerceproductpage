const cart = document.querySelector(".cart-popup");
const cartButton = document.querySelector(".icon-cart");

cartButton.addEventListener("click", () => {
  const visible = navigation.getAttribute("data-visible");
  if (visible === "false") {
    cart.setAttribute("data-visible", true);
    cartButton.setAttribute("aria-expanded", true);
  } else {
    cart.setAttribute("data-visible", false);
    cartButton.setAttribute("aria-expanded", false);
  }
});
