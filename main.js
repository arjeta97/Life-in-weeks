let displayResult=document.querySelector("#displayResult");
let ageInput=document.querySelector("#ageInput");
let result=document.querySelector("#result");
let refresh=document.querySelector(".refresh");
let calcBtn=document.querySelector("#calcBtn");
let resetBtn=document.querySelector("#resetBtn");

let mytimer;
let age;
        
//classList.add
//classList.remove
//isNaN

calcBtn.addEventListener("click", function() {
 age=ageInput.value.trim();

    if(age==""){

        let alert=document.querySelector(".alert");
        alert.classList.add('active');

        mytimer=setInterval(function (){
        alert.classList.remove('active');
        },3000);

    }else if (isNaN(age)==true){

        let alert2=document.querySelector(".alert2");
        alert2.classList.add('active');

        mytimer=setInterval(function(){
            alert2.classList.remove('active');
        },3000);

    } else{
        let answer=document.querySelector(".answer")
        answer.classList.add('active');

        let remaining_years = 80 - age;
        let remaining_weeks = remaining_years * 52;

        result.innerHTML=separateNumbersInComma(remaining_weeks);
        ageInput.value= "" ;

    }
});



function separateNumbersInComma(weeks) {
    return weeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


resetBtn.addEventListener('click', function(){
    refresh.click();
})


 