
let dayNight = document.querySelector('.dayNight');
let banner = document.querySelector('.banner');

dayNight.addEventListener('click', ()=>{
    banner.classList.toggle("night");
})


let typed = new Typed('#text',{
    strings:['Coder', 'Developer' , 'Software Engineer'],
    loop : true,
    typingSpeed : 90,
    backSpace : 50,
    backDelay : 1000
}
   

)