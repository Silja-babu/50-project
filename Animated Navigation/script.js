const toggleEl = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggleEl.addEventListener('click',()=>{
    nav.classList.toggle('active')
})