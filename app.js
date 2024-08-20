console.log("Hi")

const iceCream = [
    { name: `Chocolate`, price: 1.25, quantity: 0, type: `scoop` },
    { name: `Vanilla`, price: 1.00, quantity: 0, type: `scoop` },
    { name: `Strawberry`, price: 1.50, quantity: 0, type: `scoop` },
    { name: `Sprinkles`, price: .25, quantity: 0, type: `topping` },
    { name: `Cheesecake Bites`, price: .75, quantity: 0, type: `topping` },
    { name: `Chocolate Chips`, price: .50, quantity: 0, type: `topping` },
    { name: `Waffle Cone`, price: 2.50, quantity: 0, type: `vessel` },
    { name: `Sugar Cone`, price: 1.50, quantity: 0, type: `vessel` },
    { name: `Cup`, price: 1.00, quantity: 0, type: `vessel` }
]


function addIngredient(ingredientName) {
    for (let i = 0; i < iceCream.length; i++) {
        //console.log(iceCream[i])
        if (ingredientName == iceCream[i].name) {
            iceCream[i].quantity += 1
            console.log(`added`, iceCream[i]);
        }
    }

    drawOrder()
}

function drawOrder() {
    const orderElem = document.getElementById('order-list')
    const totalElm = document.getElementById('order-total')
    let orderContent = ''
    for (let i = 0; i < iceCream.length; i++) {
        const item = iceCream[i]
        if (item.quantity > 0) {
            orderContent += `<p>Total: ${item.name} x${item.quantity} ${(item.price * item.quantity).toFixed(2)}</p>`
        }
    }
    console.log(orderContent);
    orderElem.innerHTML = orderContent
    const orderTotal = getOrderTotal()
    totalElm.innerText = `$${orderTotal.tofixed(2)}`
}

function getOrderTotal() {
    let total = 0
    for (let i = 0; i < iceCream.length; i++) {
        const item = iceCream[i]
        console.log(item.price * item.quantity);
        total += item.price * item.quantity
    }
    console.log('total:', total);
    return total
}

