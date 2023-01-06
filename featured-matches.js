
// // featured matches sliding animation 
slideToRight.addEventListener("click", () => {
    statpage1.style.animation = "going 0.5s";
    setTimeout(() => {
        statpage1.style.display = "none";
        statpage2.style.display = "flex";
    }, 300)
    slideToRight.style.display = "none"
})

slideToLeft.addEventListener("click", () => {
    statpage1.style.animation = "coming 0.5s";
    setTimeout(() => {
        statpage1.style.display = "flex";
        statpage2.style.display = "none";
    }, 10)
    slideToRight.style.display = "block"
})

//video features
const videos = document.querySelectorAll('.videos');
videos.forEach((ele)=>{
    ele.addEventListener('mouseover', function(){
        ele.play();
    })
    ele.addEventListener('mouseout', function(){
        ele.pause();

    })
})

// Go to menu & go to Top in mobile view
const mobileMenu = document.getElementById("mobile-menu");

mobileMenu.addEventListener("click",()=>{
    window.scrollTo(0,document.body.scrollHeight);
})

const goTop = document.getElementById("top");

goTop.addEventListener("click",()=>{
    window.scrollTo(document.body.scrollHeight,0)
})

    let data = localStorage.getItem("data");
    const loginPage = document.getElementById("user-login");

loginPage.addEventListener("click",()=>{
    if(data == "yes"){
        window.location.href="logout.html";
    }
    else{
        window.location.href="login.html";
    }
})