
const BUY_BTN = ".buy-btn"
const MODAL_CLOSE_BTN = ".modal-close-btn";
const MODAL = ".modal";
const ACTIVE = ".active";
const tour_card_buy_btn = document.querySelectorAll(BUY_BTN);
const modal_close_btn = document.querySelector(MODAL_CLOSE_BTN);
const modal = document.querySelector(MODAL);

tour_card_buy_btn.forEach((btn)=>{btn.addEventListener("click",()=>{
    if(modal.classList.contains("active")){
        modal.classList.remove("active");
    }
    else{
        modal.classList.add("active");
    }
})
})


modal_close_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(modal.classList.contains("active")) modal.classList.remove("active")
})
