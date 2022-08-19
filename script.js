
function BMI( weight,height ){

    let result = weight / (height * height);
    return result
   
}
console.log(BMI(70,1.70))

console.log(BMI(80,1.70))

console.log(BMI(80,1.80))

console.log(BMI(50,1.70))

console.log(BMI(60,1.50))


let div = document.getElementById(`result`)



function Status(BMI){
   

if(BMI < 18.5) {
    div.style.color = "orange";
 return `لديك نقص في الوزن`
 
} else if(BMI >=18.5 && BMI < 25){
    div.style.color = "green"
    return ` وزنك صحي`
} else if(BMI >= 25 ){
    div.style.color = "red"
    return "لديك زياده في الوزن"
}
}
console.log(Status(BMI(70,1.70)))







function calculate(){ 

let weight = document.getElementById(`weight`).value 
let height = document.getElementById(`height`).value 

let bmi = BMI(weight,height)
let desc = Status(BMI(weight,height))

div.innerText = bmi + " == " + desc
}




