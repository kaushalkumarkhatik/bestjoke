const joke=document.getElementById("joke");
const jokebtn=document.querySelector("#jokebtn");

const image=async () => {
  try{
  const seth={
    headers: {
      Accept:"application/json"
    }
  }
  const res=await fetch('https://icanhazdadjoke.com',seth);
  const data=await res.json();
  joke.innerHTML=data.joke;
 }catch(err){
   console.log(err);
 }
}



jokebtn.addEventListener('click',image);
image();