// function amount(id){
//     if(id=='plus'){
//         document.getElementById('plus').addEventListener('click',function(event){
//             const input = document.getElementById('input');
//             let inputValue = parseInt(input.value); 
//             inputValue++; 
//             input.value= inputValue; 
//             console.log(inputValue);
//         })
//     }
//     else if(id=='minus'){
//         document.getElementById('minus').addEventListener('click',function(event){
//             const input = document.getElementById('input');
//             let inputValue = parseInt(input.value); 
//             if(inputValue>1){
//                 inputValue--; 
//                 input.value= inputValue
//                 console.log(inputValue);
//             }
            
//         }) 
//     }
   
// }

function updateCase(place, isIncreasing,priceId,price){
    const input = document.getElementById(place);
    let updateMobilePricePlace = document.getElementById(priceId);

    let inputNumber = parseInt(input.value,); 
    if(isIncreasing==true){
        inputNumber++;       
    }
    else if(inputNumber>1){
        inputNumber--;  
    }  
   
    input.value = inputNumber;
    updateMobilePricePlace.innerText = inputNumber*price; 
    //Update Price

    calculateTotal(); 
    
}


function getInputValue(totalAmount){
    const phoneInput = document.getElementById(totalAmount);
    const phoneNumber = phoneInput.value; 
    return phoneNumber; 
}

function calculateTotal (){
    const phoneTotal = getInputValue('input')*1259; 
    const coverTotal = getInputValue('input1')*59; 
    const subtotal = phoneTotal+coverTotal;
    const tax= subtotal/10;
    const totalprice= subtotal+tax; 
    document.getElementById('Subtotal').innerText = subtotal;
    document.getElementById('Tax').innerText = tax;
    document.getElementById('totalprice').innerText = totalprice;
    return totalprice; 
    

}

