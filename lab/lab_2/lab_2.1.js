let weight=80;
let height=1.4;

//Calculate BMI
const BMI= weight/(height*2);

// Calculate the weight need to increase or decrease
let tWeight=0;
if(BMI<18.5){
    tWeight=(18.5-BMI)*(height*2);
}
else(BMI>=25) 
    tWeight=(BMI-24.9)*(height*2);

// Give result and advice
if(BMI<18.5){
    console.log("You are Underweight");
    tWeight=(18.5-BMI)*(height*2);
    console.log("You should increase:"+ tWeight.toFixed(2) +"kg")
}
else if(BMI>=18.5 && BMI<=24.9){
    console.log ("You are Normal weight");
}
else if( BMI>=25 && BMI<=29.9){
    console.log ("You are Overweight");
    console.log("You should decrease:"+ tWeight.toFixed(2) +"kg");
}
else{
    console.log("Obesity");
    console.log("You should decrease:"+ tWeight.toFixed(2) +"kg");
}