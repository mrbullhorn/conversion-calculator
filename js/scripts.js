//business logic
function convert(faren) {
  return (faren - 32) / 1.8;
}


//user interface logic

const faren = prompt("Enter the temperature in farenheit");

window.alert ("The temperature is " + (convert(faren).toFixed(0)) + "\u00B0" + " celcius.");