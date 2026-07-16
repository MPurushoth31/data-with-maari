/*==========================================================
 PORTFOLIO V3
 script.js - Part 1
==========================================================*/

"use strict";

/*==========================================================
 LOADER
==========================================================*/

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

loader.style.pointerEvents = "none";

}, 2300);

});

/*==========================================================
 CURSOR GLOW
==========================================================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

if (!cursor) return;

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

});

/*==========================================================
 STICKY HEADER
==========================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if (!header) return;

if (window.scrollY > 80) {

header.classList.add("active");

} else {

header.classList.remove("active");

}

});

/*==========================================================
 SMOOTH SCROLL
==========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function (e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if (!target) return;

target.scrollIntoView({

behavior: "smooth"

});

});

});

/*==========================================================
 ACTIVE NAVIGATION
==========================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let currentSection = "";

sections.forEach(section => {

const top = section.offsetTop - 150;

const height = section.offsetHeight;

if (window.scrollY >= top) {

currentSection = section.id;

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + currentSection) {

link.classList.add("active");

}

});

});

/*==========================================================
 HERO TITLE TYPING
==========================================================*/

const typingElement = document.querySelector(".hero-left h2");

const typingWords = [

"Senior MIS Reporting Analyst",

"Power BI Developer",

"Advanced Excel Expert",

"SQL Reporting Specialist",

"Automation Enthusiast",

"Content Creator"

];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typeEffect() {

if (!typingElement) return;

const current = typingWords[wordIndex];

if (!isDeleting) {

typingElement.textContent = current.substring(0, charIndex);

charIndex++;

if (charIndex > current.length) {

isDeleting = true;

setTimeout(typeEffect, 1800);

return;

}

} else {

typingElement.textContent = current.substring(0, charIndex);

charIndex--;

if (charIndex < 0) {

isDeleting = false;

wordIndex++;

if (wordIndex >= typingWords.length) {

wordIndex = 0;

}

}

}

setTimeout(typeEffect, isDeleting ? 40 : 75);

}

typeEffect();

/*==========================================================
 HERO IMAGE TILT
==========================================================*/

const photo = document.querySelector(".photo");

document.addEventListener("mousemove", (e) => {

if (!photo) return;

const x = (window.innerWidth / 2 - e.clientX) / 35;

const y = (window.innerHeight / 2 - e.clientY) / 35;

photo.style.transform =

`rotateY(${-x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave", () => {

if (!photo) return;

photo.style.transform =

"rotateY(0deg) rotateX(0deg)";

});

/*==========================================================
 FLOATING CARDS
==========================================================*/

document.querySelectorAll(".float").forEach((card, index) => {

card.style.animationDelay = `${index * 0.8}s`;

});

/*==========================================================
 CONSOLE MESSAGE
==========================================================*/

console.clear();

console.log(

"%cDATA WITH MAARI",

"font-size:22px;font-weight:bold;color:#06b6d4"

);

console.log(

"%cPortfolio Loaded Successfully",

"font-size:14px;color:#7c3aed"

);

/*==========================================================
 PORTFOLIO V3
 script.js - Part 2
==========================================================*/

"use strict";

/*==========================================================
 REVEAL ON SCROLL
==========================================================*/

const revealElements = document.querySelectorAll(

".snapshot-card,.service,.glass-card,.timeline-item,.skill-card,.education-card,.certificate-card,.creator-left,.creator-stats div,.contact-card"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("reveal");

setTimeout(()=>{

entry.target.classList.add("active");

},150);

}

});

},

{

threshold:0.15

}

);

revealElements.forEach(item=>{

revealObserver.observe(item);

});

/*==========================================================
 SCROLL PROGRESS BAR
==========================================================*/

const progressBar=document.createElement("div");

progressBar.className="scroll-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

const totalHeight=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const progress=

(window.scrollY/totalHeight)*100;

progressBar.style.width=progress+"%";

});

/*==========================================================
 SCROLL TO TOP
==========================================================*/

const scrollBtn=document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

if(!scrollBtn) return;

if(window.scrollY>500){

scrollBtn.classList.add("active");

}else{

scrollBtn.classList.remove("active");

}

});

scrollBtn?.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==========================================================
 RIPPLE BUTTON EFFECT
==========================================================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(

this.clientWidth,

this.clientHeight

);

const rect=this.getBoundingClientRect();

ripple.className="ripple";

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=(

e.clientX-

rect.left-

size/2

)+"px";

ripple.style.top=(

e.clientY-

rect.top-

size/2

)+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},650);

});

});

/*==========================================================
 MAGNETIC BUTTON EFFECT
==========================================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const moveX=(x-rect.width/2)/7;

const moveY=(y-rect.height/2)/7;

btn.style.transform=

`translate(${moveX}px,${moveY}px)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0)";

});

});

/*==========================================================
 TECH TAG HOVER
==========================================================*/

document.querySelectorAll(".tech span")

.forEach(tag=>{

tag.addEventListener("mouseenter",()=>{

tag.style.transform=

"translateY(-8px) scale(1.05)";

});

tag.addEventListener("mouseleave",()=>{

tag.style.transform=

"translateY(0px) scale(1)";

});

});

/*==========================================================
 PHOTO SHADOW
==========================================================*/

document.addEventListener("mousemove",(e)=>{

if(!photo) return;

const rect=photo.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=

(y-rect.height/2)/25;

const rotateY=

(x-rect.width/2)/25;

photo.style.boxShadow=

`${rotateY}px ${rotateX}px 60px rgba(0,0,0,.45)`;

});

/*==========================================================
 IMAGE DRAG DISABLE
==========================================================*/

document.querySelectorAll("img")

.forEach(img=>{

img.setAttribute(

"draggable",

"false"

);

});

/*==========================================================
 RIGHT CLICK DISABLE
==========================================================*/

document.addEventListener(

"contextmenu",

e=>{

e.preventDefault();

}

);

/*==========================================================
 DEVELOPER MESSAGE
==========================================================*/

console.log(

"%cDesigned & Developed by Purushoth",

"color:#22c55e;font-size:13px;font-weight:bold;"

);

/*==========================================================
 PORTFOLIO V3
 script.js - Part 3
==========================================================*/

"use strict";

/*==========================================================
 PARTICLE BACKGROUND
==========================================================*/

function createParticles(){

const totalParticles = 35;

for(let i=0;i<totalParticles;i++){

const particle=document.createElement("span");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.top=Math.random()*100+"vh";

particle.style.width=(2+Math.random()*6)+"px";

particle.style.height=particle.style.width;

particle.style.animationDuration=

(8+Math.random()*12)+"s";

particle.style.animationDelay=

Math.random()*5+"s";

particle.style.opacity=

Math.random();

document.body.appendChild(particle);

}

}

createParticles();

/*==========================================================
 FLOATING CARDS RANDOM MOTION
==========================================================*/

const floatingCards=document.querySelectorAll(".float");

setInterval(()=>{

floatingCards.forEach(card=>{

const x=Math.random()*8-4;

const y=Math.random()*8-4;

card.animate([

{

transform:

`translate(${x}px,${y}px)`

},

{

transform:

`translate(${-x}px,${-y}px)`

}

],{

duration:4500,

iterations:1,

easing:"ease-in-out"

});

});

},4500);

/*==========================================================
 HERO GLOW FOLLOW MOUSE
==========================================================*/

const glow=document.querySelector(".glow");

document.addEventListener("mousemove",(e)=>{

if(!glow) return;

const x=(e.clientX/window.innerWidth)*100;

const y=(e.clientY/window.innerHeight)*100;

glow.style.background=

`radial-gradient(circle at ${x}% ${y}%,

rgba(124,58,237,.45),

rgba(37,99,235,.25),

transparent 70%)`;

});

/*==========================================================
 SECTION FADE IN
==========================================================*/

const allSections=document.querySelectorAll("section");

const sectionObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(60px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:900,

fill:"forwards",

easing:"ease"

});

}

});

},

{

threshold:0.10

}

);

allSections.forEach(section=>{

sectionObserver.observe(section);

});

/*==========================================================
 COUNT UP ANIMATION
==========================================================*/

const counters=document.querySelectorAll(

".creator-stats h2"

);

const counterObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter=entry.target;

const text=counter.textContent.trim();

const number=parseInt(text);

if(isNaN(number)) return;

let current=0;

const increment=Math.ceil(number/60);

function update(){

current+=increment;

if(current>number){

current=number;

}

counter.textContent=current+"+";

if(current<number){

requestAnimationFrame(update);

}

}

update();

counterObserver.unobserve(counter);

});

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*==========================================================
 SOCIAL CARD HOVER
==========================================================*/

document.querySelectorAll(".contact-card")

.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform=

"translateX(12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"translateX(0) scale(1)";

});

});

/*==========================================================
 SKILL CARD TILT
==========================================================*/

document.querySelectorAll(".skill-card")

.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=(y-rect.height/2)/18;

const rotateY=(rect.width/2-x)/18;

card.style.transform=

`perspective(900px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0deg) rotateY(0deg)";

});

});

/*==========================================================
 SNAPSHOT CARD EFFECT
==========================================================*/

document.querySelectorAll(".snapshot-card")

.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-12px)"

}

],{

duration:300,

fill:"forwards"

});

});

});

/*==========================================================
 FOOTER YEAR
==========================================================*/

const copyright=document.querySelector(".copyright p");

if(copyright){

const year=new Date().getFullYear();

copyright.innerHTML=

`© ${year} Purushoth M.

All Rights Reserved.

Designed & Developed with ❤️ by

<strong>Purushoth</strong>`;

}

/*==========================================================
 PAGE VISIBILITY
==========================================================*/

document.addEventListener(

"visibilitychange",

()=>{

if(document.hidden){

document.title="👋 Come Back | Purushoth Portfolio";

}else{

document.title="Purushoth M | Portfolio";

}

});

/*==========================================================
 END OF PART 3
==========================================================*/

console.log(

"%cAnimations Loaded Successfully",

"color:#06b6d4;font-size:13px;font-weight:bold;"

);

/*==========================================================
 PORTFOLIO V3
 script.js - Part 4 (Final)
==========================================================*/

"use strict";

/*==========================================================
 MOBILE MENU
==========================================================*/

const mobileToggle=document.querySelector(".mobile-toggle");
const nav=document.querySelector("nav");

if(mobileToggle && nav){

mobileToggle.addEventListener("click",()=>{

nav.classList.toggle("show");

mobileToggle.classList.toggle("active");

});

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("show");

mobileToggle.classList.remove("active");

});

});

}

/*==========================================================
 CONTACT FORM
==========================================================*/

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const button=form.querySelector("button");

button.innerHTML="Sending...";

button.disabled=true;

setTimeout(()=>{

button.innerHTML="Message Sent ✓";

button.style.background="#22c55e";

setTimeout(()=>{

button.innerHTML="Send Message";

button.disabled=false;

button.removeAttribute("style");

form.reset();

},2500);

},1800);

});

}

/*==========================================================
 COPY EMAIL
==========================================================*/

document.querySelectorAll('a[href^="mailto:"]')

.forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const email=link.textContent.trim();

navigator.clipboard.writeText(email);

const oldText=link.innerHTML;

link.innerHTML="Copied ✓";

setTimeout(()=>{

link.innerHTML=oldText;

window.location.href="mailto:"+email;

},1000);

});

});

/*==========================================================
 RANDOM BACKGROUND COLORS
==========================================================*/

const colors=[

"#7c3aed",

"#2563eb",

"#06b6d4",

"#ec4899"

];

document.querySelectorAll(

".skill-icon,.icon,.edu-icon,.footer-icon"

).forEach((box,index)=>{

box.style.background=

`linear-gradient(135deg,

${colors[index%colors.length]},

${colors[(index+1)%colors.length]}

)`;

});

/*==========================================================
 LAZY LOAD IMAGES
==========================================================*/

const lazyImages=document.querySelectorAll("img");

const lazyObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

if(img.dataset.src){

img.src=img.dataset.src;

}

lazyObserver.unobserve(img);

}

});

}

);

lazyImages.forEach(img=>{

lazyObserver.observe(img);

});

/*==========================================================
 KEYBOARD SHORTCUTS
==========================================================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

if(e.key==="End"){

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

}

});

/*==========================================================
 DOUBLE CLICK HERO
==========================================================*/

const hero=document.querySelector("#home");

if(hero){

hero.addEventListener("dblclick",()=>{

window.open(

"https://www.youtube.com/@datawithmaari",

"_blank"

);

});

}

/*==========================================================
 PERFORMANCE LOG
==========================================================*/

window.addEventListener("load",()=>{

const time=Math.round(performance.now());

console.log(

`Portfolio Loaded in ${time} ms`

);

});

/*==========================================================
 RESIZE EVENT
==========================================================*/

window.addEventListener("resize",()=>{

document.querySelectorAll(".particle")

.forEach(p=>{

p.style.left=Math.random()*100+"vw";

});

});

/*==========================================================
 FINAL CONSOLE MESSAGE
==========================================================*/

console.clear();

console.log(

"%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",

"color:#06b6d4"

);

console.log(

"%c DATA WITH MAARI",

"font-size:22px;font-weight:bold;color:#06b6d4"

);

console.log(

"%c Purushoth M Portfolio V3",

"font-size:16px;font-weight:bold;color:#7c3aed"

);

console.log(

"%c Senior MIS Reporting Analyst",

"font-size:13px;color:#22c55e"

);

console.log(

"%c GitHub Pages Ready ✓",

"font-size:13px;color:#facc15"

);

console.log(

"%c https://www.youtube.com/@datawithmaari",

"font-size:13px;color:#ffffff"

);

console.log(

"%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",

"color:#06b6d4"

);

/*==========================================================
 END OF FILE
==========================================================*/