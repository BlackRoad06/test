
var fs = require("fs");

//fs.writeFile("message.txt", "hello my name is ", err =>{
    //if (err) throw err;
    //console.log("the file has been saved");
//});

fs.readFile("./message.txt", "utf8", (err, data) =>{
    if (err) throw err;
    
    var dataArr = data.split(" ");
    for(var i = 0; i < dataArr.length; i++){
        if("Piry" === dataArr[i]){
            console.log("true");
            word = dataArr[i];
        
        }
    }

});








