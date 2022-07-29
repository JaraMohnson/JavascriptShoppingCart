let shoppingCart = [];

function AddItem(_name, _price) 
{
    let itemChosen = {
        Name: _name,
        Price: _price
    };
    shoppingCart.push(itemChosen);
}

function GrandTotal() {
    let total = 0;
    let itemCount = 1;

    shoppingCart.forEach((item) => {
        console.log(`${itemCount}. ${item.Name} - $${item.Price}`)
        total += item.Price;
        itemCount ++;
    }); 

    //round it all nice 
    total = (total).toFixed(2);

    //crunch some numbers 
    let GrandTotal = (total * 1.06).toFixed(2); 
    let tax = (GrandTotal - total).toFixed(2);

    console.log(`Item Total: $${total}. \nTax:$${tax}\nYour total is $${GrandTotal}.`)
    shoppingCart = [];

}
