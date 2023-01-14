let randomise_arr= document.getElementById("randomize_arr_btn");
let sort_btn=document.getElementById("sort_btn");
let bars_container=document.getElementById("bars_container");
let minRange=1;
let maxRange=50;
let numOfBars=68;
let heightFactor=11;
let unsorted_arr= new Array(numOfBars);

function randomNum(min,max){
    return Math.floor(Math.random()* (max-min+1))+min;
}

function createRandomArray(){
    for(let i=0;i<numOfBars;i++){
        unsorted_arr[i]=randomNum(minRange,maxRange);
    }
}

document.addEventListener("DOMContentLoaded",function(){
    createRandomArray();
    renderBars(unsorted_arr);
});

function renderBars(array){
    for(let i=0;i<array.length;i++){
        let bar=document.createElement("div");
        bar.classList.add("bars");
        bar.style.height=array[i]*heightFactor+"px";
        bars_container.appendChild(bar); 
    }
}

randomise_arr.addEventListener("click",function(){
    createRandomArray();
    bars_container.innerHTML="";
    renderBars(unsorted_arr);
})

function Sleep(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
}

async function bubbleSort(array){
    let bars=document.getElementsByClassName("bars");
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i-1;j++){
            if(array[j]>array[j+1]){
                for(let k=0;k<bars.length;k++){
                    if(k!==j && k!=j+1){
                        bars[k].style.backgroundColor="aqua";
                    }
                } 
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                bars[j].style.height=array[j]*heightFactor+"px";
                bars[j].style.backgroundColor="rgb(90, 215, 88)";
                // bars[j].innerText=array[j];

                bars[j+1].style.height=array[j+1]*heightFactor+"px";
                bars[j+1].style.backgroundColor="rgb(90, 215, 88)";
                // bars[j+1].innerText=array[j+1];  
                await Sleep(50);
            }
        }
        await Sleep(50);
    }
    return array;
}

sort_btn.addEventListener("click",function(){
    let sorted_array=bubbleSort(unsorted_arr);
    console.log(sorted_array);
});