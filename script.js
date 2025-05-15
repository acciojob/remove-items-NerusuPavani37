//your JS code here. If required.
let select = document.getElementById('colorSelect');
let btn = document.getElementsByTagName('input')[0];


btn.addEventListener('click' ,function(){
  let selectedIndex = select.selectedIndex;
  let selectedOption = select.options[selectedIndex];
  select.removeChild(selectedOption);
})