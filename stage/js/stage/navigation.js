const go_contact = document.getElementById('go-contact');
const go_qui_nous = document.getElementById('go-qui-nous');
const about_us = document.getElementById('about_us');
const contact_page = document.getElementsByClassName('contact')[0];
const header = document.getElementsByClassName('header1');


go_contact.addEventListener('click',function () { 
    header[0].style.display = "none";
    header[1].style.display = "none";
    contact_page.style.display = "block";
    window.scrollTo(0,900);

 })
 function foo() {
   header[0].style.display = "none";
   header[1].style.display = "none";
   about_us.style.display = "flex";
   window.scrollTo(0,900);
 }
 go_qui_nous.addEventListener('click',function(){
   setTimeout(function () { 
      header[0].style.animation = "mon_anime1 2s infinite";
      foo();
    },3000);
 })

