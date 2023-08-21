function getInputValue(inputId){
    return document.getElementById(inputId).value;
}
function getValue(Id){
    return parseFloat(document.getElementById(Id).innerText);
}
function setInnerText(id,text){
    document.getElementById(id).innerText = text;
}

let discountPrice = 0;

 function getDiscount(newPrice){
        const discountInput = getInputValue('discount-input');
        if(discountInput === 'SELL200'){
            const discountPrice = (newPrice * 20) / 100;
            return discountPrice;
        }
        else{
            const discountInitial = 0;
            return discountInitial;
        }
     
 }


function productEntry(productName,price){
    const productEntry = document.getElementById('product-entry');
    const previousTotalPrice = getValue('total-price');
    const h4 = document.createElement('h4');
    const count = productEntry.childElementCount  +  1;
    const newPrice = (previousTotalPrice + price).toFixed(2);
    const totalDisplayPrice = newPrice - discountPrice;

    if(newPrice >0){
        document.getElementById('purchase-btn').removeAttribute('disabled');
    }else{
        document.getElementById('purchase-btn').setAttribute('disabled');
    }

    if(newPrice >= 200){
        document.getElementById('coupon-btn').removeAttribute('disabled');
        
    }

    h4.innerHTML = `
        <span>${count}</span>. <span>${productName}</span>
    `;
    h4.classList.add('text-2xl','font-medium' ,'text-heading-color');
    productEntry.appendChild(h4);
    setInnerText('total-price',newPrice);
    setInnerText('total',totalDisplayPrice.toFixed(2));
}

document.getElementById('coupon-btn').addEventListener('click',function(){
    const totalPrice = getValue('total-price');
    const discountInput = getInputValue('discount-input');
    if(discountInput === 'SELL200'){
        discountPrice = (totalPrice * 20) / 100;
        const totalDisplay = totalPrice - discountPrice;
        setInnerText('discount-amount',discountPrice.toFixed(2));
        setInnerText('total',totalDisplay.toFixed(2));
        document.getElementById('discount-input').value = '';
    }else{
        return alert('You Have Entered Wrong Coupon Code');
    }
    
});

document.getElementById('home-btn').addEventListener('click',function(){
    setInnerText('total-price','00.00');
    setInnerText('discount-amount','00.00');
    setInnerText('total','00.00');
    document.getElementById('product-entry').innerHTML = '';
    document.getElementById('purchase-btn').setAttribute('disabled','disabled');
    document.getElementById('coupon-btn').setAttribute('disabled','disabled');
    discountPrice = 0;
});