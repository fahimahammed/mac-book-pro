document.getElementById('memory8GB').addEventListener('click', function(){
    setPrice('extra-memory-cost', 0);
});
document.getElementById('memory16GB').addEventListener('click', function(){
    setPrice('extra-memory-cost', 180);
});
document.getElementById('storage256GB').addEventListener('click', function(){
    setPrice('extra-storage-cost', 0);
});
document.getElementById('storage512GB').addEventListener('click', function(){
    setPrice('extra-storage-cost', 100);
});
document.getElementById('storage1TB').addEventListener('click', function(){
    setPrice('extra-storage-cost', 180);
});
document.getElementById('free-delivery').addEventListener('click', function(){
    setPrice('delivery-charge', 0);
});
document.getElementById('cost-delivery').addEventListener('click', function(){
    setPrice('delivery-charge', 20);
});
document.getElementById('promo-btn').addEventListener('click', function(){
    applyPromoCode();
});

function applyPromoCode(){
    const promoText = document.getElementById('promo-text').value;
    const totalPriceWithOutPromo = parseFloat(document.getElementById('total-price').innerText);
    let totalPrice = totalPriceWithOutPromo;
    if (promoText == 'fahim20'){
        const discount = totalPriceWithOutPromo * 0.2;
        totalPrice = totalPriceWithOutPromo - discount;
    }
    else if (promoText != 'fahim20'){
        document.getElementById('message').innerText = 'Please enter valid code.';
    }
    document.getElementById('total-bill').innerText = totalPrice;
}


function setPrice(id, price){
    document.getElementById(id).innerText = price;
    total();
}


function total(){
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const extraMemoryCost = parseInt(document.getElementById('extra-memory-cost').innerText);
    const extraStorageCost = parseInt(document.getElementById('extra-storage-cost').innerText);
    const delieryCharge = parseInt(document.getElementById('delivery-charge').innerText);
    const total = bestPrice + extraMemoryCost + extraStorageCost + delieryCharge;
    document.getElementById('total-price').innerText = total;
    document.getElementById('total-bill').innerText = total;
}