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

document.get
