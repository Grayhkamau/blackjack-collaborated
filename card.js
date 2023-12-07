const btn = document.querySelectorAll('#btn')[1];
const hiw = document.getElementById('hiw')
//hiw -> how it works
let showHiw = false;
const hiw_gotit = document.getElementById('hiw_btn')

btn.addEventListener('click',()=>{
  if(!showHiw){
    hiw.style.width = "50%";
    hiw.style.opacity = 1;
  
    showHiw = true
    return
  }
  
})
hiw_gotit.addEventListener('click',()=>{
  if(showHiw){
    hiw.style.width = "0%";
    hiw.style.opacity = 0;

    showHiw = false

  }
})
