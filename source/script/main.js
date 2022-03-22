const toggleButton = document.querySelector('.dark-light');
toggleButton.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode");
});

const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");

wrapper.addEventListener("scroll", (e) => {
 e.target.scrollTop > 30
  ? header.classList.add("header-shadow")
  : header.classList.remove("header-shadow");
});