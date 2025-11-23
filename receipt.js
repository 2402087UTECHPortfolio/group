function loadReceipt() {
    let order = JSON.parse(localStorage.getItem("lastOrder"));

    
    if (!order) {
        document.body.innerHTML = "<h2>No receipt available.</h2>";
        return;
    }

    document.getElementById("orderID").innerText = order.orderID;
    document.getElementById("custName").innerText = order.name;
    document.getElementById("custAddress").innerText = order.address;
    document.getElementById("cardName").innerText = order.cardName;

    let masked = order.cardNumber.slice(12).padStart(16, "●");
    document.getElementById("cardNumber").innerText = masked;

    let subtotal = 0;
    let itemsHTML = "";

    order.items.forEach(item => {
        let lineTotal = item.price * item.quantity;
        subtotal += lineTotal;

        itemsHTML += `
            <div class="receipt-row">
                <img src="Assets/${item.image}" alt="${item.name}">
                <div>
                    <p><strong>${item.name}</strong></p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Subtotal: $${lineTotal.toFixed(2)}</p>
                </div>
            </div>
        `;
    });

    document.getElementById("receiptItems").innerHTML = itemsHTML;

    let tax = subtotal * 0.15;
    let total = subtotal + tax;

    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
}

// PDF DOWNLOAD
function downloadPDF() {
    const element = document.getElementById("receiptBox");
    html2pdf().from(element).save("SnackVerse_Receipt.pdf");
}

window.onload = loadReceipt;
