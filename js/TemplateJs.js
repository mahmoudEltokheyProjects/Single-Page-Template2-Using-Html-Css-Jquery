
$(document).ready(function(){
    /* ------------------------------------ navbar section ------------------------------------ */
    $(window).scroll( function(){
            if( $(window).scrollTop() >= 170 )
            {
                $("#navbarId").css("background-color","rgba(0,0,0,0.6)");
            }
            else
            {
                $("#navbarId").css("background-color","transparent");
            }
        }
    );
    /* ---------------- when click on any link , go to section[ click on "about" link , go to about section ] ---------- */
    // when click on any link inside <li></li>  , apply animation on "html" and "body" 
//بتاع العنصر id بتساوي ال  data-value  بعد 1500 مللي ثانية حيث هيحرك البكرة للاعلي مسافة تساوي المسافة للقمة بتاع العنصر اللي ليه body لل animate لما اضغط علي اي لينك هينفذ هذا الكود هيعمل 
    //  data-value بتاع ال value هيجيب ال 
    $(".navbar  li  a").click(function(){
        $("html , body").animate({
            /*  يعني اعلي مسافة للعنصر يعني بداية العنصر top  بتجيب بداية العنصر من ناحية ال offset().top ال */
            /* معينة value حيث بيرسلني ل data-value="value" انا اللي عمله ذي ال attribute هو custom attribute ال */
            scrollTop : $('#'+$(this).data('value')).offset().top   
        },1500);
    });
    /* ------------------------------------ contact section ------------------------------------ */
    // ############### username field ###############
    $("#usernameId").focusin(function(){
        $("#usernameId").attr("placeholder","");
        console.log(" ------------------- focus in ------------------- ");
    });
    $("#usernameId").focusout(function(){
        $("#usernameId").attr("placeholder","Your Name");
        console.log(" ------------------- focus out ------------------- ");
    });
    // ############### email field ###############
    $("#emailId").focusin(function(){
        $("#emailId").attr("placeholder","");
        console.log(" ------------------- focus in ------------------- ");
    });
    $("#emailId").focusout(function(){
        $("#emailId").attr("placeholder","Your Email");
        console.log(" ------------------- focus out ------------------- ");
    });
    // ############### textarea field ###############
    $("#messageId").focusin(function(){
        $("#messageId").attr("placeholder","");
        console.log(" ------------------- focus in ------------------- ");
    });
    $("#messageId").focusout(function(){
        $("#messageId").attr("placeholder","Message");
        console.log(" ------------------- focus out ------------------- ");
    });
 
});
