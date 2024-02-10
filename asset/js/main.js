$(document).ready(function() {

       var currentYear = new Date().getFullYear();
       $('#year').text(currentYear);


        //NAVBAR TOGGLING - ADMIN

        $('.main-header .menu').on('click', function(){
            $('.sidebar').animate({left: '0px'});
        })

        $('.sidebar-close').on('click', function(){
            $('.sidebar').animate({left: '-350px'});
        })


        $('body').on('click', function(){
            $('.profile-dropdown-items').addClass('d-none');
            $('.directions').addClass('close');
        })
       $('.drop-now').on('click', function(e){
            e.stopPropagation();
            $('.profile-dropdown-items').toggleClass('d-none');
           $('.directions').toggleClass('close');
       })
        
    
});