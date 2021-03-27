    // $('a').hover(function () {
    //         // over
    //         $(this).addClass('activo');
            
    //     }, 
    //     function () {
    //         // out
    //         $(this).removeClass('activo');
    //     }
    // );

    $(document).ready(function () {
        $('#1').addClass('activo');

        $('.prueba').click(function(){

            $('.prueba').removeClass('activo');
            $(this).addClass('activo');
        
        });
    });
