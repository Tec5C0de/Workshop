function calculateBMI(){
    let weightInput; //вес
    let heightinput; //рост
    let bmi; //ИМТ
    //Привязка значений из
    weightInput = document.getElementById("weight").value;
    heightInput = document.getElementById("height").value;

    bmi = weightInput / Math.pow(heightInput, 2);
}




