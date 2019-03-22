 //
 
 
 var myGreetings = greetings("hii");
 myGreetings("vinay" , "kornapalli");
console.log(myGreetings);

async function helloAsync(){
   await console.log("this is async call");
}

function helloSync(){
    console.log("this is sync call ");
}

helloAsync();
helloSync();