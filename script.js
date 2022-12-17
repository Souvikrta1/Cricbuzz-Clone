const menuBtn = document.querySelectorAll(".line1-btn");
const searchBtn = document.getElementById("search-btn");
const searchArea = document.getElementById("search-area");
const search = document.getElementById("search");
const menuDiv = document.getElementById("menu");

const newsDrop = document.querySelector(".news-drop");
const seriesDrop = document.querySelector(".series-drop");
const teamsDrop = document.querySelector(".teams-drop");
const videoDrop = document.querySelector(".videos-drop");
const rankingDrop = document.querySelector(".rankings-drop");
const moreDrop = document.querySelector(".more-drop");



const statpage1 = document.getElementById("stat-page1");
const statpage2 = document.getElementById("stat-page2");
const slideToRight = document.getElementById("slide-right");
const slideToLeft = document.getElementById("slide-left");






// calling menu bar dropdown event functions
menuBtn.forEach(ele =>{

    if(ele.classList.contains("news")){
        newsDropdown(ele);
    }
    if(ele.classList.contains("series")){
        seriesDropdown(ele);
    }
    if(ele.classList.contains("teams")){
        teamsDropdown(ele);
    }
    if(ele.classList.contains("videos")){
        videoDropdown(ele);
    }
    if(ele.classList.contains("rankings")){
        rankingDropdown(ele);
    }
    if(ele.classList.contains("more")){
        moreDropdown(ele);
    }
})


// functions events for dropdown in menu-bar
function newsDropdown(ele){
    ele.addEventListener('mouseover',(e)=>{
        newsDrop.style.display = "flex";  
    })
    ele.addEventListener('mouseout',(e)=>{
        newsDrop.style.display = "none";
    })
}

function seriesDropdown(ele){
    ele.addEventListener('mouseover',(e)=>{
        seriesDrop.style.display = "flex";
    })
    ele.addEventListener('mouseout',(e)=>{
        seriesDrop.style.display = "none";
    })
}

function teamsDropdown(ele){
    ele.addEventListener('mouseover',(e)=>{
        teamsDrop.style.display = "flex";
    })
    ele.addEventListener('mouseout',(e)=>{
        teamsDrop.style.display = "none";
    })
}

function videoDropdown(ele){
    ele.addEventListener('mouseover',(e)=>{
        videoDrop.style.display = "flex";
        
    })
    ele.addEventListener('mouseout',(e)=>{
        videoDrop.style.display = "none";
    })
}

function rankingDropdown(ele){
    ele.addEventListener('mouseover',(e)=>{
        rankingDrop.style.display = "flex";
    })
    ele.addEventListener('mouseout',(e)=>{
        rankingDrop.style.display = "none";
    })
}

function moreDropdown(ele){
    ele.addEventListener('mouseover',(e)=>{
        moreDrop.style.display = "flex";
    })
    ele.addEventListener('mouseout',(e)=>{
        moreDrop.style.display = "none";
    })
}






// search features
search.addEventListener("click",()=>{
    menuDiv.style.animation = "coming 0.1s";
    searchArea.style.animation = "going 0.1s"
    setTimeout(()=>{
        search.style.display = "none";
    menuDiv.style.display = "none";
    searchArea.style.display = "flex";
    searchArea.firstElementChild.focus();
    },10)
})

searchArea.addEventListener("focusout",()=>{
        search.style.display = "flex";
        menuDiv.style.display = "flex";
        searchArea.style.display = "none";
})






// featured matches sliding animation 
slideToRight.addEventListener("click",()=>{
    statpage1.style.animation = "going 0.5s";
    setTimeout(()=>{
        statpage1.style.display="none";
        statpage2.style.display = "flex";
    },300)
})

slideToLeft.addEventListener("click",()=>{
    statpage1.style.animation = "coming 0.5s";
    setTimeout(()=>{
        statpage1.style.display="flex";
        statpage2.style.display = "none";
    },10)
})