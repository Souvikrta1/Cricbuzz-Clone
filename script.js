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
})

// newsDrop event listeners
newsDrop.addEventListener("mousemove", () => {
    newsDrop.style.display = "flex"
})

newsDrop.addEventListener("mouseout", () => {
    newsDrop.style.display = "none"
})

//seriesDrop event listeners
seriesDrop.addEventListener("mousemove", () => {
    seriesDrop.style.display = "flex"
})

seriesDrop.addEventListener("mouseout", () => {
    seriesDrop.style.display = "none"
})

//teams drop event listeners 
teamsDrop.addEventListener("mousemove", () => {
    teamsDrop.style.display = "flex"
})

teamsDrop.addEventListener("mouseout", () => {
    teamsDrop.style.display = "none"
})

//videoDrop event listeners
videoDrop.addEventListener("mousemove", () => {
    videoDrop.style.display = "flex"
})

videoDrop.addEventListener("mouseout", () => {
    videoDrop.style.display = "none"
})

// rankingDrop event listeners
rankingDrop.addEventListener("mousemove", () => {
    rankingDrop.style.display = "flex"
})

rankingDrop.addEventListener("mouseout", () => {
    rankingDrop.style.display = "none"
})

//moreDrop event listeners
moreDrop.addEventListener("mousemove", () => {
    moreDrop.style.display = "flex"
})

moreDrop.addEventListener("mouseout", () => {
    moreDrop.style.display = "none"
})



// mouseout feature on user go out of the dropdown
bodyDiv.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("news")) {
        newsDrop.style.display = "none"
    }
    if (!e.target.classList.contains("series")) {
        seriesDrop.style.display = "none"
    }
    if (!e.target.classList.contains("teams")) {
        teamsDrop.style.display = "none"
    }
    if (!e.target.classList.contains("videos")) {
        videoDrop.style.display = "none"
    }
    if (!e.target.classList.contains("rankings")) {
        rankingDrop.style.display = "none"
    }
    if (!e.target.classList.contains("more")) {
        moreDrop.style.display = "none"
    }
})


// search features
search.addEventListener("click", () => {
    menuDiv.style.animation = "coming 0.25s";
    searchArea.style.animation = "going 0.25s"
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
const ads = ["https://www.drivespark.com/img/2018/11/maruti-ertiga-tvc-video-varun-dhawan-advertisement1-1542887535.jpg", "https://i.ytimg.com/vi/qCoJpymgSxc/maxresdefault.jpg", "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c46d0ba1-3fb8-4eb1-8ae7-4a71501b1306.__CR0,0,970,600_PT0_SX970_V1___.jpg", "https://etimg.etb2bimg.com/photo/89201899.cms", "https://www.adweek.com/wp-content/uploads/files/blogs/frooti-hed-2015.jpg", "https://gumlet.assettype.com/afaqs%2F2022-04%2F7600931c-19e1-4ec0-80fc-627ed633b091%2Fdolly1.jpg?rect=0%2C33%2C800%2C450&format=webp&w=400&dpr=2.6", "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/men%60s-footwear-ads-design-template-78776ad26b8e10c9d0bc3346500a0792_screen.jpg?ts=1660293293", "https://stock.intellemo.com/624190a2a4d580fea3b730e2/62418fd438732c17450a8eae-v1/men_s_sport_shoes_l.jpg", "https://en.pimg.jp/062/561/746/1/62561746.jpg", "https://previews.123rf.com/images/hstrongart/hstrongart1701/hstrongart170100151/69269523-mouth-rinse-ads-refreshing-mouthwash-products-with-mints-leaves-and-splashing-liquids-in-3d-illustra.jpg"]
const show = document.querySelector(".show-ad");
setInterval(() => {
    var randomAds = ads[Math.floor(Math.random() * ads.length)];
    show.innerHTML = "";
    show.innerHTML = `<img class="ads" src="${randomAds}"></img>`
}, 7000);
//video features
const videos = document.querySelectorAll('.videos');
for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener('mouseover', function(){
        videos[i].play();
    })
    videos[i].addEventListener('mouseout', function(){
        videos[i].pause();
    })
}
// let clip=document.querySelector(".videos")
// clip.addEventListener('mouseover',function(e){
//     clip.play();
// })