 
function mySyncFunc(){
    
    console.log("before the loop");
    for(let i = 0 ; i < 10000000000 ; i++){

    }
     console.log("finally finished running the loop");
}
console.log("Started executing sync function");

mySyncFunc();

console.log("End of executing sync function");




function myAsyncFunc(){

    console.log("before the loop");
    setTimeout(function(){
        for(let i = 0 ; i < 10000000000 ; i++){

        }

        console.log("finally finished running the loop");
    } , 0)
    console.log("out of setTimeout API");
}


console.log("Started executing async function");

myAsyncFunc();

console.log("End of executing async function");