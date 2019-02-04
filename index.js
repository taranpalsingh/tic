var turn = 0;

var arrP1 = [];  // "O"
var arrP2 = [];  // "X"
var arr = [];
function update(cellid){
    if(turn == 0){
        
        if(!(arr.includes(cellid))){
            document.getElementById(cellid).innerHTML = "O";
            
            arrP1.push(cellid);
            arr.push(cellid);
            turn = 1;
        
            if(arrP1.includes("1") & arrP1.includes("2") & arrP1.includes("3") | 
              arrP1.includes("4") & arrP1.includes("5") & arrP1.includes("6") |
              arrP1.includes("7") & arrP1.includes("8") & arrP1.includes("9") |
              arrP1.includes("1") & arrP1.includes("4") & arrP1.includes("7") | 
              arrP1.includes("2") & arrP1.includes("5") & arrP1.includes("8") |
              arrP1.includes("3") & arrP1.includes("6") & arrP1.includes("9") |
              arrP1.includes("1") & arrP1.includes("5") & arrP1.includes("9") | 
              arrP1.includes("3") & arrP1.includes("5") & arrP1.includes("7")){
            
                setTimeout(function(){alert("Player O WON")},10);
                    document.location.reload();

            }
        turn = 1;
        }
        
    }
    
    else if(turn == 1){
        
        if(!arr.includes(cellid)){
            
            document.getElementById(cellid).innerHTML = "X";
            arr.push(cellid);
            arrP2.push(cellid);
            
            turn = 0;
            if(arrP2.includes("1") & arrP2.includes("2") & arrP2.includes("3") | 
              arrP2.includes("4") & arrP2.includes("5") & arrP2.includes("6") |
              arrP2.includes("7") & arrP2.includes("8") & arrP2.includes("9") |
              arrP2.includes("1") & arrP2.includes("4") & arrP2.includes("7") | 
              arrP2.includes("2") & arrP2.includes("5") & arrP2.includes("8") |
              arrP2.includes("3") & arrP2.includes("6") & arrP2.includes("9") |
              arrP2.includes("1") & arrP2.includes("5") & arrP2.includes("9") | 
              arrP2.includes("3") & arrP2.includes("5") & arrP2.includes("7")){
                setTimeout(function(){alert("Player X WON")},10);
                    document.location.reload();
            }
            
        }
        
}    
    
    
    console.log(arr);
    
    
}
