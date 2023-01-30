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