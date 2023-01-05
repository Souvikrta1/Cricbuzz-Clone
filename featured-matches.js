
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



// // fetching API for scorecard in featured matches

// window.onload = async () => {
//     const res = await fetch("https://prakash-dey.github.io/api/crickbuzz.json");
    
//     const data = await res.json();

//     // first match data in featured matches
//     const firstMatch = document.querySelector(".first");

//     function firstMatchRender(data){
//         let matchName = data[0]["name"];
//         let team1Name = data[0]["shortName"][0];
//         let team2Name = data[0]["shortName"][1];
//         let team1Runs = data[0]["score"][0]["r"];
//         let team2Runs = data[0]["score"][1]["r"];
//         let team1Wkt = data[0]["score"][0]["w"];
//         let team2Wkt = data[0]["score"][1]["w"];
//         let team1over = data[0]["score"][0]["o"];
//         let team2over = data[0]["score"][1]["o"];
//         let status = data[0]["status"];


//         firstMatch.innerHTML += `<a class="stat-btn stat-btn1" href='https://www.cricbuzz.com/live-cricket-scorecard/60814/rsawu19-vs-indwu19-1st-t20-india-women-under-19s-tour-of-south-africa-2022-23'>
//         <p class="mobile-preview1">${matchName}</p>
//         <span>
//             <p>${team1Name}</p>
//             <p class="firstMatch-runs1">${team1Runs}-${team1Wkt} (${team1over})</p>
//         </span>
//         <span>
//             <p>${team2Name}</p>
//             <p class="firstMatch-runs2">${team2Runs}-${team2Wkt} (${team2over})</p>
//         </span>
//         <p class="match1-status">${status}</p>
//     </a>
//     <a class="fantasy" href='https://www.cricbuzz.com/cricket-fantasy-handbook/56969/ind-vs-ban-1st-test-india-tour-of-bangladesh-2022#!/expert-picks'><i class="fa-solid fa-trophy" ></i> Fantasy Handbook</button>`
//     }

//     firstMatchRender(data);

//     // second match data in featured matches

//     const secondMatch = document.querySelector(".second");

//     function secondMatchRender(data){
//         let matchName = data[1]["name"];
//         let team1Name = data[1]["shortName"][0];
//         let team2Name = data[1]["shortName"][1];
//         let team1Runs = data[1]["score"][0]["r"];
//         let team2Runs = data[1]["score"][1]["r"];
//         let team1Wkt = data[1]["score"][0]["w"];
//         let team2Wkt = data[1]["score"][1]["w"];
//         let team1over = data[1]["score"][0]["o"];
//         let team2over = data[1]["score"][1]["o"];
//         let status = data[1]["status"];


//         secondMatch.innerHTML = `<a class="stat-btn stat-btn2" href='https://www.cricbuzz.com/cricket-scores/57545/nep-vs-nam-2nd-match-icc-cricket-world-cup-league-two-2019-23'>
//         <p class="mobile-preview2">${matchName}</p>
//         <span>
//             <p>${team1Name}</p>
//             <p class="secondMatch-runs1">${team1Runs}-${team1Wkt} (${team1over})</p>
//         </span>
//         <span>
//             <p>${team2Name}</p>
//             <p class="secondMatch-runs2">${team2Runs}-${team2Wkt} (${team2over})</p>
//         </span>
//         <p class="match1-status">${status}</p>
//     </a>`
//     }

//     secondMatchRender(data);

//     // Third Match data 

//     const thirdMatch = document.querySelector(".third");

//     function thirdMatchRender(data){
//         let matchName = data[2]["name"];
//         let team1Name = data[2]["shortName"][0];
//         let team2Name = data[2]["shortName"][1];
//         let team1Runs = data[2]["score"][0]["r"];
//         let team2Runs = data[2]["score"][1]["r"];
//         let team1Wkt = data[2]["score"][0]["w"];
//         let team2Wkt = data[2]["score"][1]["w"];
//         let team1over = data[2]["score"][0]["o"];
//         let team2over = data[2]["score"][1]["o"];
//         let status = data[2]["status"];


//         thirdMatch.innerHTML = `<a class="stat-btn stat-btn3" href='https://www.cricbuzz.com/cricket-scores/58651/nga-vs-tan-23rd-match-icc-mens-t20-world-cup-sub-regional-africa-qualifier-b-2022'>
//         <p class="mobile-preview2">${matchName}</p>
//         <span>
//             <p>${team1Name}</p>
//             <p class="thirdMatch-runs1">${team1Runs}-${team1Wkt} (${team1over})</p>
//         </span>
//         <span>
//             <p>${team2Name}</p>
//             <p class="thirdMatch-runs2">${team2Runs}-${team2Wkt} (${team2over})</p>
//         </span>
//         <p class="match1-status">${status}</p>
//     </a>`
//     }
//     thirdMatchRender(data);

//     // fourth match data

//     const mobilePreview = document.getElementById("fourth-match");
//     const team1Data = document.getElementById("team-1");
//     const team2Data = document.getElementById("team-2");
//     const match4Status = document.querySelector(".match4-status")

//     function fourthMatchRender(data){
//         let matchName = data[4]["name"];
//         let team1Name = data[4]["shortName"][0];
//         let team2Name = data[4]["shortName"][1];
//         let team1Runs = data[4]["score"][0]["r"];
//         let team2Runs = data[4]["score"][1]["r"];
//         let team1Wkt = data[4]["score"][0]["w"];
//         let team2Wkt = data[4]["score"][1]["w"];
//         let team1over = data[4]["score"][0]["o"];
//         let team2over = data[4]["score"][1]["o"];
//         let status = data[4]["status"];

//         mobilePreview.innerText = matchName;
//         team1Data.innerHTML = `<p>${team1Name}</p>
//         <p class="fourthMatch-runs1">${team1Runs}-${team1Wkt} (${team1over})</p>`
//         team2Data.innerHTML = `<p>${team2Name}</p>
//         <p class="thirdMatch-runs2">${team2Runs}-${team2Wkt} (${team2over})</p>`
//         match4Status.innerText = status;
//     }

//     fourthMatchRender(data);

// }

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

let matchData = [
    {
        matchName : "1st T20I . Sri Lanka Tour of India",
        team1 : "IND",
        team2 : "SL",
        team1Runs: "162",
        team2Runs: "160",
        team1Wkt : "5",
        team2Wkt : "10",
        team1Ovr : "20",
        team2Ovr : "20",
        status : "India won by 2 runs",
        url : "https://www.cricbuzz.com/live-cricket-scores/59951/ind-vs-sl-1st-t20i-sri-lanka-tour-of-india-2023"
    },
    {
        matchName : "29th Match . Big Bash League 2022-23",
        team1 : "PRS",
        team2 : "SYT",
        team1Runs: "142",
        team2Runs: "143",
        team1Wkt : "9",
        team2Wkt : "4",
        team1Ovr : "20",
        team2Ovr : "17",
        status : "Sydney Thunder won by 6 wkts",
        url : "https://www.cricbuzz.com/live-cricket-scores/50524/prs-vs-syt-29th-match-big-bash-league-2022-23"
    },
    {
        matchName : "2nd ODI . South Africa Tour Of Australia 2022-23",
        team1 : "RSA",
        team2 : "AUS",
        team1Runs: "327",
        team2Runs: "329",
        team1Wkt : "7",
        team2Wkt : "4",
        team1Ovr : "50",
        team2Ovr : "48.5",
        status : "Australia won by 6 wkts",
        url : ""
    },
    {
        matchName : "27th Match . Big Bash League 2022-23",
        team1 : "MLR",
        team2 : "MLS",
        team1Runs: "141",
        team2Runs: "108",
        team1Wkt : "7",
        team2Wkt : "9",
        team1Ovr : "20",
        team2Ovr : "20",
        status : "Renegades won by 33 runs",
        url : "https://www.cricbuzz.com/live-cricket-scores/50517/mlr-vs-mls-27th-match-big-bash-league-2022-23"
    }
]

matchData.forEach(ele =>{
    statpage1.innerHTML += `
        <div class="featured-scorecard">
        <a class="stat-btn" href='${ele.url}'>
            <p class="mobile-preview1">${ele.matchName}</p>
            <span>
            <p class="team-name">${ele.team1}</p>
            <p class="firstMatch-runs1">${ele.team1Runs}-${ele.team1Wkt} (${ele.team1Ovr})</p>
            </span>
            <span>
                <p class="team-name">${ele.team2}</p>
                <p class="firstMatch-runs2">${ele.team2Runs}-${ele.team2Wkt} (${ele.team2Ovr})</p>
            </span>
            <p class="match1-status">${ele.status}</p>
        </a>
        <a class="${ele.team1} ${ele.team2} hideFantasy" href="https://www.cricbuzz.com/cricket-fantasy-handbook/59958/ind-vs-sl-2nd-t20i-sri-lanka-tour-of-india-2023#!/expert-picks"><i class="fa-solid fa-trophy"></i> Fantasy Handbook</a>
        </div>    
    `

})

const fantasyChecker = document.querySelectorAll(".hideFantasy");

fantasyChecker.forEach(ele =>{
    if(ele.classList.contains("IND")){
        ele.style.display = "block"
    }
})



















