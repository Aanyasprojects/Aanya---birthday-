
function unlock(){
 let p=document.getElementById('password').value.trim().toLowerCase();
 if(p==='aanya'){
   document.getElementById('login').style.display='none';
   document.getElementById('site').style.display='block';
 }else{
   document.getElementById('error').innerText='Try again 🌸';
 }
}
const text = "Happy Birthday, Aanya 🌷🤍";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener("load", () => {
  setTimeout(typeWriter, 1000);
});
