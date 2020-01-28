
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoplay:true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        loop:true,
        margin:10,
        nav:false,
        autoWidth:false,
        smartSpeed:500,
        fluidSpeed: true,
        dragEndSpeed: true,
        dots:true,
        dotsEach:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

$('.custom1').owlCarousel({
    
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
});
});
$('#doctor').on('click',function () {
    $('#modal2').css('display','block');
});
var cross = document.querySelectorAll('.close_mod');
cross.forEach(function (key) {
    key.addEventListener('click',function () {
        close();
        addOverlay();
    });
})

function close () {
    modal1.style.display = 'none';
    modal2.style.display = 'none';
}
var hamb = document.getElementById('hamb');
hamb.addEventListener('click',function () {
    hamb.classList.toggle('open');
    var navbar = document.querySelector('.navbar');
     var heightNavbar = window.getComputedStyle(navbar).height;
   if( heightNavbar == '0px'){
       navbar.style.height ='320px';
       $('.navbar div').addClass('smBlock');}
   else{
       $('.navbar').css('height','0');
       $('#hamb span').attr('style','')
   }
});
$(window).resize(function () {
    if($(window).width()>750){
        $('.navbar, #hamb span,.navbar div').attr('style','');
        $('.navbar div').removeClass('smBlock');
    }
});


/*$(document).ready(function () {
    $("#reg,#reg2").submit(function() {
        var form_data = $(this).serialize();
         $.ajax({
             url: 'mail.php',
             type: "POST",
             data: form_data,
             success: function () {
                 alert('Заявка принята!');
                 $('#modal1,#modal2').css('display','none');
             },
             error: function () {
                 alert("Ошибка,данные не отправлены");
             }
         });
         return false;
    });
});*/
   /*$(window).resize(function () {
        if($(window).width() < 780){
            $.ajax('bootdent.php',
                $('#requreHeader').html('<?php require "header_small.php" ?>')
            )};
    });*/

$('.btn_modal').on('click',function () {
    var doc= $(this).closest('.row').find('.fio').text();
    $('#modal2').css({'display':'block','animation':'zoomIn 0.5s'});
    $('.fio_doc').text(doc);

});
var overlay =document.querySelector('.overlay');
var modal=document.querySelectorAll('.btn_mod');
modal.forEach(function (key) {
    key.addEventListener("click", function () {
   overlay.classList.toggle('open');
        Object.assign(document.getElementById('modal1').style, {
            display: 'block', animation: 'zoomIn 0.5s'
        });
    });
});

function addOverlay (){
    overlay.classList.remove('open');
}