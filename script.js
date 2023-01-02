const menuBtn = document.querySelectorAll(".line1-btn");
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
bodyDiv.addEventListener("mouseover", (e) => {
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
    matches.style.border = "none";
    openCloseContainer.style.animation ="down 0.5s" //animation open in all match section
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
    matches.style.borderBottom = "1px solid #c4c6c4";
})

// live now btn function inside open-close container
const allMatchBtn = document.querySelector("#all");
const liveBtn = document.querySelector("#live-now");
const liveMatchBtn = document.querySelectorAll(".Ind-Ban-series button");
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




// featured matches sliding animation 
slideToRight.addEventListener("click", () => {
    statpage1.style.animation = "going 0.5s";
    setTimeout(() => {
        statpage1.style.display = "none";
        statpage2.style.display = "flex";
    }, 300)
})

slideToLeft.addEventListener("click", () => {
    statpage1.style.animation = "coming 0.5s";
    setTimeout(() => {
        statpage1.style.display = "flex";
        statpage2.style.display = "none";
    }, 10)
})


// showing ad features
const ads = ["https://www.drivespark.com/img/2018/11/maruti-ertiga-tvc-video-varun-dhawan-advertisement1-1542887535.jpg", "https://i.ytimg.com/vi/qCoJpymgSxc/maxresdefault.jpg", "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c46d0ba1-3fb8-4eb1-8ae7-4a71501b1306.__CR0,0,970,600_PT0_SX970_V1___.jpg", "https://etimg.etb2bimg.com/photo/89201899.cms", "https://www.adweek.com/wp-content/uploads/files/blogs/frooti-hed-2015.jpg", "https://gumlet.assettype.com/afaqs%2F2022-04%2F7600931c-19e1-4ec0-80fc-627ed633b091%2Fdolly1.jpg?rect=0%2C33%2C800%2C450&format=webp&w=400&dpr=2.6", "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/men%60s-footwear-ads-design-template-78776ad26b8e10c9d0bc3346500a0792_screen.jpg?ts=1660293293", "https://stock.intellemo.com/624190a2a4d580fea3b730e2/62418fd438732c17450a8eae-v1/men_s_sport_shoes_l.jpg", "https://previews.123rf.com/images/hstrongart/hstrongart1701/hstrongart170100151/69269523-mouth-rinse-ads-refreshing-mouthwash-products-with-mints-leaves-and-splashing-liquids-in-3d-illustra.jpg"]
const show = document.querySelector(".show-ad");
const show2 = document.querySelector(".show-ad2");
setInterval(() => {
    var randomAds = ads[Math.floor(Math.random() * ads.length)];
    show.innerHTML = "";
    show.innerHTML = `<img class="ads" src="${randomAds}"></img>`;
    show2.innerHTML = "";
    show2.innerHTML = `<img class="ads" src="${randomAds}"></img>`
}, 7000);



//video features
const videos = document.querySelectorAll('.videos');
videos.forEach((ele)=>{
    ele.addEventListener('mouseover', function(){
        ele.play();
        ele.style.scale="1.25";
    })
    ele.addEventListener('mouseout', function(){
        ele.pause();
        ele.style.scale="1";

    })
})
// let clip=document.querySelector(".videos")
// clip.addEventListener('mouseover',function(e){
//     clip.play();
// })


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

// Go to menu & go to Top in mobile view
const mobileMenu = document.getElementById("mobile-menu");

mobileMenu.addEventListener("click",()=>{
    window.scrollTo(0,document.body.scrollHeight);
})

const goTop = document.getElementById("top");

goTop.addEventListener("click",()=>{
    window.scrollTo(document.body.scrollHeight,0)
})



// fetching API for scorecard in featured matches

window.onload = async () => {
    const res = await fetch("https://prakash-dey.github.io/api/crickbuzz.json");
    
    const data = await res.json();

    // first match data in featured matches
    const firstMatch = document.querySelector(".first-match");

    function firstMatchRender(data){
        let matchName = data[0]["name"];
        let team1Name = data[0]["shortName"][0];
        let team2Name = data[0]["shortName"][1];
        let team1Runs = data[0]["score"][0]["r"];
        let team2Runs = data[0]["score"][1]["r"];
        let team1Wkt = data[0]["score"][0]["w"];
        let team2Wkt = data[0]["score"][1]["w"];
        let team1over = data[0]["score"][0]["o"];
        let team2over = data[0]["score"][1]["o"];
        let status = data[0]["status"];


        firstMatch.innerHTML += `<button class="stat-btn" onclick="window.location.href='https://www.cricbuzz.com/live-cricket-scorecard/60814/rsawu19-vs-indwu19-1st-t20-india-women-under-19s-tour-of-south-africa-2022-23'">
        <p class="mobile-preview1">${matchName}</p>
        <span>
            <p>${team1Name}</p>
            <p class="firstMatch-runs1">${team1Runs}-${team1Wkt} (${team1over})</p>
        </span>
        <span>
            <p>${team2Name}</p>
            <p class="firstMatch-runs2">${team2Runs}-${team2Wkt} (${team2over})</p>
        </span>
        <p class="match1-status">${status}</p>
    </button>
    <button class="fantasy" onclick="window.location.href='https://www.cricbuzz.com/cricket-fantasy-handbook/56969/ind-vs-ban-1st-test-india-tour-of-bangladesh-2022#!/expert-picks'"><i class="fa-solid fa-trophy" ></i> Fantasy Handbook</button>`
    }

    firstMatchRender(data);

    // second match data in featured matches

    const secondMatch = document.querySelector(".second-match");

    function secondMatchRender(data){
        let matchName = data[1]["name"];
        let team1Name = data[1]["shortName"][0];
        let team2Name = data[1]["shortName"][1];
        let team1Runs = data[1]["score"][0]["r"];
        let team2Runs = data[1]["score"][1]["r"];
        let team1Wkt = data[1]["score"][0]["w"];
        let team2Wkt = data[1]["score"][1]["w"];
        let team1over = data[1]["score"][0]["o"];
        let team2over = data[1]["score"][1]["o"];
        let status = data[1]["status"];


        secondMatch.innerHTML = `<button class="stat-btn2" onclick="window.location.href='https://www.cricbuzz.com/cricket-scores/57545/nep-vs-nam-2nd-match-icc-cricket-world-cup-league-two-2019-23'">
        <p class="mobile-preview2">${matchName}</p>
        <span>
            <p>${team1Name}</p>
            <p class="secondMatch-runs1">${team1Runs}-${team1Wkt} (${team1over})</p>
        </span>
        <span>
            <p>${team2Name}</p>
            <p class="secondMatch-runs2">${team2Runs}-${team2Wkt} (${team2over})</p>
        </span>
        <p class="match2-status">${status}</p>
    </button>`
    }

    secondMatchRender(data);

    // Third Match data 

    const thirdMatch = document.querySelector(".third-match");

    function thirdMatchRender(data){
        let matchName = data[2]["name"];
        let team1Name = data[2]["shortName"][0];
        let team2Name = data[2]["shortName"][1];
        let team1Runs = data[2]["score"][0]["r"];
        let team2Runs = data[2]["score"][1]["r"];
        let team1Wkt = data[2]["score"][0]["w"];
        let team2Wkt = data[2]["score"][1]["w"];
        let team1over = data[2]["score"][0]["o"];
        let team2over = data[2]["score"][1]["o"];
        let status = data[2]["status"];


        thirdMatch.innerHTML = `<button class="stat-btn3" onclick="window.location.href='https://www.cricbuzz.com/cricket-scores/58651/nga-vs-tan-23rd-match-icc-mens-t20-world-cup-sub-regional-africa-qualifier-b-2022'">
        <p class="mobile-preview2">${matchName}</p>
        <span>
            <p>${team1Name}</p>
            <p class="thirdMatch-runs1">${team1Runs}-${team1Wkt} (${team1over})</p>
        </span>
        <span>
            <p>${team2Name}</p>
            <p class="thirdMatch-runs2">${team2Runs}-${team2Wkt} (${team2over})</p>
        </span>
        <p class="match3-status">${status}</p>
    </button>`
    }
    thirdMatchRender(data);

    // fourth match data

    const mobilePreview = document.getElementById("fourth-match");
    const team1Data = document.getElementById("team-1");
    const team2Data = document.getElementById("team-2");
    const match4Status = document.querySelector(".match4-status")

    function fourthMatchRender(data){
        let matchName = data[4]["name"];
        let team1Name = data[4]["shortName"][0];
        let team2Name = data[4]["shortName"][1];
        let team1Runs = data[4]["score"][0]["r"];
        let team2Runs = data[4]["score"][1]["r"];
        let team1Wkt = data[4]["score"][0]["w"];
        let team2Wkt = data[4]["score"][1]["w"];
        let team1over = data[4]["score"][0]["o"];
        let team2over = data[4]["score"][1]["o"];
        let status = data[4]["status"];

        mobilePreview.innerText = matchName;
        team1Data.innerHTML = `<p>${team1Name}</p>
        <p class="fourthMatch-runs1">${team1Runs}-${team1Wkt} (${team1over})</p>`
        team2Data.innerHTML = `<p>${team2Name}</p>
        <p class="thirdMatch-runs2">${team2Runs}-${team2Wkt} (${team2over})</p>`
        match4Status.innerText = status;
    }

    fourthMatchRender(data);

}

let data = localStorage.getItem("data");
const loginPage = document.getElementById("user-login");

loginPage.addEventListener("click",()=>{
    if(data == "yes"){
        window.location.href="index2.html";
    }
    else{
        window.location.href="index1.html";
    }
})




















