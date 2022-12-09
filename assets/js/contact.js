

    // let buttonwork=document.getElementsByClassName('send-msg');

    // buttonwork.addEventListener('click', function() {
    //     // let msg=document.getElementById('Thankyou_message')[0];
    //     // msg.style.display='block';
    //    alert('Thankyou');
    // });
    
 function required()
    {
        var empt = document.forms["form1"]["txt"].value;
        if (empt !=null)
        {
        alert('THANK YOU!');
        return true; 
        }
    }