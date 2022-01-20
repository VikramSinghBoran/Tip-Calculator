function giveAlert(){
    alert("It's quite simple! Come on!");
}

function giveAlert1(){
    alert("Please enter sensible values. If you really want to just play then CSGo is a better option. TRUSTME.");
}

function printCal(){
    let a = document.getElementById("bill").value;
    let b = document.getElementById("tip").value;
    let c = document.getElementById("numOfPeople").value;
    
    let d = (a * (b / 100))/c ;
    if(d<=a){
        document.getElementById("tip-per-person").innerText = d ;
        document.getElementById("total-per-person").innerText = d + (a/c) ;
        
    }
    else{
        document.getElementById("tip-per-person").innerText = "Proper input gets proper output you know!" ; 
        document.getElementById("total-per-person").innerText = "Statement above is damn right!" ; 0.
        
    }
}