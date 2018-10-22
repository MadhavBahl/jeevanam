$(window).scroll(function() {
    var theta = -1* $(window).scrollTop() / 600 % Math.PI;
    $('#wheel').css({ transform: 'rotate(' + theta + 'rad)' });
    // $('#rightgear').css({ transform: 'rotate(-' + theta + 'rad)' });

    // console.log(window.scrollY);
    // if (window.scrollY > 10 && window.scrollY <15) {
    //     $('#wheel').css({ 
    //         width: '350px'
    //     });
    //     $('#wheel').css({ 
    //         left: '-175px',
    //     });
    //     $('#wheel').css({ 
    //         bottom: '-175px',
    //     });
    // } else if (window.scrollY < 10) {
    //     $('#wheel').css({ 
    //         width: '550px',
            
    //     });
    //     $('#wheel').css({ 
    //         left: '-275px',
    //     });
    //     $('#wheel').css({ 
    //         bottom: '-275px',
    //     });
    // }
});