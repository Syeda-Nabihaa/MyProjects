const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;

}
// function clear(){
//     display.value = "";
//     console.log("clicked");
// }

let clear = document.getElementById("clear");
clear.addEventListener("click",()=>{
    display.value = "";
});

function equal(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error"
    }
}

let Delete = document.getElementById("del");
Delete.addEventListener("click",()=>{
    display.value = display.value.slice(0,-1);    //slice is used to delete number from the end
})

