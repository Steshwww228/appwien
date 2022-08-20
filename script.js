const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active')
}
list.forEach((item) =>
item.addEventListener('click',activeLink));

// <!-- Script Morebtn -->

// window.onload = function () {
// var cafevibe=document.getElementsByClassName('cafevibe');
// var btn=document.getElementById('more');
// for (let i=6;i<cafevibe.length;i++) {
//     cafevibe[i].style.display = "none";
// }

// var countD = 5;
// btn.addEventListener("click", function() {
//     var work=document.getElementsByClassName('cafevibe');
//     countD += 2;
//     if (countD <= cafevibe.length){
//         for(let i=0;i<countD;i++){
//             cafevibe[i].style.display = "block";
//         }
//     }

// })
// }
// Clubs widgets
const btn1 = document.getElementById('cafe');
const btn2=document.getElementById('clubs');
const btn3=document.getElementById('rest');

btn1.addEventListener('click', function(){
    document.getElementById('cafewidgets').style.display="block"
    document.getElementById('widgetclub').style.display="none"
    document.getElementById('barwidgets').style.display="none"
document.getElementById('cafe').style.background="orange"
document.getElementById('clubs').style.background="#222327"
document.getElementById('rest').style.background="#222327"
})
btn2.addEventListener('click', function(){
document.getElementById('cafewidgets').style.display="none"
document.getElementById('barwidgets').style.display="none"
document.getElementById('widgetclub').style.display='block'
document.getElementById('clubs').style.background="orange"
document.getElementById('cafe').style.background="#222327"
document.getElementById('rest').style.background="#222327"

})
btn3.addEventListener('click', function(){
document.getElementById('rest').style.background="orange"
document.getElementById('cafewidgets').style.display="none"
document.getElementById('widgetclub').style.display='none'
document.getElementById('barwidgets').style.display='block'
document.getElementById('cafe').style.background="#222327"
document.getElementById('clubs').style.background="#222327"

})

// open window widget
let angebot=document.getElementById('swip1')
angebot.addEventListener('click',function(){
document.getElementById('openwindow').style.display='block'
document.getElementById('navig').style.display='none'
document.body.style.overflow = 'hidden';
})
let closearrow=document.getElementById('arrowclose')
closearrow.addEventListener('click',function(){
    document.getElementById('openwindow').style.display="none"
document.getElementById('navig').style.display='block'
document.body.style.overflow = 'visible';
})


let shopangebot=document.getElementById('shopwidgets')
shopangebot.addEventListener('click',function(){
    document.getElementById('openwindow').style.display='block'
    document.getElementById('navig').style.display='none'
    document.body.style.overflow = 'hidden';
})
let cafeshop=document.getElementById('swipera')
cafeshop.addEventListener('click',function(){
    document.getElementById('cafewien').style.display='block'
    document.getElementById('navigation').style.display='block'
    document.getElementById('menu-btn').style.display='none'
    document.getElementById('cafewidgets').style.display='none'
    document.getElementById('search').style.display='none'
    document.getElementById('profilplace').style.display='none'
    document.getElementById('smallnav').style.display='none'
    document.getElementById('morebtn').style.display='none'
    document.getElementById('navig').style.display='none'

})
let imgprofiel=document.getElementById('fotoprofil')
imgprofiel.addEventListener('click',function(){
    document.getElementById('profiluser').style.display='block'
    document.getElementById('navigation').style.display='none'
    document.getElementById('cafewien').style.display='none'
    document.getElementById('cafewidgets').style.display='none'
    document.getElementById('search').style.display='none'
    document.getElementById('profilplace').style.display='none'
    document.getElementById('smallnav').style.display='none'
    document.getElementById('morebtn').style.display='none'
    document.getElementById('navig').style.display='none'

})
// Login Eingang-------------------------------------------------------------------
let name=document.getElementById('checkname')
var pass=document.getElementById('pass')
let ein=document.getElementById('ein')
var a=Date.parse(pass)
var a=Date.parse(checkname)
// let btneingang=document.querySelector('#ein')
ein.addEventListener('click',function(){
if(name.value=="Alina" && pass.value==2022){ 
  document.getElementById('loginer').style.display="none";
  document.getElementById('combo').style.display="block";
  document.getElementById('navig').style.display="block";
  document.getElementById('grundnav').style.display='block'
//   document.getElementById('menucombo').style.display="block"
  }else{
    alert("Не верный логин или пароль")
  }

})
// -----------------------------------------------------------------------------------
  let marker=document.querySelector('#marker');
  let item=document.querySelectorAll('ul li  a ');
  function Indicator(e){
    marker.style.top=e.offsetTop+'px';
    marker.style.width=e.offsetWidth+'px';
  }
  item.forEach(link =>{
    link.addEventListener('mousemove', (e) =>{
    Indicator(e.target);
    })
  })
  let aktion=document.getElementById('aktion')
aktion.addEventListener('click',function(){
    document.getElementById('shopwidgets').style.display='block'
    document.getElementById('textpromo').style.display='block'
    
    
})

let rightbtn=document.getElementById('rightthree')
rightbtn.addEventListener('click',function(){
    document.getElementById('werbungseit').style.display='none'
    document.getElementById('loginer').style.display='block'
    document.getElementById('grundnav').style.display='none'

    
})
// let shoplist=document.getElementById('shop')
// shop.addEventListener('click',function(){
//     document.getElementById('shopwidgets').style.display='none'
//     document.getElementById('textpromo').style.display='none'
    
// })