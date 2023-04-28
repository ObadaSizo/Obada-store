const addToCart = document.querySelectorAll(".card-btn");
const cartList = document.querySelector(".offcanvas-body");
const Total = document.querySelector("#theTotal");
const TotalInForm = document.querySelector("#Total-in-form")

function getCard () {
    for(let i = 0 ; i<= addToCart.length-1 ; i++){
        addToCart[i].onclick = () => {
            let appendedCard = addToCart[i].parentNode.cloneNode(true);
            appendedCard.childNodes[1].style = "width:150px";
            appendedCard.childNodes[5].firstChild.classList.replace("fa-cart-arrow-down","fa-times"); 
            appendedCard.childNodes[5].classList.add("cancel");
            appendedCard.childNodes[3].childNodes[5].classList.add("price-to-total")
            console.log (appendedCard)
            appendedCard.childNodes[5].style.cssText = "background-color: transparent; color: #222222; bottom:65px; right:10px; box-shadow: 0 0 0";
            appendedCard.style.cssText = "width:100%; height:150px; display:flex; flex-direction:row ; text-align:center; padding-right:5px;";
            cartList.append(appendedCard);
            let cancelElement = document.querySelectorAll(".cancel");
            let price = document.querySelectorAll(".price-to-total");
            let total = 0;
            console.log()
            for(let j = 0 ; j <= cancelElement.length-1 ; j++ ) {
                cancelElement[j].onclick = () => {
                    cartList.removeChild(cancelElement[j].parentElement)
                    total -= cancelElement[j].parentElement.childNodes[3].childNodes[5].innerHTML.slice(1)
                    Total.innerHTML = `$${total}`            
                    TotalInForm.innerHTML = `$${total}`
                }
            }
            for (let m = 0 ; m < price.length ; m++) {
                total += parseInt(price[m].innerHTML.slice(1));
                console.log(total)
            }
            Total.innerHTML = `$${total}`
            TotalInForm.innerHTML = `$${total}`            
        }
    }
}
const removeAll =document.querySelector("#remove")
function emptyCart() {
    removeAll.onclick = () => {
        for (let k = cartList.childNodes.length-1 ; k > 2 ; k-- ) {
            cartList.removeChild(cartList.childNodes[k])
        }
        Total.innerHTML = `$0`
        TotalInForm.innerHTML = `$0`
    }
}
const pay = document.querySelector("#pay");
const payForm = document.querySelector(".payment");
const btnClose1 =document.querySelector("#btn-close1");
const btnClose2 =document.querySelector("#btn-close2");
const btnClose3 =document.querySelector(".btn1");
const overLay = document.querySelector("#overlay");

function payment() {
    pay.onclick = () => {
        payForm.classList.toggle("d-none");
        overLay.classList.toggle("d-none");
        btnClose1.click();
    }
    btnClose2.onclick = () => {
        payForm.classList.toggle("d-none");
        overLay.classList.toggle("d-none");
    }
    btnClose3.onclick = () => {
        payForm.classList.add("d-none");
        overLay.classList.add("d-none");
    }
    overLay.onclick = () => {
        payForm.classList.add("d-none");
        overLay.classList.add("d-none");
    }
}   
getCard();
emptyCart();
payment();


