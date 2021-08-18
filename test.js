function amount(id){
    if(id=='plus'){
        document.getElementById('plus').addEventListener('click',function(event){
            const input = document.getElementById('input');
            let inputValue = input.value; 
            inputValue++; 
            input.value= inputValue; 
        })
    }
    else if(id=='minus'){
        document.getElementById('minus').addEventListener('click',function(event){
            const input = document.getElementById('input');
            let inputValue = input.value; 
            if(inputValue>1){
                inputValue--; 
                input.value= inputValue; 
            }
            
        }) 
    }
   
}

const itemArray = document.getElementsByClassName('itemprice');
console.log(itemArray);
let itemValue = 0;
for(const item of itemArray){
    const itemText = item.innerText;
    itemValue = itemValue+itemText
    console.log(itemVal);
}


