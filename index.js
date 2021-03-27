function Refresh(){  
var x = random(8);  
return x;

}
function random(size){
    var chars = '!@#$%^&*()_+,./?:;[]{}\|~`abcdefghijklmnopqrstuvwxyz1234567890';
    var len = chars.length;
    let randChar= '';
    for(i =0; i<=size; i++){
    var randNo = Math.random()*len+1;
     randChar += chars.charAt(randNo);      
    }   
     return randChar;
    
}




