function BMI (weigth, heigth) {
   let result = weigth / (heigth * heigth);
   return result;
}

console .log(BMI(80, 1.8))

function Status (BodyMass){
    if (BodyMass < 18.5){
        return ("لديك نقص في الوزن")
    }
    else if (BodyMass >= 18.5 , BodyMass < 25){
        return ("وزنك صحي")
    }
    else if (BodyMass > 25){
        return ("لديك زيادة في الوزن")
    }
}

function calculate(){
    let weigth = document.getElementById("weight").value;
    let heigth = document.getElementById("height").value;

    let bmi_value = BMI (weigth, heigth)
    let desc = Status (bmi_value)

    let box = document.getElementById('result')

    box.innerText = bmi_value +" == " +desc
}



