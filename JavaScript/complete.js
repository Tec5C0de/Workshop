function calculateBMI(){
    let weightInput; //вес
    let heightinput; //рост
    let bmi; //ИМТ

    weightInput = document.getElementById("weight").value;
    heightinput = document.getElementById("height").value / 100;

    bmi = weightInput / Math.pow(heightinput, 2);

    document.getElementsByName("result")[0].innerHTML = "ИМТ: " + bmi.toFixed(2);
}
