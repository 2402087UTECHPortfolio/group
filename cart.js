let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadCart() {
    let tbody = document.getElementById("cartBody");
    tbody.innerHTML = "";

    let subtotalSum = 0;

    cart.forEach(item => {
        let row = document.createElement("tr");

        let subtotal = item.price * item.quantity;
        subtotalSum += subtotal;

        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${subtotal.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });

    let discount = subtotalSum * 0.05;
    let taxed = (subtotalSum - discount) * 0.15;
    let total = subtotalSum - discount + taxed;

    document.getElementById("discount").textContent = discount.toFixed(2);
    document.getElementById("tax").textContent = taxed.toFixed(2);
    document.getElementById("grandTotal").textContent = total.toFixed(2);
}

function clearCart() {
    localStorage.removeItem("cart");
    cart = [];
    loadCart();
}

window.onload = loadCart;
