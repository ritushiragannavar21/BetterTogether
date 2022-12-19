 
//  window.addEventListener('mouseup',function(event){
//     var box=document.getElementById('checkboxes');
//     if(event.target !=box && event.target.parentNode !=box){
//         box.style.display="none";
//     }
// });

var expanded=false;
    function showList(){
        var list=document.getElementById('checkboxes');
        if(!expanded){
            list.style.display="block";
            expanded=true;
        }
        else{
            list.style.display="none";
            expanded=false;
        }
    }  

function checkedFunction(){
     var checkedInputs = document.querySelectorAll("input:checked");
    var doc=document.getElementsByClassName('check-number')[0];
    doc.innerText=checkedInputs.length;
}

