//Light Switch Function

function turnOn() {
  console.log ('ON activated')
  document.getElementById('bulb-image').src="pic_bulbon.gif"
}

function turnOff() {
  console.log ('OFF activated')
  document.getElementById('bulb-image').src="pic_bulboff.gif"
}

//BMI Function

function calculateBmi() {

 
  var h = document.getElementById('h').value;

  var w = document.getElementById('w').value;

  var bmi= w/(h/100*h/100);
                  
  var bmio = (bmi.toFixed(0));

  document.getElementById('result').innerHTML = "Your BMI is " + bmio;
bmiText (bmio)
}

function bmiText(bmi){

if (bmi < 18) {
 
  document.getElementById('message').innerHTML = 'You are underweight';

} else if (bmi >= 18.5 && bmi <= 24.9) {
  
  document.getElementById('message').innerHTML = 'You are healthy';
} else {
  
  document.getElementById('message').innerHTML = 'You are overweight';
}

}

