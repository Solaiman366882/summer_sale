function getValue(Id){
    return parseFloat(document.getElementById(Id).innerText);
}
function setInnerText(id,text){
    document.getElementById(id).innerText = text;
}

function productEntry(productName,price){
    const productEntry = document.getElementById('product-entry');
    const previousTotalPrice = getValue('total-price');
    const total = document.getElementById('total')
    const h4 = document.createElement('h4');
    const count = productEntry.childElementCount  +  1;
    const newPrice = (previousTotalPrice + price).toFixed(2);
    if(newPrice >0){
        document.getElementById('purchase-btn').removeAttribute('disabled');
    }
    if(newPrice >= 200){
        document.getElementById('coupon-btn').removeAttribute('disabled');
        
    }
    h4.innerHTML = `
        <span>${count}</span>. <span>${productName}<span>
    `;
    h4.classList.add('text-2xl','font-medium' ,'text-heading-color');
    productEntry.appendChild(h4);
    setInnerText('total-price',newPrice);
    setInnerText('total',newPrice);
    console.log(newPrice);
}