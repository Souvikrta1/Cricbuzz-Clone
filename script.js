const menuBtn = document.querySelectorAll(".line1-btn");
const newsDrop = document.querySelector(".news-drop");
const seriesDrop = document.querySelector(".series-drop");
const statpage1 = document.getElementById("stat-page1");
const statpage2 = document.getElementById("stat-page2");
const slideToRight = document.getElementById("slide-right");
const slideToLeft = document.getElementById("slide-left");


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


menuBtn.forEach(ele =>{
    ele.addEventListener('mouseover',(e)=>{
        ele.style.background = "yellowgreen";
    })
    ele.addEventListener('mouseout',(e)=>{
        ele.style.background = "initial";
    })

    if(ele.classList.contains("news")){
        newsDropdown(ele);
    }
    if(ele.classList.contains("series")){
        seriesDropdown(ele);
    }
})

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