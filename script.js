function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = (parseInt(interest)).toFixed(2);
    document.getElementById("principal").focus();
    if(parseInt(amount) <= 0){
        document.getElementById("result").innerHTML="Enter a positive number";
    }
    else if((parseInt(amount) <= 0) && ((parseInt(principal)) >= 0)){
        document.getElementById("result").innerHTML="Enter a larger number";
    }
    else{
    document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+",\</mark\>\<br\>at an interest rate of \<mark\>"+rate+"\</mark\>%\<br\>You will receive an amount of \<mark\>"+amount+"\</mark> from interest,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>";
}
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function reset()
{
    var principal = document.getElementById("principal")
    principal.value = "0";
    var rate = document.getElementById("rate");
    rate.value= "1";
    document.getElementById("rate_val").innerText="1";
    var years = document.getElementById("years");
    years.value = "1";
    document.getElementById("result").innerHTML="";
    document.getElementById("principal").focus();
}