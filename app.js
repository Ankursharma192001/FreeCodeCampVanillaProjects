const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener('click',function(){
    
    // console.log(document.body);
    

    //  Now our goal is to get a random number between zero and the size of colors Array using which we will access a value from the colors array

    const randomNumber=GetRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
})

// Now we need to generate some kind of function to generate random values of indexes lying between 0 to size of array

function GetRandomNumber()
{
    return Math.floor(Math.random()*colors.length);
}