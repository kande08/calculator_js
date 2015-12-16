var pastAnswers = [];

function lastAnswer(){
  var element = document.getElementById("output");
  if (element.innerHTML == ""){
    return "";
  } else {
    return parseFloat(element.innerHTML);
  }
}

function memoryAdd(){
  // put answer in memory
  // be able to hit clear and then be able to hit memory
  // have memory populate the first input
  var firstInput = document.getElementById("input_1");
  var secondInput = document.getElementById("input_2");
  firstInput.value = pastAnswers[pastAnswers.length - 1];
  secondInput.value = "";
}

function history(){
  // put equations.toString into arrays, put answers into array
  // do a loop to print equation + "=" + answer for each array
  
}

function clearForm(){
  var output = document.getElementById("output");
  output.innerHTML = "";
}

function getInputs(){
  var inputOne = parseFloat(document.getElementById("input_1").value);
  var inputTwo = parseFloat(document.getElementById("input_2").value);
  return [inputOne, inputTwo];
}

function setOutput(sum){
  var lastOutput = lastAnswer();
  document.getElementById("output").innerHTML = sum;
  document.getElementById("last_answer").innerHTML = lastOutput;
  pastAnswers.push(sum)
}

function add(){
  var inputs = getInputs();
  var sum = inputs[0] + inputs[1];
  setOutput(sum);
}

function subtract(){
  var inputs = getInputs();
  var sum = inputs[0] - inputs[1];
  setOutput(sum);
}

function multiply(){
  var inputs = getInputs();
  var sum = inputs[0] * inputs[1];
  setOutput(sum);
}

function divide(){
  var inputs = getInputs();
  var sum = inputs[0] / inputs[1];
  setOutput(sum);
}
