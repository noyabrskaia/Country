let input = document.getElementById('input');
let button = document.getElementById('button');
let alert = document.getElementById('alert');
alert.style.display = 'none';
let list = document.getElementById('list');
const items = [];

button.addEventListener('click', ()=>{ 
  console.log (input.value);
  if(!input.value){
    alert.style.display = '';
  } else {
    if (!alert.style.display){
      alert.style.display = 'none';
    }
    addNewItem(input.value);
    input.value = '';
    render();
  }
})
function addNewItem(name){
  let li = document.createElement('li');
  li.innerText = name;
  const count = items.length + 1;
  if(count % 3 == 0){
    li.className = 'red';
  }
  items.push(li);
}
function render(){
  list.innerHTML = '';
  items.forEach(item=>{
    list.append(item);
  })
}



