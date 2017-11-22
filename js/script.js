$(document).ready(()=>{
   let navIsVisible = false;
   let servicesItems = false;
   
   //Sprawdzanie wielkosci okno w celu dostosowania nawigacji
   checkWindowsSize();

   //przygotowanie elementow przed animacjami
   setElementsBeforeAnim();

    $(document).scroll(()=>{
        const height = $(window).scrollTop();
        
        
        //Dodawanie klasy z backgroundem do nawigacji
        if(height > 100){
            $('.main-nav').addClass('main-nav-active');
        }else{
            $('.main-nav').removeClass('main-nav-active');
        }

        //Animacja sekcji About
        if(height > $('#about').position().top - $('#about').position().top/2 ){
            $('.about-image').animate({left:'0'},1000);
        }

        if(height > $('#services').position().top - $('#services').position().top/3 ){
            if(servicesItems === false){
                const length = $('.services-item');
                doAnimate('.item-',length.length);
                $('.services-title').animate({'background-position-x':'50%'},1000);
                servicesItems=true;
            }
        }

        if(navIsVisible){
            navIsVisible = false;
            $(".nav").removeClass("hamburger-nav").hide();
            $(".hamburger").removeClass("hamburger-change");
        }
    })
    
    $(window).resize(()=>{
        checkWindowsSize();
    })

   

    $(document).mouseup(function(e) 
    {
        const container = $(".nav");
        const hamburger = $(".hamburger");
        const bar = $(".bar");
        
        
        if (!container.is(e.target)  && container.has(e.target).length === 0 && navIsVisible || hamburger.is($(e.target) && navIsVisible) || bar.is($(e.target)) && navIsVisible)
        {
            navIsVisible = false;
            container.removeClass("hamburger-nav").hide();
            hamburger.removeClass("hamburger-change");

        }else if (hamburger.is($(e.target)) && !navIsVisible || bar.is($(e.target)) && !navIsVisible) {
            navIsVisible = true;
            
            hamburger.addClass("hamburger-change");
            container.addClass("hamburger-nav").show();
        }
    });

   
    
    $(".scroll").click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:($(this.hash).offset().top - 100)}, 500);
    });

    
});

function checkWindowsSize(){
    if($(window).width() < 700){
        $(".hamburger").show().fadeIn();
        $(".nav").hide();
    }else{
        $(".hamburger").hide().fadeOut();
        $(".nav").show();
    }
};

function setElementsBeforeAnim(){
    $('.about-image').css({left:'-550px'});
    $('.services-item').css({opacity:'0'});
    $('.services-title').css('background-position-x','1500px');
};

function doAnimate(item,length,number){
    let i = (number>1)?number:1;
    if(i<=length){
        $(item+i).animate({opacity:'1'},250,function(){
            i++;
            doAnimate(item,length,i);
        })
    }else{

    }
};
