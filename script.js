
function unlock(){
 let p=document.getElementById('password').value.trim().toLowerCase();

 if(p==='aanya'){
   document.getElementById('login').style.display='none';
   document.getElementById('site').style.display='block';

   setTimeout(typeWriter,1000);

   createLilies();
   setInterval(createLilies,4000);

 }else{
   document.getElementById('error').innerText='Try again 🌸';
 }
}

const text = "Happy Birthday, Aanya 🌷🤍";
let i = 0;

function typeWriter() {
  const element = document.getElementById("typewriter");

  if (!element) return;

  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter,100);
  }
}

function createLilies(){

  const lily = document.createElement("div");

  lily.innerHTML = "🪻";

  lily.style.position = "fixed";
  lily.style.left = Math.random()*100 + "vw";
  lily.style.top = "-50px";
  lily.style.fontSize = "28px";
  lily.style.pointerEvents = "none";
  lily.style.zIndex = "9999";

  document.body.appendChild(lily);

  let pos = -50;

  const fall = setInterval(() => {

    pos += 3;

    lily.style.top = pos + "px";

    if(pos > window.innerHeight){

      clearInterval(fall);
      lily.remove();

    }

  },20);
}
