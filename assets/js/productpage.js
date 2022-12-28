
// function change(img){
//     var x=document.getElementById('productImg');
//     x=img.src;
// }

// imagr replacement code

var productImg=document.getElementById("productImg");
var smalimg=document.getElementsByClassName("smal-img");
smalimg[0].onclick=function(){   
    productImg.src=productImg1.src;
}
smalimg[1].onclick=function(){    
    productImg.src=productImg2.src;
}
smalimg[2].onclick=function(){
    productImg.src=productImg3.src;
}
smalimg[3].onclick=function(){  
    productImg.src=productImg4.src;
}



// description and review paragraph

function openCity(evt, cityName) {
    var i, paraText, tablinks;
    paraText = document.getElementsByClassName("paraText");
    for (i = 0; i < paraText.length; i++) {
        paraText[i].style.display = "none"; 
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}




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