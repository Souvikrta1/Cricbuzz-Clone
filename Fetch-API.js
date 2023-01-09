window.onload = async () => {
    const res = await fetch("https://souvikrta1.github.io/API-TEST/db.json");
    
    const data = await res.json();

    // console.log(data.users)

data.users.forEach(ele =>{
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


//news data fetch
const centerContainer = document.querySelector(".center-container");

const result1 = await fetch("https://souvikrta1.github.io/Cricbuzz-News-API/news.json");

    let newsData = await result1.json();


    newsData.forEach(ele =>{
        centerContainer.innerHTML += ` <li class="stories-container">
        <h3>${ele["header"]}</h3>
            <img class="australia"
                src="${ele["img"]}"
                alt="">
        <a class="stories-headline" href="">${ele["headline"]}</a>
        <p class="stories-para">${ele["para"]}</p>
        <div class="score-container">
                    <p class="team1">${ele["team1"]}</p>
                    <p class="team1-runs">${ele["team1Runs"]}</p>
                    <p class="team2">${ele["team2"]}</p>
                    <p class="team2-runs">${ele["team2Runs"]}</p>
                    <p class="score-para">${ele["scorePara"]}</p>
                    <svg xmlns="${ele["svg"]}"
                        viewBox="0 0 384 512">
                        <path d="${ele["path"]}" />
                    </svg>
                </div>
        <a class="stories-extra" href="">${ele["text1"]}</a>
        <a class="stories-extra" href="">${ele["text2"]}</a>
        <a class="stories-extra" href="">${ele["text3"]}</a>
        </li>`
    })

    const scoreContainer = document.querySelectorAll(".score-container");

    scoreContainer.forEach(ele =>{
        if(ele.firstElementChild.innerHTML == ""){
            ele.style.display = "none";
        }
    })

//left-bar1 data fetch
    const result2 = await fetch("https://souvikrta1.github.io/API-TEST/left-bar1.json");

    let leftBar1 = await result2.json();


    const leftAsideContainer = document.querySelector('.l-content');

leftBar1.forEach(items=>{
    leftAsideContainer.innerHTML +=`
<a class="text" href="${items["source"]}">${items["text"]}</a>
<p class="text-time">${items["time"]}</p>
`
})

//left-bar2 data fetch

const result3 = await fetch("https://souvikrta1.github.io/API-TEST/left-bar2.json");

let leftBar2 = await result3.json();

const leftAsideContainer2 = document.querySelector('.content-2');

leftBar2.forEach(items=>{
    leftAsideContainer2.innerHTML +=`
<a class="text" href="${items["source"]}">
<img class="australia"
src="${items["img-src"]}"
alt="">
<p class="text">${items["text"]}</p>
</a>
<p class="date-time">${items["time"]}</p>
`
})

const result4 = await fetch("https://souvikrta1.github.io/API-TEST/left-bar3.json");

let leftBar3 = await result4.json();

const leftAsideContainer3 = document.querySelector('.content-3');

leftBar3.forEach(items=>{
    leftAsideContainer3.innerHTML +=`
<p class="scheduled-text">${items["scheduled-text"]}</p>
<p class="schedule-time">${items["scheduled-time"]}</p>
`
})
}
