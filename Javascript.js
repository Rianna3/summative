console.log("Welcome!");

//var cookies = window.alert("We use cookies and similar technology to improve user experience,personalize content and ads, and analyze usage of our website.");

var author = {
    
    NAME : function(){
        console.log("The author of this website is Yunying Wang");
    },

    CONTACT : function(){
        console.log("If you have any question, please email her: flnf58@durham.ac.uk");
    }
}
author.NAME();
author.CONTACT();

var climateChange = ["Content:","What is climate change?","Climate anxiety","What causes climate change?","What we should do?"]
console.log(climateChange);

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=> {
        //Toggle Nav
        nav.classList.toggle('nav-active');

          //Animate links
        navLinks.forEach((link)=>{
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3)s';
            }
        });
        //burger animation
        burger .classList.toggle('toggle');
    });
  
}
navSlide();

//Building cookie pop up
const cookieBox = document.querySelector(".wrapper"),
    acceptBtn = cookieBox.querySelector("button");
    acceptBtn.onclick = ()=>{
      document.cookie = "CookieBy=Rianna_Wang";
      if(document.cookie){ 
        cookieBox.classList.add("hide"); 
      }else{ 
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
      }
    }
    let checkCookie = document.cookie.indexOf("CookieBy=Rianna_Wang");
    checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide"); 

//picture scrolling
var count = 0;
var change = false;
var timer;

window.onload = function(){
    var fossil_fuel_img = document.getElementsByClassName('fossil_fuel_img')[0];
    var ff = document.getElementsByClassName('ff');
    var scrolling = document.getElementsByClassName("scrolling");
    var rounded_rectangle = document.getElementsByClassName('rounded_rectangle');
    rounded_rectangle[0].style.backgroundcolor = 'orange';

    showtime();
    function showtime(){
        timer = setInterval(function(){
            if (change == false){
                count++;
                fossil_fuel_img.style.transform = "translate(" + -800 *count + "px)";
                if (count >= ff.length - 1) {
                    count = ff.length-1;
                    change = true;
                }
            }
            else{
                count--;
                fossil_fuel_img.style.transform = "translate(" + -800 * count + "px)";
                if (count <= 0){
                    count = 0;
                    change = false;
                }
            }
            for (var i=0; i<rounded_rectangle.length; i++){
                rounded_rectangle[i].style.backgroundcolor = "#cf7a7a";
            }
            rounded_rectangle[count].style.backgroundcolor = "orange";
        }, 4000)
    }
    for (var i=0; i<scrolling.length; i++){
        scrolling[i].onmouseover = function(){
            clearInterval(timer);
        }
        scrolling[i].onclick = function(){
            if (this.title == 0){
                count++;
                if (count>3){
                    count = 0;
                }
            }
            else {
                count--;
                if (count<0){
                    count = 3;
                }
            }
            fossil_fuel_img.style.transform = "translate(" + -800 * count + "px)";
            for (var i=0; i<rounded_rectangle.length; i++){
                rounded_rectangle[i].style.backgroundcolor = "#cf7a7a";
            }
            rounded_rectangle[count].style.backgroundcolor = "orange";
        }
    }
    for (var b=0; b< rounded_rectangle.length; b++){
        rounded_rectangle[b].index=b;
        rounded_rectangle[b].onmouseover = function(){
            clearInterval(timer);

            for (var a=0; a<rounded_rectangle.length; a++){
                rounded_rectangle[a].style.backgroundcolor = "#cf7a7a";
            }
            rounded_rectangle[this.index].style.backgroundcolor = "orange";

            if (this.index == 3) {
                change =true;
            }
            count = this.index;
            fossil_fuel_img.style.transform = "translate(" + -800 * this.index + "px)";
        }
        rounded_rectangle[b].onmouseout = function() {
            showtime();
        }
    }
}


//The comment
function check(){
    if(document.F.name.value.length == 0){
        window.alert("Please enter your username!")
        return false
    }else if(document.F.email.value.length == 0){
        window.alert("Please enter your email!")
        return false
    } else if(document.F.message.value.length == 0){
        window.alert("Please enter the message you want to tell us!")
        return false
    }
    else{
         window.alert("Thank you for your message!");
    }
       
}