function flattenObject(obj) {
    let flattened = {};
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            let flatObject = flattenObject(obj[key]);
            Object.keys(flatObject).forEach(flatKey => {
                flattened[`${key}.${flatKey}`] = flatObject[flatKey];
            });
        } else {
            flattened[key] = obj[key];
        }
    });
    return flattened;
}

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '465d02ebdbmsh8859bf30ed29208p104b34jsn95aefa986ee1',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };

const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a615df442bmsh6e75e1cec7012d8p11c828jsn840129996a7a',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

window.onload = async () => {
    //news data fetch
    const centerContainer = document.querySelector(".center-container");

    const result1 = await fetch("https://souvikrta1.github.io/Cricbuzz-News-API/news.json");

    let newsData = await result1.json();
    newsData.forEach(ele => {
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

    scoreContainer.forEach(ele => {
        if (ele.firstElementChild.innerHTML == "") {
            ele.style.display = "none";
        }
    })

    //left-bar1 data fetch
    const result2 = await fetch("https://souvikrta1.github.io/API-TEST/left-bar1.json");

    let leftBar1 = await result2.json();


    const leftAsideContainer = document.querySelector('.l-content');

    leftBar1.forEach(items => {
        leftAsideContainer.innerHTML += `
    <a class="text" href="${items["source"]}">${items["text"]}</a>
    <p class="text-time">${items["time"]}</p>
    `
    })

    //left-bar2 data fetch

    const result3 = await fetch("https://souvikrta1.github.io/API-TEST/left-bar2.json");

    let leftBar2 = await result3.json();

    const leftAsideContainer2 = document.querySelector('.content-2');

    leftBar2.forEach(items => {
        leftAsideContainer2.innerHTML += `
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

    leftBar3.forEach(items => {
        leftAsideContainer3.innerHTML += `
    <p class="scheduled-text">${items["scheduled-text"]}</p>
    <p class="schedule-time">${items["scheduled-time"]}</p>
    `
    })

    let counter = [0, 2];

    let rawData = await fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live', options);

    let data = await rawData.json();

    let cricData = flattenObject(data);

    

    console.log(cricData[`typeMatches.0.seriesMatches.${counter[0]}.seriesAdWrapper.matches.0.matchInfo.seriesName`])

    counter.forEach((ele, index) => {
        if (index <= 2) {
            statpage1.innerHTML += `
                <div class="featured-scorecard">
                <a class="stat-btn" href='https://www.cricbuzz.com/cricket-match/live-scores/recent-matches'>
                    <p class="mobile-preview1">${cricData[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchInfo.seriesName`]}</p>
                    <span>
                    <p class="team-name">${cricData[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchInfo.team1.teamSName`]}</p>
                    <p class="firstMatch-runs1">${cricData[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchScore.team1Score.inngs1.runs`]}-${cricData[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchScore.team1Score.inngs1.wickets`]} (${cricData[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchScore.team1Score.inngs1.overs`]})</p>
                    </span>
                    <span>
                        <p class="team-name">${cricData[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchInfo.team2.teamSName`]}</p>
                        <p class="firstMatch-runs2">${cricData[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchScore.team2Score.inngs1.runs`]}-${cricData[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchScore.team2Score.inngs1.wickets`]} (${cricData[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchScore.team2Score.inngs1.overs`]})</p>
                    </span>
                    <p class="match1-status">${cricData[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchInfo.status`]}</p>
                </a>
                <a class="${cricData[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchInfo.team1.teamSName`]} ${cricData[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchInfo.team2.teamSName`]} hideFantasy" href="https://www.cricbuzz.com/cricket-fantasy-handbook/59958/ind-vs-sl-2nd-t20i-sri-lanka-tour-of-india-2023#!/expert-picks"><i class="fa-solid fa-trophy"></i> Fantasy Handbook</a>
                </div>    
            `
            const runs1 = document.querySelectorAll(".firstMatch-runs1");
            const runs2 = document.querySelectorAll(".firstMatch-runs2");

            runs1.forEach(ele => {
                if (ele.innerText.includes("undefined")) {
                    ele.innerText = ""
                }
            })
            runs2.forEach(ele => {
                if (ele.innerText.includes("undefined")) {
                    ele.innerText = ""
                }
            })
            const fantasyChecker = document.querySelectorAll(".hideFantasy");

            fantasyChecker.forEach(ele => {
                if (ele.classList.contains("IND")) {
                    ele.style.display = "block";
                }
            })
        }
    })

    let rawData2 = await fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', options);

    let data2 = await rawData2.json();

    let cricData2 = flattenObject(data2);

    

    console.log(cricData[`typeMatches.0.seriesMatches.${counter[0]}.seriesAdWrapper.matches.0.matchInfo.seriesName`])

    counter.forEach((ele, index) => {
        if (index <= 2) {
            statpage1.innerHTML += `
                <div class="featured-scorecard">
                <a class="stat-btn" href='https://www.cricbuzz.com/cricket-match/live-scores/recent-matches'>
                    <p class="mobile-preview1">${cricData2[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchInfo.seriesName`]}</p>
                    <span>
                    <p class="team-name">${cricData2[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchInfo.team1.teamSName`]}</p>
                    <p class="firstMatch-runs1">${cricData2[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchScore.team1Score.inngs1.runs`]}-${cricData2[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchScore.team1Score.inngs1.wickets`]} (${cricData2[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchScore.team1Score.inngs1.overs`]})</p>
                    </span>
                    <span>
                        <p class="team-name">${cricData2[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchInfo.team2.teamSName`]}</p>
                        <p class="firstMatch-runs2">${cricData2[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchScore.team2Score.inngs1.runs`]}-${cricData2[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchScore.team2Score.inngs1.wickets`]} (${cricData2[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchScore.team2Score.inngs1.overs`]})</p>
                    </span>
                    <p class="match1-status">${cricData2[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchInfo.status`]}</p>
                </a>
                <a class="${cricData2[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchInfo.team1.teamSName`]} ${cricData2[`typeMatches.0.seriesMatches.${ele}.seriesAdWrapper.matches.0.matchInfo.team2.teamSName`]} hideFantasy" href="https://www.cricbuzz.com/cricket-fantasy-handbook/59958/ind-vs-sl-2nd-t20i-sri-lanka-tour-of-india-2023#!/expert-picks"><i class="fa-solid fa-trophy"></i> Fantasy Handbook</a>
                </div>    
            `
            const runs1 = document.querySelectorAll(".firstMatch-runs1");
            const runs2 = document.querySelectorAll(".firstMatch-runs2");

            runs1.forEach(ele => {
                if (ele.innerText.includes("undefined")) {
                    ele.innerText = ""
                }
            })
            runs2.forEach(ele => {
                if (ele.innerText.includes("undefined")) {
                    ele.innerText = ""
                }
            })
            const fantasyChecker = document.querySelectorAll(".hideFantasy");

            fantasyChecker.forEach(ele => {
                if (ele.classList.contains("IND")) {
                    ele.style.display = "block";
                }
            })
        }
    })
}