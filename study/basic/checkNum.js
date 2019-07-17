function checkNum() {
    var score = document.getElementById('num').value;
    if (score > 60){
        console.log("OK!");
    }else if(score == 40){
        console.log("so so!");    
    }else{
        console.log("No!");  
    }
}

