var btnFirst = document.getElementById('one');
var btnSecond = document.getElementById('two');
var btnThird = document.getElementById('three');
var btnFourth = document.getElementById('four');
var btnFifth = document.getElementById('five');
var btnSixth = document.getElementById('six');
var btnSeventh = document.getElementById('seven');
var btnEighth = document.getElementById('eight');
var btnNinth = document.getElementById('nine');
var btnZeroth = document.getElementById('zero');
var btnPlus = document.getElementById('plus');
var btnMinus = document.getElementById('minus');
var btnDivide = document.getElementById('divide');
var btnMultiply = document.getElementById('multiply');
var divDisplay = document.getElementById('div-display');
var btnClear = document.getElementById('clear');
var btnEqual = document.getElementById("equals");

btnFirst.addEventListener('click', function () {
   var a=btnFirst.innerHTML;
   divDisplay.innerHTML += a;
});

btnSecond.addEventListener('click', function () {
   var a = btnSecond.innerHTML;
   divDisplay.innerHTML += a;
});

btnThird.addEventListener('click', function () {
   var a = btnThird.innerHTML;
   divDisplay.innerHTML += a;
});

btnFourth.addEventListener('click', function () {
   var a = btnFourth.innerHTML;
   divDisplay.innerHTML += a;
});

btnFifth.addEventListener('click', function () {
   var a = btnFifth.innerHTML;
   divDisplay.innerHTML += a;
});

btnSixth.addEventListener('click', function () {
   var a = btnSixth.innerHTML;
   divDisplay.innerHTML += a;
});

btnSeventh.addEventListener('click', function () {
   var a = btnSeventh.innerHTML;
   divDisplay.innerHTML += a;
});

btnEighth.addEventListener('click', function () {
   var a = btnEighth.innerHTML;
   divDisplay.innerHTML += a;
});

btnNinth.addEventListener('click', function () {
   var a = btnNinth.innerHTML;
   divDisplay.innerHTML += a;
});

btnZeroth.addEventListener('click', function () {
   var a = btnZeroth.innerHTML;
   divDisplay.innerHTML += a;
});

btnPlus.addEventListener('click', function () {
   if (divDisplay.innerHTML !== '') {
      var a = btnPlus.innerHTML;
      var c=divDisplay.innerHTML;
      divDisplay.innerHTML = c+ a;
   }
   else
      alert('Enter operand first');
});


btnMinus.addEventListener('click', function () {
   if (divDisplay.innerHTML !== '') {
      var c=divDisplay.innerHTML;
      var a = btnMinus.innerHTML;
      divDisplay.innerHTML =c + a;
   }
   else
      alert('Enter operand first');
});


btnDivide.addEventListener('click', function () {
   if (divDisplay.innerHTML !== '') {
      var c =divDisplay.innerHTML;
      var a = btnDivide.innerHTML;
      divDisplay.innerHTML = c + a;
   }
   else
      alert('Enter operand first');
});


btnMultiply.addEventListener('click', function () {
   if (divDisplay.innerHTML !== '') {
      var c=divDisplay.innerHTML;
      var a = btnMultiply.innerHTML;
      divDisplay.innerHTML = c+a;
   }
   else
      alert('Enter operand first');
});

btnClear.addEventListener('click', function () {
   divDisplay.innerHTML = '';
});

btnEqual.addEventListener('click', function () {
   var c=eval(divDisplay.innerHTML);
   divDisplay.innerHTML = c;
});