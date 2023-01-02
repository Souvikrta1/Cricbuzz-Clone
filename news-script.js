let news = [
    {"header":"INDIA TOUR OF BANGLADESH, 2022",
    "img" : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c251246/injured-rohit-sharma-to-miss-d.jpg",
    "headline" : "Injured Rohit Sharma to miss Dhaka Test",
    "para":"The regular Indian captain's finger injury hasn't healed completely; KL Rahul will continue to lead the visitors",
    "text1": "Bangladesh include Nasum Ahmed for Dhaka Test",
    "text2": "One bad session with the bat destroyed our chances: Domingo",
    "text3": "Domingo Rahul chuffed with India's intensity in Chattogram victory",
    "team1" : "",
    "team2" : "",
    "team1Runs" : "",
    "team2Runs" : "",
    "scorePara" : "",
    "svg" : "",
    "path" : ""},



    {"header":"PAK VS ENG, 3RD TEST",
    "img" : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c251248/rehan-fifer-bundles-out-pak.jpg",
    "headline" : "Rehan fifer bundles out PAK",
    "para" : "",
    "text1": "Earlier, Babar and Shakeel stroked fifties",
    "text2": "One bad session with the bat destroyed our chances: Domingo",
    "text3": "Domingo Rahul chuffed with India's intensity in Chattogram victory",
    "team1" : "ENG",
    "team2" : "PAK",
    "team1Runs" : "354 , 59-0 (6.2)",
    "team2Runs" : "304 , 216",
    "scorePara" : "Day 3: 3rd Session - England need 108 runs",
    "svg" : "http://www.w3.org/2000/svg",
    "path" : "M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"},

    {"header" : "AUS VS RSA, 1ST TEST",
    "img" : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c251205/pacers-propel-australia-to-1-0.jpg",
    "headline" : "Pacers propel Australia to 1-0 lead inside two days",
    "para" : "",
    "text1" : "",
    "text2" : "Australia wrap up Brisbane Test in less than two days",
    "text3" : "Umpires ignored questions about Gabba pitch - Dean Elgar",
    "team1" : "AUS",
    "team2" : "RSA",
    "team1Runs" : "218 , 35-4 (7.5)",
    "team2Runs" : "152 , 99",
    "scorePara" : "Australia lead by 1 - 0",
    "svg" : "http://www.w3.org/2000/svg",
    "path" : "M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"},

    {"header" : "NEW ZEALAND TOUR OF PAKISTAN AND INDIA",
    "img" : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c251243/kane-williamson-gary-stead-to.jpg",
    "headline" : "Kane Williamson, Gary Stead to skip India tour",
    "para" : "Uncapped allrounder Henry Shipley has earned a maiden call-up to the ODI squad for both the Pakistan and India series after impressing in the domestic circuit",
    "text1" : "",
    "text2" : "Mark Chapman earns first NZC central contract",
    "text3" : "" ,
    "team1" : "",
    "team2" : "",
    "team1Runs" : "",
    "team2Runs" : "",
    "scorePara" : "",
    "svg" : "",
    "path" : ""},

    {"header" : "AUSTRALIA WOMEN TOUR OF INDIA",
    "img" : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c251068/richa-ghosh-cameo-in-vain-as-a.jpg",
    "headline" : "Richa Ghosh cameo in vain as Australia clinch series",
    "para" : "Richa Ghosh's thrilling cameo went in vain as India fell short again to lose the fourth T20I",
    "text1" : "Australia Won the 4th Match & The Series",
    "text2" : "",
    "text3" : "",
    "team1" : "",
    "team2" : "",
    "team1Runs" : "",
    "team2Runs" : "",
    "scorePara" : "",
    "svg" : "",
    "path" : ""},

    {"header" : "DIALOGUE ROOM",
    "img" : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c250653/the-dean-elgar-enigma.jpg",
    "headline" : "The Dean Elgar enigma",
    "para" : "A guarded extrovert. An old school modern thinker. A sensitive, tough, straight-shooter who is alive to cultural nuance. South Africa's captain opens up in an unguarded interview",
    "text1" : "",
    "text2" : "",
    "text3" : "",
    "team1" : "",
    "team2" : "",
    "team1Runs" : "",
    "team2Runs" : "",
    "scorePara" : "",
    "svg" : "",
    "path" : ""},

    {"header" : "DIALOGUE ROOM",
    "img" : "https://www.cricbuzz.com/a/img/v1/420x235/i1/c250228/how-anrich-nortje-is-releasing.jpg",
    "headline" : "How Anrich Nortje is releasing the fear factor",
    "para" : "South Africa's fastest bowler is reaching his peak. Anrich Nortje explains how an improved action gives him confidence that he can get even quicker",
    "text1" : "",
    "text2" : "",
    "text3" : "" ,
    "team1" : "",
    "team2" : "",
    "team1Runs" : "",
    "team2Runs" : "",
    "scorePara" : "",
    "svg" : "",
    "path" : ""}
]

const centerContainer = document.querySelector(".center-container");


    news.forEach(ele =>{
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

