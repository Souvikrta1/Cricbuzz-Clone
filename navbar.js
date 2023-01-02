const menuBtn = document.querySelectorAll(".nav-btn");
const searchBtn = document.getElementById("search-btn");
const searchArea = document.getElementById("search-area");
const search = document.getElementById("search");
const menuDiv = document.getElementById("menu");
const bodyDiv = document.querySelector("body");


// these are mainly for dropdown in menu btn mainly
const newsDrop = document.querySelector(".news-drop");
const seriesDrop = document.querySelector(".series-drop");
const teamsDrop = document.querySelector(".teams-drop");
const videoDrop = document.querySelector(".videos-drop");
const rankingDrop = document.querySelector(".rankings-drop");
const moreDrop = document.querySelector(".more-drop");


// this are mainly for featured matches area
const statpage1 = document.getElementById("stat-page1");
const statpage2 = document.getElementById("stat-page2");
const slideToRight = document.getElementById("slide-right");
const slideToLeft = document.getElementById("slide-left");

// menu button hover event listeners when user hover over button
menuBtn.forEach(ele => {
    if (ele.classList.contains("news")) {
        ele.addEventListener("mouseover", (e) => {
            newsDrop.style.display = "flex";
        })
    }
    if (ele.classList.contains("series")) {
        ele.addEventListener("mouseover", (e) => {
            seriesDrop.style.display = "flex";
        })
    }
    if (ele.classList.contains("teams")) {
        ele.addEventListener("mouseover", (e) => {
            teamsDrop.style.display = "flex";
        })
    }
    if (ele.classList.contains("videos")) {
        ele.addEventListener("mouseover", (e) => {
            videoDrop.style.display = "flex";
        })
    }
    if (ele.classList.contains("rankings")) {
        ele.addEventListener("mouseover", (e) => {
            rankingDrop.style.display = "flex";
        })
    }
    if (ele.classList.contains("more")) {
        ele.addEventListener("mouseover", (e) => {
            moreDrop.style.display = "flex";
        })
    }
    ele.addEventListener("mouseover",()=>{
        ele.style.background = "#00785c";
    })
    ele.addEventListener("mouseout",()=>{
        ele.style.background = "initial";
    })
})

// newsDrop event listeners
newsDrop.addEventListener("mousemove", () => {
    newsDrop.style.display = "flex";
})

newsDrop.addEventListener("mouseout",() => {
    newsDrop.style.display = "none";
})

//seriesDrop event listeners
seriesDrop.addEventListener("mousemove", () => {
    seriesDrop.style.display = "flex";
})

seriesDrop.addEventListener("mouseout", () => {
    seriesDrop.style.display = "none";
})

//teams drop event listeners 
teamsDrop.addEventListener("mousemove", () => {
    teamsDrop.style.display = "flex";
})

teamsDrop.addEventListener("mouseout", () => {
    teamsDrop.style.display = "none";
})

//videoDrop event listeners
videoDrop.addEventListener("mousemove", () => {
    videoDrop.style.display = "flex";
})

videoDrop.addEventListener("mouseout", () => {
    videoDrop.style.display = "none";
})

// rankingDrop event listeners
rankingDrop.addEventListener("mousemove", () => {
    rankingDrop.style.display = "flex";
})

rankingDrop.addEventListener("mouseout", () => {
    rankingDrop.style.display = "none";
})

//moreDrop event listeners
moreDrop.addEventListener("mousemove", () => {
    moreDrop.style.display = "flex";
})

moreDrop.addEventListener("mouseout", () => {
    moreDrop.style.display = "none";
})

// mouseout feature on user go out of the dropdown
document.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("news")) {
        newsDrop.style.display = "none";
    }
    if (!e.target.classList.contains("series")) {
        seriesDrop.style.display = "none";
    }
    if (!e.target.classList.contains("teams")) {
        teamsDrop.style.display = "none";
    }
    if (!e.target.classList.contains("videos")) {
        videoDrop.style.display = "none";
    }
    if (!e.target.classList.contains("rankings")) {
        rankingDrop.style.display = "none";
    }
    if (!e.target.classList.contains("more")) {
        moreDrop.style.display = "none";
    }
})

// if user go out of document body
document.addEventListener("mouseout",()=>{ 
    newsDrop.style.display = "none";
    seriesDrop.style.display = "none";
    teamsDrop.style.display = "none";
    videoDrop.style.display = "none";
    rankingDrop.style.display = "none";
    moreDrop.style.display = "none";
})

const newsDropBtns = document.querySelectorAll(".news-drop button");
const seriesDropBtns = document.querySelectorAll(".series-drop button");
const teamsDropBtns = document.querySelectorAll(".teams-drop button");
const videoDropBtns = document.querySelectorAll(".videos-drop button");
const rankDropBtns = document.querySelectorAll(".rankings-drop button");
const moreDropBtns = document.querySelectorAll(".more-drop button");
newsDropBtns.forEach((ele)=>{
    dropBtnHover(ele);
})
seriesDropBtns.forEach((ele)=>{
    dropBtnHover(ele);
})
teamsDropBtns.forEach((ele)=>{
    dropBtnHover(ele);
})
videoDropBtns.forEach((ele)=>{
    dropBtnHover(ele);
})
rankDropBtns.forEach((ele)=>{
    dropBtnHover(ele);
})
moreDropBtns.forEach((ele)=>{
    dropBtnHover(ele);
})


function dropBtnHover(ele){
    ele.addEventListener("mouseover",()=>{
        ele.style.background = "rgb(208, 204, 204)";
    })
    ele.addEventListener("mouseout",()=>{
        ele.style.background = "initial";
    })
}

const cricPlus = document.querySelector(".plus");
// search features
search.addEventListener("click", () => {
    menuDiv.style.animation = "coming 0.25s";
    searchArea.style.animation = "going 0.25s";
    cricPlus.style.display = "none";
    setTimeout(() => {
        search.style.display = "none";
        menuDiv.style.display = "none";
        searchArea.style.display = "flex";
        searchArea.firstElementChild.focus();
    }, 10)
})

searchArea.addEventListener("focusout", () => {
    search.style.display = "flex";
    menuDiv.style.display = "flex";
    searchArea.style.display = "none";
    cricPlus.style.display = "flex";
})