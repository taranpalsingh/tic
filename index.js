var turn = 0;

var arrP1 = [];  // "O"
var arrP2 = [];  // "X"

function update(cellid){
    
    if(turn == 0){
        document.getElementById(cellid).innerHTML = "O";
        arrP1.push(cellid);
        
       if(arrP1.includes("1") & arrP1.includes("2") & arrP1.includes("3") | 
          arrP1.includes("4") & arrP1.includes("5") & arrP1.includes("6") |
          arrP1.includes("7") & arrP1.includes("8") & arrP1.includes("9") |
          arrP1.includes("1") & arrP1.includes("4") & arrP1.includes("7") | 
          arrP1.includes("2") & arrP1.includes("5") & arrP1.includes("8") |
          arrP1.includes("3") & arrP1.includes("6") & arrP1.includes("9") |
          arrP1.includes("1") & arrP1.includes("5") & arrP1.includes("9") | 
          arrP1.includes("3") & arrP1.includes("5") & arrP1.includes("7")){
          
                alert("Player O WON");
                document.location.reload();
           
        }
        turn = 1;
    }
    
    else if(turn == 1){
        document.getElementById(cellid).innerHTML = "X";
        arrP2.push(cellid);
        
        
        
        if(arrP2.includes("1") & arrP2.includes("2") & arrP2.includes("3") | 
          arrP2.includes("4") & arrP2.includes("5") & arrP2.includes("6") |
          arrP2.includes("7") & arrP2.includes("8") & arrP2.includes("9") |
          arrP2.includes("1") & arrP2.includes("4") & arrP2.includes("7") | 
          arrP2.includes("2") & arrP2.includes("5") & arrP2.includes("8") |
          arrP2.includes("3") & arrP2.includes("6") & arrP2.includes("9") |
          arrP2.includes("1") & arrP2.includes("5") & arrP2.includes("9") | 
          arrP2.includes("3") & arrP2.includes("5") & arrP2.includes("7")){
                
                alert("Player X WON");
                document.location.reload();
        }
        turn = 0;
    }    
    
    
    
    
}
