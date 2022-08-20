
 const menu=document.querySelector("#mobile-menu")
  const menuLinks=document.querySelector(".navlist_head")

 const mobileMenu=()=>{
     menu.classList.toggle("is-active")
      menuLinks.classList.toggle("active")
 }
 menu.addEventListener("click", mobileMenu)

burger=document.querySelector(".burger");
cross=document.querySelector(".cross")
navlist_head=document.querySelector(".navlist_head")
bar1=document.querySelector(".bar1");
bar2=document.querySelector(".bar2");
bar3=document.querySelector(".bar3");

burger.addEventListener("click", ()=>
{  

    navlist_head.classList.toggle("v-nav")
})



gallery_btn_1=document.querySelector("#gallery-btn-1")

gallery_btn_2=document.querySelector("#gallery-btn-2")

gallery_btn_3=document.querySelector("#gallery-btn-3")

gallery_btn_4=document.querySelector("#gallery-btn-4")

gallery_food_1=document.querySelector(".gallery_food_1")

gallery_food_2=document.querySelector(".gallery_food_2")

gallery_food_3=document.querySelector(".gallery_food_3")

gallery_food_4=document.querySelector(".gallery_food_4")

gallery_food_5=document.querySelector(".gallery_food_5")

gallery_food_6=document.querySelector(".gallery_food_6")

gallery_food_7=document.querySelector(".gallery_food_7")

gallery_food_8=document.querySelector(".gallery_food_8")

gallery_food_9=document.querySelector(".gallery_food_9")

gallery_img_1=document.querySelector(".gallery-img-1")

gallery_img_2=document.querySelector(".gallery-img-2")

gallery_img_3=document.querySelector(".gallery-img-3")

gallery_img_4=document.querySelector(".gallery-img-4")

gallery_img_5=document.querySelector(".gallery-img-5")

gallery_img_6=document.querySelector(".gallery-img-6")

gallery_img_7=document.querySelector(".gallery-img-7")

gallery_img_8=document.querySelector(".gallery-img-8")

gallery_img_9=document.querySelector(".gallery-img-9")

gallery_food_1.addEventListener("mouseenter", ()=>{
    gallery_img_1.style.transform="scale(1.1)"

})

gallery_food_1.addEventListener("mouseleave", ()=>{
    gallery_img_1.style.transform="none"

})


gallery_food_2.addEventListener("mouseenter", ()=>{
    gallery_img_2.style.transform="scale(1.1)"

})

gallery_food_2.addEventListener("mouseleave", ()=>{
    gallery_img_2.style.transform="none"

})

gallery_food_3.addEventListener("mouseenter", ()=>{
    gallery_img_3.style.transform="scale(1.1)"

})

gallery_food_3.addEventListener("mouseleave", ()=>{
    gallery_img_3.style.transform="none"

})

gallery_food_4.addEventListener("mouseenter", ()=>{
    gallery_img_4.style.transform="scale(1.1)"

})

gallery_food_4.addEventListener("mouseleave", ()=>{
    gallery_img_4.style.transform="none"

})

gallery_food_5.addEventListener("mouseenter", ()=>{
    gallery_img_5.style.transform="scale(1.1)"

})

gallery_food_5.addEventListener("mouseleave", ()=>{
    gallery_img_5.style.transform="none"

})


gallery_food_6.addEventListener("mouseenter", ()=>{
    gallery_img_6.style.transform="scale(1.1)"

})

gallery_food_6.addEventListener("mouseleave", ()=>{
    gallery_img_6.style.transform="none"

})

gallery_food_7.addEventListener("mouseenter", ()=>{
    gallery_img_7.style.transform="scale(1.1)"

})

gallery_food_7.addEventListener("mouseleave", ()=>{
    gallery_img_7.style.transform="none"

})


gallery_food_8.addEventListener("mouseenter", ()=>{
    gallery_img_8.style.transform="scale(1.1)"

})

gallery_food_8.addEventListener("mouseleave", ()=>{
    gallery_img_8.style.transform="none"

})

gallery_food_9.addEventListener("mouseenter", ()=>{
    gallery_img_9.style.transform="scale(1.1)"

})

gallery_food_9.addEventListener("mouseleave", ()=>{
    gallery_img_9.style.transform="none"

})

gallery_btn_1.addEventListener("click", ()=>{
    gallery_food_1.style.display="flex"
    gallery_food_2.style.display="flex"
    gallery_food_3.style.display="flex"
    gallery_food_4.style.display="flex"
    gallery_food_5.style.display="flex"
    gallery_food_6.style.display="flex"
    gallery_food_7.style.display="flex"
    gallery_food_8.style.display="flex"
    gallery_food_9.style.display="flex"


})//shows all the images of products

gallery_btn_2.addEventListener("click", ()=>{
    gallery_food_1.style.display="none"
    gallery_food_2.style.display="flex"
    gallery_food_3.style.display="none"
    gallery_food_4.style.display="flex"
    gallery_food_5.style.display="flex"
    gallery_food_6.style.display="none"
    gallery_food_7.style.display="none"
    gallery_food_8.style.display="flex"
    gallery_food_9.style.display="none"


})//show product images according to button

gallery_btn_3.addEventListener("click", ()=>{
    gallery_food_1.style.display="none"
    gallery_food_2.style.display="none"
    gallery_food_3.style.display="flex"
    gallery_food_4.style.display="none"
    gallery_food_5.style.display="none"
    gallery_food_6.style.display="flex"
    gallery_food_7.style.display="flex"
    gallery_food_8.style.display="none"
    gallery_food_9.style.display="none"


})//show product images according to button

gallery_btn_4.addEventListener("click", ()=>{
    gallery_food_1.style.display="flex"
    gallery_food_2.style.display="none"
    gallery_food_3.style.display="none"
    gallery_food_4.style.display="none"
    gallery_food_5.style.display="none"
    gallery_food_6.style.display="none"
    gallery_food_7.style.display="none"
    gallery_food_8.style.display="none"
    gallery_food_9.style.display="flex"


})//show product images according to button

sub_gallery=document.getElementsByClassName("sub_gallery");

console.log(sub_gallery.length)


member1=document.querySelector("#member1");

member_img_1=document.querySelector(".member-img-1")

member1.addEventListener("mouseenter", ()=>{
    member_img_1.style.transform="scale(1.1)"
    console.log("mouseover")
})//transforms the team member image when mouse is on it

member1.addEventListener("mouseleave", ()=>{
    member_img_1.style.transform="none"
    console.log("mouseleave")

})//transforms the team member image to normal when mouse leaves it

member2=document.querySelector("#member2");

member_img_2=document.querySelector(".member-img-2")

member2.addEventListener("mouseover", ()=>{
    member_img_2.style.transform="scale(1.1)"
    console.log("mouseover")
})//transforms the team member image when mouse is on it

member2.addEventListener("mouseleave", ()=>{
    member_img_2.style.transform="none"
    console.log("mouseleave")

})//transforms the team member image to normal when mouse leaves it

member3=document.querySelector("#member3");

member_img_3=document.querySelector(".member-img-3")

member3.addEventListener("mouseover", ()=>{
    member_img_3.style.transform="scale(1.1)"
    console.log("mouseover")
})//transforms the team member image when mouse is on it

member3.addEventListener("mouseleave", ()=>{
    member_img_3.style.transform="none"
    console.log("mouseleave")

})//transforms the team member image to normal when mouse leaves it

let changeColor=()=>{
    const elem=document.querySelector(".highlight");
    const nav_1=document.querySelector("#nav-1");
    const nav_2=document.querySelector("#nav-2");
    const nav_3=document.querySelector("#nav-3");
    const nav_4=document.querySelector("#nav-4");
    const nav_5=document.querySelector("#nav-5");
    const nav_6=document.querySelector("#nav-6");
    header=document.querySelector("header")
  const menuLink=document.querySelector(".navlist_head")

 
    let scrollPos=window.scrollY;
    if(scrollPos>1){
        header.classList.add("h_c_c")
        menuLink.classList.add("h_c_c")
    }
    else{
        header.classList.remove("h_c_c")
        menuLink.classList.remove("h_c_c")

    }
    //NAV-1
    if(window.innerWidth>960 && scrollPos>900&&scrollPos<2550){
        nav_1.classList.add("highlight");
        nav_2.classList.remove("highlight");
       
    

    }

    //NAV-2
    else if(window.innerWidth>960&& scrollPos>2550&&scrollPos<4050 ){
        nav_1.classList.remove("highlight");
        nav_2.classList.add("highlight");
        nav_3.classList.remove("highlight")

    }
//NAV-3
    else if(window.innerWidth>960&& scrollPos>4050&&scrollPos<5450 ){
        nav_2.classList.remove("highlight")
        nav_3.classList.add("highlight");
        nav_4.classList.remove("highlight")


    }
//NAV-4
    else if(window.innerWidth>960&& scrollPos>5450 &&scrollPos<6450){
        nav_3.classList.remove("highlight")
        nav_4.classList.add("highlight");
        nav_5.classList.remove("highlight")

    }
//NAV-5
    else if(window.innerWidth>960&& scrollPos>6450 &&scrollPos<7450){
        nav_4.classList.remove("highlight")
        nav_5.classList.add("highlight");
        nav_6.classList.remove("highlight")
    }
    //NAV-6
    else if(window.innerWidth>960&& scrollPos>7450 &&scrollPos<8900){
        nav_5.classList.remove("highlight")
        nav_6.classList.add("highlight");
    }
    else{
        nav_1.classList.remove("highlight")
        nav_2.classList.remove("highlight")
        nav_3.classList.remove("highlight")
        nav_4.classList.remove("highlight")
        nav_5.classList.remove("highlight")
        nav_6.classList.remove("highlight")
       
    }

}

  

window.addEventListener("scroll", changeColor);//UnderLine The Nav Link While Scrolling

buttons=document.querySelectorAll(".btn");//gets all the buttons from the website


buttons[0].addEventListener("mouseover",()=>{
    buttons[0].style.transition="all 0.2s ease-in-out";
})//adds transition to button

buttons[1].addEventListener("mouseover",()=>{
    buttons[1].style.transition="all 0.2s ease-in-out";
})//adds transition to button

buttons[2].addEventListener("mouseover",()=>{
    buttons[2].style.transition="all 0.2s ease-in-out";
})//adds transition to button

buttons[3].addEventListener("mouseover",()=>{
    buttons[3].style.transition="all 0.2s ease-in-out";
})//adds transition to button

buttons[4].addEventListener("mouseover",()=>{
    buttons[4].style.transition="all 0.2s ease-in-out";
})//adds transition to button

buttons[5].addEventListener("mouseover",()=>{
    buttons[5].style.transition="all 0.2s ease-in-out";
})//adds transition to button

buttons[6].addEventListener("mouseover",()=>{
    buttons[6].style.transition="all 0.2s ease-in-out";
})//adds transition to button

buttons[7].addEventListener("mouseover",()=>{
    buttons[7].style.transition="all 0.2s ease-in-out";
})//adds transition to button

buttons[8].addEventListener("mouseover",()=>{
    buttons[8].style.transition="all 0.2s ease-in-out";
})//adds transition to button

buttons[9].addEventListener("mouseover",()=>{
    buttons[9].style.transition="all 0.2s ease-in-out";
})//adds transition to button

buttons[10].addEventListener("mouseover",()=>{
    buttons[10].style.transition="all 0.2s ease-in-out";
})//adds transition to button

buttons[11].addEventListener("mouseover",()=>{
    buttons[11].style.transition="all 0.2s ease-in-out";
})//adds transition to button

buttons[12].addEventListener("mouseover",()=>{
    buttons[12].style.transition="all 0.2s ease-in-out";
})//adds transition to button



img_food_1=document.querySelector(".img_food_1")

img_food_2=document.querySelector(".img_food_2")

img_food_3=document.querySelector(".img_food_3")

img_food_1.addEventListener("mouseover",()=>{
    img_food_1.style.transform="scale(1.1)";
    img_food_1.style.transition=".4s ease-in-out"
})

img_food_1.addEventListener("mouseleave",()=>{
    img_food_1.style.transform="none";
})


img_food_2.addEventListener("mouseover",()=>{
    img_food_2.style.transform="scale(1.1)";
    img_food_2.style.transition=".4s ease-in-out"
})

img_food_2.addEventListener("mouseleave",()=>{
    img_food_2.style.transform="none";
})

img_food_3.addEventListener("mouseover",()=>{
    img_food_3.style.transform="scale(1.1)";
    img_food_3.style.transition=".4s ease-in-out"
})

img_food_3.addEventListener("mouseleave",()=>{
    img_food_3.style.transform="none";
})

