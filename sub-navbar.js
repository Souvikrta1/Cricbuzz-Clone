//for line 2 of header effects
const match = document.querySelectorAll(".match");

match.forEach((ele)=>{
    ele.addEventListener("mouseover",()=>{
        ele.style.background = "#373737";
    })
    ele.addEventListener("mouseout",()=>{
        ele.style.background = "initial"
    })
})


// all-btn match details open close
const allBtn = document.querySelector(".all-btn");
const closeBtn = document.querySelector(".close-btn");
const openCloseContainer = document.querySelector(".open-close-match-container")
const matchStyle = document.querySelector(".match");
const matches = document.querySelector(".matches")

allBtn.addEventListener("click",()=>{
    openCloseContainer.style.display ="flex";
    allBtn.style.display = "none";
    closeBtn.style.display = "flex";
    openCloseContainer.style.animation ="down 0.4s" //animation open in all match section
    setTimeout(()=>{
        openCloseContainer.style.display ="none";
        allBtn.style.display = "flex";
        closeBtn.style.display = "none";
    },120000)
})
closeBtn.addEventListener("click",()=>{
    openCloseContainer.style.animation ="up 0.4s" // animation close in all match section
    setTimeout(()=>{
        openCloseContainer.style.display ="none";
    allBtn.style.display = "flex";
    closeBtn.style.display = "none";
    },370)
})

// live now btn function inside open-close container
const allMatchBtn = document.querySelector("#all");
const liveBtn = document.querySelector("#live-now");
const liveMatchBtn = document.querySelectorAll(".Ind-Ban-series a");
const liveMatchpara = document.querySelectorAll(".Ind-Ban-series p");
const upcomingMatch = document.getElementById("upcoming");

//default is all button in open-close container

//when user clicks live now button in open-close container
liveBtn.addEventListener("click",()=>{
    allMatchBtn.style.background = "rgb(46, 43, 43)";
    allMatchBtn.style.color = "white";
    liveBtn.style.background = "white";
    liveBtn.style.color ="black";
    upcomingMatch.style.background = "rgb(46, 43, 43)";
    upcomingMatch.style.color ="white";
    liveMatchBtn.forEach((ele)=>{
        if(ele.classList.contains("live")){
            ele.style.color= "red" ;
        } else {
            ele.style.opacity = "10%"
        }
    })
    liveMatchpara.forEach((ele)=>{
        if(ele.classList.contains("live")){
            ele.style.color= "red" ;
        } else {
            ele.style.opacity = "10%"
        }
    })
})

//when user click in all button in open-close container
allMatchBtn.addEventListener("click",()=>{
    allMatchBtn.style.background = "white";
    allMatchBtn.style.color = "black";
    liveBtn.style.background = "rgb(46, 43, 43)";
    liveBtn.style.color ="white";
    upcomingMatch.style.background = "rgb(46, 43, 43)";
    upcomingMatch.style.color ="white";
    liveMatchBtn.forEach((ele)=>{
        ele.style.color = "white";
        ele.style.opacity = "100%"
    })
    liveMatchpara.forEach((ele)=>{
        ele.style.color = "silver";
        ele.style.opacity = "100%"
    })
})

//when user click in upcoming button in open-close container
upcomingMatch.addEventListener("click",()=>{
    upcomingMatch.style.background = "white";
    upcomingMatch.style.color = "black";
    allMatchBtn.style.background = "rgb(46, 43, 43)";
    allMatchBtn.style.color = "white";
    liveBtn.style.background = "rgb(46, 43, 43)";
    liveBtn.style.color ="white";
    liveMatchBtn.forEach((ele)=>{
        if(!ele.classList.contains("live")){
            ele.style.color= "white" ;
            ele.style.opacity = "100%";
        } else {
            ele.style.color = "white"
            ele.style.opacity = "10%"
        }
    })
    liveMatchpara.forEach((ele)=>{
        if(!ele.classList.contains("live")){
            ele.style.color= "white" ;
            ele.style.opacity = "100%";
        } else {
            ele.style.color = "white"
            ele.style.opacity = "10%"
        }
    })
})