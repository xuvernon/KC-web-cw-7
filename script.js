
function BMI( weight,height ){

    let result = weight / (height * height);
    return result
   
}
console.log(BMI(70,1.70))







function Status(BMI){
if(BMI < 18.5) {
 return "لديك نقص في الوزن'"
} else if(BMI >=18.5 && BMI < 25){
    return "وزنك صحي" 
} else if(BMI >= 25 ){
    return "لديك زياده في الوزن"
} else{
return "try again"
}
}
console.log(Status(BMI(70,1.70)))






function calculate(){

    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = BMI( weight,height)
    let desc = Status(BMI)

    let div = document.getElementById('result')
    div.innerTEXT = bmi + "==" + desc
}





function BMI5(x = 0){
console.log(x)

}
BMI5()
BMI5(1)
BMI5(2)
BMI5(3)
BMI5(4)