const navbar= document.querySelector('.nav')
// ketika klik hamburger menu maka navigasi akan muncul
document.getElementById('menu').onclick = (e)=>{
    navbar.classList.toggle('active');
    navbar.focus();
    // e.preventDefault();
   
}




// klik diluar elemen

const navbtn=document.getElementById('menu')

document.addEventListener('click', function(e){
    if(!navbtn.contains(e.target) && !navbar.contains(e.target)){
        navbar.classList.remove('active')
    }

    
})



// mengubah position navbar menjadi fixed
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});







