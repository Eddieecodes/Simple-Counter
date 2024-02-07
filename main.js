//alert("hello world");
let addNumber = 0; 
function increment () {
    
    addNumber++; 
    document.getElementById('addNumber').innerHTML = "counter: " + (addNumber);   
    //console.log("clicked")
    
} 
let addnumber2 = 0;
function increment2 () {
    addnumber2+=2; 
    document.getElementById('addNumber2').innerHTML = "counter: " + (addnumber2);   
}
let number1 = 0;
function decrement () {
    number1--;
    document.getElementById('subnumber').innerHTML = "counter:" + (number1);
}
 

//  const addNo = document.querySelector("button.addNumber");
 
//  console.log(document);
//  console.log(addNo);

//  addNo.addEventListener('click', {
//     console.log("clicked")
//  });
//  this.textcontent = ("counter" + addNumber)
 