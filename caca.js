function validar() {
    if (p1B.value == 'eprom') {
        document.querySelector('.a1').style.color = 'white';
        document.querySelector('.a2').style.color = 'white';
        document.querySelector('.a3').style.color = 'white';
        document.querySelector('.a4').style.color = 'white';
        document.querySelector('.a5').style.color = 'white';

        document.querySelector('.a1').style.background = 'green';
        document.querySelector('.a2').style.background = 'green';
        document.querySelector('.a3').style.background = 'green';
        document.querySelector('.a4').style.background = 'green';
        document.querySelector('.a5').style.background = 'green';


    } else {
        document.querySelector('.a1').style.color = 'transparent';
        document.querySelector('.a2').style.color = 'transparent';
        document.querySelector('.a3').style.color = 'transparent';
        document.querySelector('.a4').style.color = 'transparent';
        document.querySelector('.a5').style.color = 'transparent';

        document.querySelector('.a1').style.background = 'white';
        document.querySelector('.a2').style.background = 'white';
        document.querySelector('.a3').style.background = 'white';
        document.querySelector('.a4').style.background = 'white';
        document.querySelector('.a5').style.background = 'white';
    }
    
    if (p2B.value == 'rom') {
        document.querySelector('.b1').style.color = 'white';
        document.querySelector('.b2').style.color = 'white';
        document.querySelector('.b3').style.color = 'white';


        document.querySelector('.b1').style.background = 'green';
        document.querySelector('.b2').style.background = 'green';
        document.querySelector('.b3').style.background = 'green';

    } else {
        document.querySelector('.a1').style.color = 'transparent';
        document.querySelector('.a2').style.color = 'transparent';
        document.querySelector('.a3').style.color = 'transparent';
        document.querySelector('.a4').style.color = 'transparent';
        document.querySelector('.a5').style.color = 'transparent';

        document.querySelector('.a1').style.background = 'white';
        document.querySelector('.a2').style.background = 'white';
        document.querySelector('.a3').style.background = 'white';
        document.querySelector('.a4').style.background = 'white';
        document.querySelector('.a5').style.background = 'white';
    }




}
