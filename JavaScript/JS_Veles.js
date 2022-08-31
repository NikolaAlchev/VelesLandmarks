let bg2 = document.getElementById('background2');
let bg3 = document.getElementById('background3');
let bg4 = document.getElementById('background4');
let title = document.getElementById('title');
let nav = document.getElementById('navigation-bar');
let flag1 = document.getElementById('flag-button-1');
let flag2 = document.getElementById('flag-button-2');
let search1 = document.getElementById('search-button-1');
let search2 = document.getElementById('search-button-2');
let searchBar = document.getElementById("search");
let flagMenu = document.getElementById("menu-flags");
let flagMenuDisplay = document.getElementById("menu-flags-display");
let text = document.getElementsByClassName('text-element');
let shade1 = document.getElementsByClassName('shade-1');
let shade2 = document.getElementsByClassName('shade-2');
let textOpacity = document.getElementsByClassName('text-element-opacity');
let audios = document.getElementsByTagName('audio');
let hamburgerMenu = document.getElementById('hamburger-menu');
let hamburgerShadow = document.getElementById('hamburger-menu-shadow');
let hotelPreview = document.getElementsByClassName('hotel-preview');
let hotelPreviewOpacity = document.getElementsByClassName('hotel-preview-opacity');
/* ///////////////////////////////////////////// Parallax effect ///////////////////////////////////////////// */
window.addEventListener('scroll', function (){
    let n = window.scrollY;
    let w = innerWidth;
    bg2.style.top = n * 0.2 + 'px';
    bg3.style.top = n * 0.4 + 'px';
    bg4.style.top = n * 0.45 + 'px';
    if(n > innerHeight){
        bg2.style.display = 'none';
        bg3.style.display = 'none';
        bg4.style.display = 'none';
        title.style.display = 'none';
    }
    else{
        bg2.style.display = 'inline-block';
        bg3.style.display = 'inline-block';
        bg4.style.display = 'inline-block';
        title.style.display = 'inline-block';
    }
    if(w < 700){
        title.style.top = (innerHeight / 2.56) + n * 0.38 + 'px';
    }
    else{
        if(w < 1200){
            title.style.top = (innerHeight / 2.70) + n * 0.38 + 'px';
        }
        else{
            title.style.top = (innerHeight / 2.85) + n * 0.3 + 'px';
        }
    }
})
/* ///////////////////////////////////////////// Navigation bar color change ///////////////////////////////////////////// */
window.addEventListener("load", function () {
    let n = window.scrollY;
    if(n > (innerHeight * 0.5)) {
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
})
window.addEventListener("scroll", function () {
    let n = window.scrollY;
    if(n > (innerHeight * 0.5)) {
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
})
/* ///////////////////////////////////////////// Search bar appear and disappear on click ///////////////////////////////////////////// */
function searchDisappear() {
    flag1.style.display = 'flex';
    flag2.style.display = 'none';
    search1.style.display = 'inline-block';
    search2.style.display = 'none';
    searchBar.style.width =  '0';
    searchBar.style.marginLeft =  '0';
    searchBar.style.marginRight =  '0';
    searchBar.style.paddingLeft =  '0';
    flagMenu.style.right =  '78.5px';
    flagMenu.style.opacity =  '0';
    flagMenu.style.transition =  'opacity 0s';
    flagMenu.style.border =  'none';
    flagMenuDisplay.style.display = 'none';
}
function searchAppear() {
    flag1.style.display = 'flex';
    flag2.style.display = 'none';
    search1.style.display = 'none';
    search2.style.display = 'inline-block';
    searchBar.style.width =  '150px';
    searchBar.style.marginLeft =  '10px';
    searchBar.style.marginRight =  '5px';
    searchBar.style.paddingLeft =  '10px';
    flagMenu.style.right =  '245.5px';
    flagMenu.style.opacity =  '0';
    flagMenu.style.transition =  'opacity 0s';
    flagMenu.style.border =  'none';
    flagMenuDisplay.style.display = 'none';
}
/* ///////////////////////////////////////////// Flag menu appear and disappear on click ///////////////////////////////////////////// */
function flagDisappear() {
    flag1.style.display = 'flex';
    flag2.style.display = 'none';
    flagMenu.style.opacity =  '0';
    flagMenu.style.transition =  'opacity .3s';
    flagMenu.style.border =  'none';
    flagMenuDisplay.style.display = 'none';
}
function flagAppear() {
    flag1.style.display = 'none';
    flag2.style.display = 'flex';
    flagMenu.style.opacity =  '1';
    flagMenu.style.transition =  'opacity .3s';
    flagMenu.style.border =  '2px solid #f8f8f8';
    flagMenuDisplay.style.display = 'inline-block';
}
/* ///////////////////////////////////////////// Arrow scrolling ///////////////////////////////////////////// */
function leftScroll() {
    let h = innerHeight;
    let left = document.querySelector(".scroll-container");
    if(h <= 570){
        left.scrollBy(240, 0);
    }else
    if(h <= 700){
        left.scrollBy(265, 0);
    }else{
        left.scrollBy(320, 0);
    }
}
function rightScroll() {
    let h = innerHeight;
    let right = document.querySelector(".scroll-container");
    if(h <= 570){
        right.scrollBy(-240, 0);
    }else
    if(h <= 700){
        right.scrollBy(-265, 0);
    }else{
        right.scrollBy(-320, 0);
    }
}
/* ///////////////////////////////////////////// Text appear on image click ///////////////////////////////////////////// */
function textAppear(n) {
    let l = text.length;
    for(let j = 0; j < l; j++){
        if (j !== n){
            text[j].style.display = 'none';
            shade1[j].style.backgroundColor = 'rgb(0,0,0,0.6)';
            shade2[j].style.backgroundColor = 'rgb(0,0,0,0.6)';
            textOpacity[j].style.opacity = '0';
            shade1[j].addEventListener('mouseover',function(){
                shade1[j].style.backgroundColor= 'transparent';
            })
            shade1[j].addEventListener('mouseout', function() {
                shade1[j].style.backgroundColor= 'rgb(0,0,0,0.6)';
            })
            shade2[j].addEventListener('mouseover',function(){
                shade2[j].style.backgroundColor= 'transparent';
            })
            shade2[j].addEventListener('mouseout', function() {
                shade2[j].style.backgroundColor= 'rgb(0,0,0,0.6)';
            })}
        else{
            text[n].style.display = 'inline-block';
            shade1[n].style.backgroundColor = 'transparent';
            shade2[n].style.backgroundColor = 'transparent';
            textOpacity[n].style.opacity = '1';
            shade1[n].addEventListener('mouseover',function(){
                shade1[n].style.backgroundColor= 'transparent';
            })
            shade1[n].addEventListener('mouseout', function() {
                shade1[n].style.backgroundColor= 'transparent';
            })
            shade2[n].addEventListener('mouseover',function(){
                shade2[n].style.backgroundColor= 'transparent';
            })
            shade2[n].addEventListener('mouseout', function() {
                shade2[n].style.backgroundColor= 'transparent';
            })
        }
    }
}
/* ///////////////////////////////////////////// Pause audio when playing another audio ///////////////////////////////////////////// */
document.addEventListener('play', function(e){
    let l = audios.length;
    for(let i = 0; i < l;i++){
        if(audios[i] !== e.target){
            audios[i].pause();
            audios[i].currentTime = 0;
        }
    }
}, true);
/* ///////////////////////////////////////////// Hamburger Menu ///////////////////////////////////////////// */
function hamburgerMenuAppear(){
    hamburgerMenu.style.width='250px';
    hamburgerShadow.style.backgroundColor='rgb(20,20,30,0.6)';
    hamburgerShadow.style.display='inline-block';
}
function hamburgerMenuDisappear(){
    hamburgerMenu.style.width='0';
    hamburgerShadow.style.backgroundColor='transparent';
    hamburgerShadow.style.display='none';
}
/* ///////////////////////////////////////////// Weather Display ///////////////////////////////////////////// */
(function(d, s, id) {
    if (d.getElementById(id)) {
        if (window.__TOMORROW__) {
            window.__TOMORROW__.renderWidget();
        }
        return;
    }
    const fjs = d.getElementsByTagName(s)[0];
    const js = d.createElement(s);
    js.id = id;
    js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

    fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'tomorrow-sdk');
/* ///////////////////////////////////////////// Hotel Preview Appear on click ///////////////////////////////////////////// */

function hotelTextAppear(n) {
    let l = hotelPreview.length;
    for(let j = 0; j < l; j++){
        if (j !== n){
            hotelPreview[j].style.display = 'none';
            hotelPreviewOpacity[j].style.opacity = '0';
        }
        else{
            hotelPreview[n].style.display = 'inline-block';
            hotelPreviewOpacity[n].style.opacity = '1';
        }
    }
}