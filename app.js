


const hexArry = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.getElementById('hex-btn');
const hexCode = document.getElementById('code');


hexBtn.addEventListener('click', function () {
  let hex = '#';
  for(let i = 0; i < 6; i++){
  hex += hexArry[getRandomNumber()]
}
document.body.style.backgroundColor = hex;
hexCode.textContent = hex;
})


function getRandomNumber(){
  return Math.floor(Math.random() * hexArry.length);
}