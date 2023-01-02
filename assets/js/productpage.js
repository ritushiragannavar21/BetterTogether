


// image replacement code
const smalimg=document.querySelectorAll(".smalImg");
const productImg=document.querySelectorAll(".mainImg");
for(let i=0; i<smalimg.length;i++){
   
    smalimg[i].addEventListener("click",()=>{
        for(let j=0;j< productImg.length;j++){
            productImg[j].classList.remove('main-active');
        }
        for(let k=0;k<smalimg.length;k++){
            smalimg[k].classList.remove('Active-img');
        }
        productImg[i].classList.add('main-active');
        smalimg[i].classList.add('Active-img');
    })
}
// ------------------------
// var productImg=document.getElementById("productImg");
// var smalimg=document.getElementsByClassName("smal-img");

// smalimg[0].onclick=function(){   
//     productImg.src=productImg1.src;
//     document.getElementById('productImg1').classList.add('slide-right');
// }
// smalimg[1].onclick=function(){    
//     productImg.src=productImg2.src;
// }
// smalimg[2].onclick=function(){
//     productImg.src=productImg3.src;
// }
// smalimg[3].onclick=function(){  
//     productImg.src=productImg4.src;
// }
// description and review paragraph
const tabs=document.querySelectorAll('.tablinks');
const tabcontent=document.querySelectorAll('.paraText');
for(let i=0; i<tabs.length;i++){
 
    tabs[i].addEventListener("click",()=>{
        for(let j=0;j<tabcontent.length;j++){
            tabcontent[j].classList.remove('tab-content-active');
        }
        for(let k=0;k<tabs.length;k++){
            tabs[k].classList.remove('active');
        }
        tabcontent[i].classList.add('tab-content-active');
        tabs[i].classList.add('active');
    })
}

// function openCity(evt, cityName) {
//     var i, paraText, tablinks;
//     paraText = document.getElementsByClassName("paraText");
//     for (i = 0; i < paraText.length; i++) {
//         paraText[i].style.display = "none"; 
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

// code for product quantity increment and decrement

const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");

const totalCount = document.getElementById("total-count");

var count = 1;
totalCount.innerHTML = count;
const handleIncrement = () => {
count++;
totalCount.innerHTML = count;
};
const handleDecrement = () => {
count--;
totalCount.innerHTML = count;
};
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);


const addcart=document.getElementById('cart');
addcart.addEventListener('click',function(){
	console.log(count);
})

			

// const decrease=document.querySelector("down-arrow");
// const increase=document.querySelector("up-arrow");
// const value=document.querySelector("total-count");


// let Data ="1";
// value.innerHTML= Data;

// increase.onclick = function(){
//     Data++;
//     value.innerHTML= Data;
// }

// decrease.onclick = function(){
//     Data--;
//     value.innerHTML= Data;
// }