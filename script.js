
const toggle = document.getElementById("toggle");
const btn = document.getElementById("btn");
const links = document.querySelectorAll(".links");

btn.addEventListener("click", (e) => {
  toggle.classList.toggle("active");
});
links.forEach((e) => {
  e.addEventListener("click", () => {
  toggle.classList.toggle("active");
  })
});

const images = ['prof1.jpg', 'prof2.jpg', 'prof3.jpg', 'prof4.jpg'];
let currentImageIndex = 0;
const imageElement = document.querySelector('#main .user_img img');
  function flipImageCycle() {
setTimeout(() => {
currentImageIndex = (currentImageIndex + 1) % images.length;
imageElement.src = images[currentImageIndex];

setTimeout(() => {
  flipImageCycle();
}, 7500);

}, 52500);
}
setTimeout(()=>{
flipImageCycle();
},400);

 var tabl=document.getElementsByClassName("tl");
 var tc=document.getElementsByClassName("tab-contents");
 function opentab(tabname){
  for (tab of tabl){
    tab.classList.remove("active-link");
  }
  for (content of tc){
    content.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");

}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwQujL_qMOcL62CNaYMG8XOJvu506vrpyuHLN0zdsGnvhsvDu_Wwg0Ip9N9zDjW2XjP9w/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})