console.log("Welcome!");

//User input
document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText").value;
    console.log("Hello ",myName);

}


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
console.log(climateChange[0]);
console.log(climateChange[1]);
console.log(climateChange[2]);
console.log(climateChange[3]);
console.log(climateChange[4]);


class Ball{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.radius = r;
    }
    draw(){
        alert("I an a ball this big: " + this.radius);
    }
}
let b1  = new Ball(400,300,20);
let b2 = new Ball(100,200,10);

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=> {
        //Toggle Nav
        nav.classList.toggle('nav-active');

          //Animate links
        navLinks.forEach((link, index)=>{
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
