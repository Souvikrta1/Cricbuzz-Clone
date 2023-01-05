let leftContent = [
    {
        "header": "LATEST NEWS",
        "source": "https://www.cricbuzz.com/cricket-news/124871/focus-was-on-being-patient-mhambrey-on-indias-bowling",
        "text": "'Focus was on being patient' - Mhambrey on India's bowling",
        "time": "1h ago"
    },
    {
        "source": "https://www.cricbuzz.com/cricket-news/124871/focus-was-on-being-patient-mhambrey-on-indias-bowling",
        "text": "All I wanted was to bat long - Zakir Hasan on debut ton",
        "time": "1h ago"
    },
    {
        "source": "https://www.cricbuzz.com/cricket-news/124871/focus-was-on-being-patient-mhambrey-on-indias-bowling",
        "text": "Zimbabwe boys in Mumbai with an eye on Sri Lanka",
        "time": "1h ago"
    },
    {
        "source": "https://www.cricbuzz.com/cricket-news/124871/focus-was-on-being-patient-mhambrey-on-indias-bowling",
        "text": "Didn't feel much pressure as I have been with the team regularly: Kuldeep",
        "time": "1h ago"
    },
    {
        "source": "https://www.cricbuzz.com/cricket-news/124871/focus-was-on-being-patient-mhambrey-on-indias-bowling",
        "text": "Didn't feel much pressure as I have been with the team regularly: Kuldeep",
        "time": "1h ago"
    },
    {
        "source": "https://www.cricbuzz.com/cricket-news/124871/focus-was-on-being-patient-mhambrey-on-indias-bowling",
        "text": "Injuries add to Bangladesh's woes in first Test against India",
        "time": "1h ago"
    },
    {
        "source": "https://www.cricbuzz.com/cricket-news/124871/focus-was-on-being-patient-mhambrey-on-indias-bowling",
        "text": "Azhar Ali to retire from Tests after England series",
        "time": "1h ago"
    },
    {
        "source": "https://www.cricbuzz.com/cricket-news/124871/focus-was-on-being-patient-mhambrey-on-indias-bowling",
        "text": "Hasaranga, Miller, Hales and Rajapaksa among star players picked in PSL draft",
        "time": "1h ago"
    },
    {
        "source": "https://www.cricbuzz.com/cricket-news/124871/focus-was-on-being-patient-mhambrey-on-indias-bowling",
        "text": "Not about technique but decision making - Herath on Bangladesh's Test woes",
        "time": "1h ago"
    },
    {
        "source": "https://www.cricbuzz.com/cricket-news/124871/focus-was-on-being-patient-mhambrey-on-indias-bowling",
        "text": "I trust wobble seam because I get success from it - Siraj",
        "time": "1h ago"
    },
    {
        "source": "https://www.cricbuzz.com/cricket-news/124871/focus-was-on-being-patient-mhambrey-on-indias-bowling",
        "text": "Ish Sodhi returns to New Zealand squad for Pakistan Tests",
        "time": "1h ago"
    }
]
const leftAsideContainer = document.querySelector('.l-content');
leftContent.forEach(items=>{
    leftAsideContainer.innerHTML +=`
<a class="text" href="${items["source"]}">${items["text"]}</a>
<p class="text-time">${items["time"]}</p>
`
})


let leftContent2 = [
    {
        "source": "https://www.cricbuzz.com/cricket-gallery/5560/pakistan-vs-england-3rd-test-day-2-karachi",
        "img-src":"https://www.cricbuzz.com/a/img/v1/165x95/i1/c251237/pakistan-vs-england-3rd-test.jpg",
        "text": "Pakistan vs England, 3rd Test, Day 2, Karachi",
        "time": "Sun, Dec 18 2022"
    },
    {
        "source": "https://www.cricbuzz.com/cricket-gallery/5560/pakistan-vs-england-3rd-test-day-2-karachi",
        "img-src":"https://www.cricbuzz.com/a/img/v1/165x95/i1/c251215/australia-vs-south-africa-1st.jpg",
        "text": "Australia vs South Africa, 1st Test, Day 2, Brisbane",
        "time": "Sun, Dec 18 2022"
    },
    {
        "source": "https://www.cricbuzz.com/cricket-gallery/5560/pakistan-vs-england-3rd-test-day-2-karachi",
        "img-src":"https://www.cricbuzz.com/a/img/v1/165x95/i1/c251102/bangladesh-vs-india-1st-test.jpg",
        "text": "Bangladesh vs India, 1st Test, Day 4, Chattogram",
        "time": "Sun, Dec 18 2022"
    },
    {
        "source": "https://www.cricbuzz.com/cricket-gallery/5560/pakistan-vs-england-3rd-test-day-2-karachi",
        "img-src":"https://www.cricbuzz.com/a/img/v1/165x95/i1/c251058/pakistan-vs-england-3rd-test.jpg",
        "text": "Pakistan vs England, 3rd Test, Day 2, Karachi",
        "time": "Sat, Dec 17 2022"
    },
    {
        "source": "https://www.cricbuzz.com/cricket-gallery/5560/pakistan-vs-england-3rd-test-day-2-karachi",
        "img-src":"https://www.cricbuzz.com/a/img/v1/165x95/i1/c250958/australia-vs-south-africa-1st.jpg",
        "text": "Pakistan vs England, 3rd Test, Day 2, Karachi",
        "time": "Sat, Dec 17 2022"
    },
    {
        "source":  "https://www.cricbuzz.com/cricket-gallery/5560/pakistan-vs-england-3rd-test-day-2-karachi",
        "img-src":"https://www.cricbuzz.com/a/img/v1/165x95/i1/c250793/bangladesh-vs-india-1st-test.jpg",
        "text": "Australia vs South Africa, 1st Test, Day 1, Brisbane",
        "time": "Sat, Dec 17 2022"
    },
    {
        "source": "https://www.cricbuzz.com/cricket-gallery/5560/pakistan-vs-england-3rd-test-day-2-karachi",
        "img-src":"https://www.cricbuzz.com/a/img/v1/165x95/i1/c251102/bangladesh-vs-india-1st-test.jpg",
        "text": "Bangladesh vs India, 1st Test, Day 3, Chattogram",
        "time": "Fri, Dec 16 2022"
    }
]

const leftAsideContainer2 = document.querySelector('.content-2');
leftContent2.forEach(items=>{
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


let leftContent3 = [
    {
        "scheduled-text": "Malaysia vs Singapore, 6th Match",
        "scheduled-time": "Sun Dec 18 • 11:30 AM GMT"
    },
    {
        "scheduled-text": "Pakistan vs England, 3rd Test, Day 2",
        "scheduled-time": "Sun Dec 18 • 10:30 AM GMT"
    },
    {
        "scheduled-text": "Tanzania vs Uganda, 9th Match",
        "scheduled-time": "Sun Dec 18 • 1:00 PM GMT"
    },
    {
        "scheduled-text": "Rwanda vs Tanzania, 10th Match",
        "scheduled-time": "Sun Dec 18 • 5:15 PM GMT"
    },
    {
        "scheduled-text": "Qatar vs Singapore, 7th Match",
        "scheduled-time": "Mon Dec 19 • 7:00 AM GMT"
    },
    {
        "scheduled-text": "Malaysia vs Bahrain, 8th Match",
        "scheduled-time": "Mon Dec 19 • 11:30 AM GMT"
    },
    {
        "scheduled-text": "Pakistan vs England, 3rd Test, Day 3",
        "scheduled-time": "Mon Dec 19 • 10:30 AM GMT"
    },
    {
        "scheduled-text": "Tanzania vs Uganda, 11th Match",
        "scheduled-time": "Mon Dec 19 • 1:00 PM GMT"
    },
    {
        "scheduled-text": "Rwanda vs Tanzania, 12th Match",
        "scheduled-time": "Mon Dec 19 • 5:15 PM GMT"
    },
    {
        "scheduled-text": "Pakistan vs England, 3rd Test, Day 4",
        "scheduled-time": "Tue Dec 20 • 10:30 AM GMT"
    },
    {
        "scheduled-text": "Rwanda vs Tanzania, 13th Match",
        "scheduled-time": "Tue Dec 20 • 1:00 PM GMT"
    },
    {
        "scheduled-text": "Rwanda vs Uganda, 14th Match",
        "scheduled-time": "Tue Dec 20 • 5:15 PM GMT"
    },
    {
        "scheduled-text": "Bahrain vs Singapore, 9th Match",
        "scheduled-time": "Wed Dec 21 • 7:00 PM GMT"
    },
    {
        "scheduled-text": ">Malaysia vs Qatar, 10th Match",
        "scheduled-time": "Wed Dec 21 • 11:30 AM GMT"
    },
    {
        "scheduled-text": "Pakistan vs England, 3rd Test, Day 5",
        "scheduled-time": "Wed Dec 21 • 10:30 AM GMT"
    },
    {
        "scheduled-text": "Bangladesh vs India, 2nd Test, Day 1",
        "scheduled-time": "Thur Dec 22 • 9:00 AM GMT"
    },
    {
        "scheduled-text": "Malaysia vs Singapore, 11th Match",
        "scheduled-time": "Thur Dec 22 • 7:00 AM GMT"
    },
    {
        "scheduled-text": "Bahrain vs Qatar, 12th Match",
        "scheduled-time": "Thur Dec 22 • 11:30 AM GMT"
    },
    {
        "scheduled-text": "Rwanda vs Tanzania, 15th Match",
        "scheduled-time": "Thur Dec 22 • 1:00 PM GMT"
    }
]
const leftAsideContainer3 = document.querySelector('.content-3');
leftContent3.forEach(items=>{
    leftAsideContainer3.innerHTML +=`
<p class="scheduled-text">${items["scheduled-text"]}</p>
<p class="schedule-time">${items["scheduled-time"]}</p>
`
})


