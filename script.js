
function unlock(){
 let p=document.getElementById('password').value.trim().toLowerCase();
 if(p==='aanya'){
   document.getElementById('login').style.display='none';
   document.getElementById('site').style.display='block';
 }else{
   document.getElementById('error').innerText='Try again 🌸';
 }
}
