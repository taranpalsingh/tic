var turn = 0;
var p1;
var p2;
var obj,name1,name2,score1,score2,id1,id2;
$(document).ready(function(){
    
    $("#scoreboard1").hide();
    $("#scoreboard2").hide();
    $("#tictable").hide();
    
    $("#buttonstart").click(function(){
        $("#tictable").show();
    }); 
    $("#buttonreset").click(function(){
        reset();
    }); 
    $("#buttonresetplayers").click(function(){
        window.location.reload();
    }); 
    
    getall();
    
    console.log(obj);
    
    $("#buttongo1").click(function(){
        console.log("here");
       
        name1 = document.getElementById("Username1").value;
        var flag = 0;
        for(var i=0; i<obj.length; i++){
            
            if(obj[i].Username == name1){
                console.log("matched");
                flag = 1;
                $("#scoreboard1").show();
                id1 = obj[i].id;
                score1 = obj[i].Score;
                document.getElementById("score1").innerHTML = obj[i].Score;
                console.log(obj[i].Score);
            }
        }
        if(flag == 0){
            console.log("not matched");
//            id1 = postnew(name1);
            Username = name1;
            Score = 0;
            score1 = Score;
            document.getElementById("score1").innerHTML = Score;
            $("#scoreboard1").show();
            var myOBJ = {Username,Score}; 
            $.ajax({
                type: 'POST',
                url: "http://localhost:50883/api/Users",
                dataType: "JSON",
                data :myOBJ,
                success: function(res){
                    }
            });
            getall();                            ////////////////////////////////////////////////////////////////////
            id1 = getthis(name1);
             setTimeout(function(){console.log("new id is "+ id1);},100);
//            console.log("new id is "+ id1);
        }
        
    $("#buttongo2").click(function(){
        
        name2 = document.getElementById("Username2").value;
        for(var i=0; i<obj.length; i++){
            if(obj[i].Username == name2){
                console.log(obj[i]);
                console.log("matched");
                $("#scoreboard2").show();
                id2 = obj[i].id;
                score2 = obj[i].Score;
                document.getElementById("score2").innerHTML = obj[i].Score;
                console.log(obj[i].Score);
            }
    }
    });
});
});



var arrP1 = [];  // "O"
var arrP2 = [];  // "X"
var arr = [];   
function update(cellid){  //      "O"
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
              arrP1.includes("3") & arrP1.includes("5") & arrP1.includes("7"))
             {
                    score1 = score1 + 10;
                    score2 = score2 - 5;
                    Username = name1;
                    Score = score1;
                    id = id1;
                    var myOBJ1 = {id, Username, Score};
                    console.log(myOBJ1);
                    Username = name2;
                    id = id2;
                    Score = score2;
                    var myOBJ2 = {id, Username, Score};
                    console.log(myOBJ2);
                 
                    $.ajax({
                        type: 'PUT',
                        url: "http://localhost:50883/api/Users/"+ id1,
                        dataType: "JSON",
                        data :myOBJ1,
                        success: function(res){
                            console.log("sent 1");
                       }

                    });

                    $.ajax({
                        type: 'PUT',
                        url: "http://localhost:50883/api/Users/"+ id2,
                        dataType: "JSON",
                        data :myOBJ2,
                        success: function(res){
                            console.log("sent 2");
                       }

                    });
                 setTimeout(function(){alert( name1 + " WON ")},10);

            }
            else if(arr.length == 9){  
                setTimeout(function(){alert("------------DRAW------------")},10);

            }
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
              arrP2.includes("3") & arrP2.includes("5") & arrP2.includes("7"))
            {
                
                    score1 = score1 - 5;
                    score2 = score2 + 10;
                    Username = name1;
                    Score = score1;
                    id = id1;
                    var myOBJ1 = {id, Username, Score};
                    console.log(myOBJ1);
                    Username = name2;
                    id = id2;
                    Score = score2;
                    var myOBJ2 = {id, Username, Score};
                    console.log(myOBJ2);
                 
                    $.ajax({
                        type: 'PUT',
                        url: "http://localhost:50883/api/Users/"+ id1,
                        dataType: "JSON",
                        data :myOBJ1,
                        success: function(res){
                            console.log("sent 1");
                       }

                    });

                    $.ajax({
                        type: 'PUT',
                        url: "http://localhost:50883/api/Users/"+ id2,
                        dataType: "JSON",
                        data :myOBJ2,
                        success: function(res){
                            console.log("sent 2");
                       }

                    });
                    setTimeout(function(){alert( name2 + " WON ")},10);

                    

            }
            else if(arr.length == 9){
                setTimeout(function(){alert("------------DRAW------------")},10);

            }
        }
}    
    console.log(arr);
}


function getall(){
    $.ajax({
        type: 'GET',
        url: "http://localhost:50883/api/Users",
        dataType: "JSON",
        success: function(res){ 
            console.log("got initial users");
            obj = res;
        }
    });

}

function getthis(name){
    for(var i=0; i<obj.length; i++){
            if(obj[i].Username == name){
    
                console.log("got new id " + obj[i].id);
                return obj[i].id;
            }
    }
}
function reset(){
    arrP1.length = 0;
    console.log(arrP1);
    arrP2.length = 0;
    arr.length = 0;
    turn = 0;
    for(var i =1;i<=9;i++){
        document.getElementById(i).innerHTML = "";

    }
}