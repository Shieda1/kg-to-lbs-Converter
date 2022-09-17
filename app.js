// https://www.omnicalculator.com/conversion/kg-to-lbs-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const lbsRadio = document.getElementById('lbsRadio');
const kgRadio = document.getElementById('kgRadio');

let lbs;
let kg = v; 

// labels of the inpust
const variable = document.getElementById('variable');

lbsRadio.addEventListener('click', function() {
  variable.textContent = 'kg';
  kg = v;
  result.textContent = '';
});

kgRadio.addEventListener('click', function() {
  variable.textContent = 'lbs';
  lbs = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(lbsRadio.checked)
    result.textContent = `lbs = ${computelbs().toFixed(5)}`;

  else if(kgRadio.checked)
    result.textContent = `kg = ${computekg().toFixed(5)}`;
})

// calculation

function computelbs() {
  return Number(kg.value) * 2.205;
}

function computekg() {
  return Number(lbs.value) / 2.205;
}