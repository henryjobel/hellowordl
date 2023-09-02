 function cardsAddToCard(card) {
    const cardItemTitle = card.querySelector(".card-title").innerText;
    const cardItemPrice = parseFloat(card.querySelector("#cardItemPrice").innerText);
    
    const selectedItemsContainer = document.getElementById("selected-items");
    const totalPriceContainer = document.getElementById("totalPricecard");
    
    const selectedItem = document.createElement("div");
    selectedItem.classList.add("selected-item");
    selectedItem.innerHTML = `<h6>${cardItemTitle} - ${cardItemPrice} Tk</h6>`;
    
    selectedItemsContainer.appendChild(selectedItem);
    
    const totalPrice = parseFloat(totalPriceContainer.innerText);
    totalPriceContainer.innerText = (totalPrice + cardItemPrice).toFixed(2);
}



document.getElementById("getapplydis").addEventListener("click", function() {
    const couponCodeInput = document.querySelector(".getDiscount");
    const couponCode = couponCodeInput.value;
    if (couponCode === "SELL200") {
        const totalDiscountContainer = document.getElementById("totalDiscount");
        const nittotoalPriceContainer = document.getElementById("nittotoalPrice");
        const totalPriceContainer = document.getElementById("totalPricecard");
        
        const totalPrice = parseFloat(totalPriceContainer.innerText);
        const discountAmount = (totalPrice * 0.20).toFixed(2);
        const netTotalPrice = (totalPrice - discountAmount).toFixed(2);
        
        totalDiscountContainer.innerText = discountAmount;
        nittotoalPriceContainer.innerText = netTotalPrice;
    }
});


document.getElementById('gobackhome').addEventListener("click",function(){
    window.location.href = 'index.html'
})


