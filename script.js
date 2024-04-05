function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += "responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}

/*-----------Dark mode------------*/

const body = document.querySelector("body"),
 toggleSwitch = document.getElementById("toggle-switch");

 toggleSwitch.addEventListener("click", ()=> {
             body.classList.toggle("dark");
 });

 /*-------------------Typing Effect-------*/

 var typingEffect = new Typed(".typedText", {
          strings: [ "Coder" , "Developer"],

          loop: true, 
          typeSpeed: 100,
          backSpeed: 80,
          backDelay: 2000,
 })

 /*--------Scroll animation ---------*/

 const sr = scrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
 });

 sr.reveal(".featured-name", { delay:100 });
 sr.reveal(".text-info",{ delay: 200 });
 sr.reveal(".text-btn",{ delay: 200 });
 sr.reveal(".socical_icons",{ delay: 200 });
 sr.reveal(".featured-image",{ delay: 320 });



 sr.reveal(".project-box", {interval: 200});

 sr.reveal(".top-header", {});

 const srLeft = scrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
 })


 srLeft.reveal(".about-info", { delay: 100});
 srLeft.reveal(".contact-info", { delay: 100});


 const srRight = scrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
 })

 srRight.reveal(".skill", { delay: 100});
 srRight.reveal(".skill-box", { delay: 100});

 /*------active link--------*/

 const section = document.querySelectorAll(".section[id");

 function scrollActive() {
    const scrollY = Window.scrollY;

    section.forEach((current) => {

        const sectionHeight = current.offsetHeight,

        sectionTop = current.offsetTop - 50,

        sectionID = current.getAttribute("id");

        
 if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    document 
      .querySelector(".nav-menu a[href*=" + sectionID + "]")
      .claaList.add("active-link");
 } else {
    document 
    .querySelector(".nav-menu a[href*=" + sectionID + "]")
    .classList.remove("active-link");
 }
});
 }

 Window.addEventListener("scroll", scrollActive);
 
