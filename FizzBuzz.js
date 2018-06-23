var fizz = "Fizz";
var buzz = "Buzz";

for(var i = 1; i <= 100; i++ ){
    
    if(i % 3 == 0){
        console.log(fizz);
        continue;
    }
    else if(i % 5 == 0){
        if(i % 3 == 0){
            continue;
        }else{
            console.log(buzz);
            continue;
        }
    }
    console.log(i);
}
