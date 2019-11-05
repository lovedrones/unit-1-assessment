//------variables
var answer;

//-------constraints(app states)


//-------cached elements 
var getInput = document.getElementById('numIp');
var result = document.querySelector('h1');
var numInput = parseFloat(getInput.value);
//--------event listeners
document.getElementById('plus').addEventListener('click', function() {
 answer = numInput + 1;
console.log(answer);
 render();
})
document.getElementById('minus').addEventListener('click', function() {
  answer =  numInput - 1;
    console.log(answer);
    render();
})
//-------- functions 
function init() {
    return answer;
    render();
  }
  
  function render() {
    result.textContent = answer;
    // result.style.color = sum >= 0 ? 'green' : 'red';
  }
  
  init();
console.log('hello, welcome to my unit 1 assessement');