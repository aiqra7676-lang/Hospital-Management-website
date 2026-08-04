/* =========================
   Hamburger Menu
========================= */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");


hamburger.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});



/* Close menu after clicking link */

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});






/* =========================
   Dark / Light Mode
========================= */


const themeBtn = document.getElementById("theme-btn");


themeBtn.addEventListener("click",()=>{


    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML="☀️";

    }

    else{

        themeBtn.innerHTML="🌙";

    }


});






/* =========================
   Sticky Navbar
========================= */


window.addEventListener("scroll",()=>{


    let header=document.querySelector("header");


    if(window.scrollY > 50){

        header.style.boxShadow=
        "0 5px 20px rgba(0,0,0,.2)";

    }

    else{

        header.style.boxShadow=
        "0 5px 15px rgba(0,0,0,.1)";

    }


});







/* =========================
   Appointment Form Validation
========================= */


const form=document.getElementById("appointment-form");


form.addEventListener("submit",(e)=>{


e.preventDefault();


let name=form.querySelector("input[type='text']").value;

let email=form.querySelector("input[type='email']").value;

let phone=form.querySelector("input[type='number']").value;



if(name=="" || email=="" || phone==""){

    alert("Please fill all required fields!");

}


else if(phone.length < 10){

    alert("Enter valid phone number");

}


else if(!email.includes("@")){

    alert("Enter valid email address");

}


else{


    alert("Appointment booked successfully!");

    form.reset();

}



});








/* =========================
 Department Search Filter

 Add in HTML:

<input id="searchDepartment"
placeholder="Search Department">

========================= */


const search=document.getElementById("searchDepartment");



if(search){


search.addEventListener("keyup",()=>{


let value=search.value.toLowerCase();


let cards=document.querySelectorAll(".department-container .card");



cards.forEach(card=>{


let text=card.innerText.toLowerCase();


if(text.includes(value)){


card.style.display="block";


}

else{


card.style.display="none";


}



});


});


}









/* =========================
 FAQ Accordion
========================= */


const faqBoxes=document.querySelectorAll(".faq-box");



faqBoxes.forEach(faq=>{


faq.addEventListener("click",()=>{


faq.classList.toggle("active");



let answer=faq.querySelector("p");



if(answer.style.display==="block"){


answer.style.display="none";


}

else{


answer.style.display="block";


}



});


});






/* =========================
 Testimonial Slider

 Change reviews automatically

========================= */


const reviews=[


{
text:
"Excellent doctors and very caring staff.",
name:
"Ali Raza"
},


{
text:
"Modern hospital with professional services.",
name:
"Sara Ahmed"
},


{
text:
"Best healthcare experience ever.",
name:
"Usman Khan"
}


];



let index=0;



const reviewText=document.querySelector(".review p");

const reviewName=document.querySelector(".review h4");



function changeReview(){


if(reviewText && reviewName){


reviewText.innerHTML=
reviews[index].text;


reviewName.innerHTML=
"- "+reviews[index].name;


index++;


if(index>=reviews.length){

index=0;

}


}


}



setInterval(changeReview,3000);


const scrollBtn=
document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{


if(window.scrollY > 300){


scrollBtn.style.display="block";

}

else{

scrollBtn.style.display="none";

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});


});

document.querySelectorAll("a[href^='#']")
.forEach(anchor=>{


anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});


});


});

const sections=
document.querySelectorAll("section");


const navItems=
document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


let sectionTop=
section.offsetTop-150;


if(window.scrollY >= sectionTop){


current=section.getAttribute("id");


}



});



navItems.forEach(link=>{


link.classList.remove("active");



if(link.getAttribute("href")
==
"#"+current){


link.classList.add("active");


}



});


});