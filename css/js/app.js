
$(document).ready(function(){
    
    window.addEventListener("scroll",()=>{
        scrollPos=window.scrollY;
        window.addEventListener("load",()=>{
            scrollTo(scrollPos+1);
        });
        if(scrollPos>1){
            $(".for_header").removeClass("header")
            $("header").addClass("for_header"); 
            $(".logo_header").addClass("for_logo_header")
            $("nav").addClass("for_nav")
            $(".navlist a").addClass("for_nav-item_a")
        }
        else{

            $("header").addClass("header"); 

            $("header").removeClass("for_header"); 
            $(".logo_header").removeClass("for_logo_header")
            $("nav").removeClass("for_nav")
            $(".navlist a").removeClass("for_nav-item_a")

        }

    })
}) 