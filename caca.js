function validar() {
    var epromValid = false
    var memoriaValid = false
    var flashValid = false
    var threadsValid = false
    var csValid = false
    var dmaValid = false
    var adressValid = false
    var dataValid = false
    var registradorValid = false

    if (p1B.value == 'eprom' || p1B.value == 'EPROM') {
        for (index = 1; index <= 5; index++) {
            document.querySelector(`.a${index}`).style.color = 'white';
            document.querySelector(`.a${index}`).style.background = 'green';
        }
        p1B.style.border = 'solid 2px green'

        epromValid = true

    } else {
        for (index = 1; index <= 5; index++) {
            document.querySelector(`.a${index}`).style.color = 'transparent';
            document.querySelector(`.a${index}`).style.background = 'white';
        }
        epromValid = false
        p1B.style.border = 'solid 2px transparent'
    }




    if (p2B.value == 'rom' || p2B.value == 'ROM') {
        for (index = 1; index <= 3; index++) {
            document.querySelector(`.b${index}`).style.color = 'white';
            document.querySelector(`.b${index}`).style.background = 'green';
        }
        p2B.style.border = 'solid 2px green'
    } else {
        for (index = 1; index <= 3; index++) {
            if (index == 1) {
                if (!epromValid) {
                    document.querySelector(`.b${index}`).style.color = 'transparent';
                    document.querySelector(`.b${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.b${index}`).style.color = 'transparent';
                document.querySelector(`.b${index}`).style.background = 'white';
            }
        }
        p2B.style.border = 'solid 2px transparent'
    }




    if (p3B.value == 'memoria de massa' || p3B.value == 'MEMORIA DE MASSA') {
        for (index = 1; index <= 16; index++) {
            document.querySelector(`.c${index}`).style.color = 'white';
            document.querySelector(`.c${index}`).style.background = 'green';
        }
        p3B.style.border = 'solid 2px green'
        memoriaValid = true

    } else {
        for (index = 1; index <= 16; index++) {
            if (index == 1) {
                if (!epromValid) {
                    document.querySelector(`.c${index}`).style.color = 'transparent';
                    document.querySelector(`.c${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.c${index}`).style.color = 'transparent';
                document.querySelector(`.c${index}`).style.background = 'white';
            }
        }
        p3B.style.border = 'solid 2px transparent'
        memoriaValid =  false
    }



    if (p4B.value == 'threads' || p4B.value == 'THREADS') {
        for (index = 1; index <= 7; index++) {
            document.querySelector(`.d${index}`).style.color = 'white';
            document.querySelector(`.d${index}`).style.background = 'green';
        }
        p4B.style.border = 'solid 2px green'
        threadsValid = true
    } else {
        for (index = 1; index <= 7; index++) {
            if (index == 3) {
                if (!memoriaValid) {
                    document.querySelector(`.d${index}`).style.color = 'transparent';
                    document.querySelector(`.d${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.d${index}`).style.color = 'transparent';
                document.querySelector(`.d${index}`).style.background = 'white';
            }
        }
        p4B.style.border = 'solid 2px transparent'
        threadsValid = false
    }


    if (p5B.value == 'i5' || p5B.value == 'I5') {
        for (index = 1; index <= 2; index++) {
            document.querySelector(`.e${index}`).style.color = 'white';
            document.querySelector(`.e${index}`).style.background = 'green';
        }
        p5B.style.border = 'solid 2px green'
    } else {
        for (index = 1; index <= 2; index++) {
            if (index == 1) {
                if (!memoriaValid) {
                    document.querySelector(`.e${index}`).style.color = 'transparent';
                    document.querySelector(`.e${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.e${index}`).style.color = 'transparent';
                document.querySelector(`.e${index}`).style.background = 'white';
            }
        }
        p5B.style.border = 'solid 2px transparent'
    }


    if (p6B.value == 'registradores' || p6B.value == 'REGISTRADORES') {
        for (index = 1; index <= 13; index++) {
            document.querySelector(`.f${index}`).style.color = 'white';
            document.querySelector(`.f${index}`).style.background = 'green';
        }
        p6B.style.border = 'solid 2px green'
        registradorValid = true

    } else {
        for (index = 1; index <= 13; index++) {
            if (index == 2) {
                if (!memoriaValid) {
                    document.querySelector(`.f${index}`).style.color = 'transparent';
                    document.querySelector(`.f${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.f${index}`).style.color = 'transparent';
                document.querySelector(`.f${index}`).style.background = 'white';
            }
        }
        p6B.style.border = 'solid 2px transparent'
        registradorValid = false
    }

    if (p7B.value == 'ram' || p7B.value == 'RAM') {
        for (index = 1; index <= 3; index++) {
            document.querySelector(`.g${index}`).style.color = 'white';
            document.querySelector(`.g${index}`).style.background = 'green';
        }
        p7B.style.border = 'solid 2px green'
    } else {
        for (index = 1; index <= 3; index++) {
            if (index == 3) {
                if (!memoriaValid) {
                    document.querySelector(`.g${index}`).style.color = 'transparent';
                    document.querySelector(`.g${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.g${index}`).style.color = 'transparent';
                document.querySelector(`.g${index}`).style.background = 'white';
            }
        }
        p7B.style.border = 'solid 2px transparent'
    }


    if (p8B.value == 'flash' || p8B.value == 'FLASH') {
        for (index = 1; index <= 5; index++) {
            document.querySelector(`.h${index}`).style.color = 'white';
            document.querySelector(`.h${index}`).style.background = 'green';
        }
        p8B.style.border = 'solid 2px green'
        flashValid = true
    } else {
        for (index = 1; index <= 5; index++) {
            if (index == 4) {
                if (!memoriaValid) {
                    document.querySelector(`.h${index}`).style.color = 'transparent';
                    document.querySelector(`.h${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.h${index}`).style.color = 'transparent';
                document.querySelector(`.h${index}`).style.background = 'white';
            }
        }
        p8B.style.border = 'solid 2px transparent'
        flashValid =  false
    }


    if (p9B.value == 'ula' || p9B.value == 'ULA') {
        for (index = 1; index <= 3; index++) {
            document.querySelector(`.i${index}`).style.color = 'white';
            document.querySelector(`.i${index}`).style.background = 'green';
        }
        p9B.style.border = 'solid 2px green'
    } else {
        for (index = 1; index <= 3; index++) {
            if (index == 2) {
                if (!flashValid) {
                    document.querySelector(`.i${index}`).style.color = 'transparent';
                    document.querySelector(`.i${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.i${index}`).style.color = 'transparent';
                document.querySelector(`.i${index}`).style.background = 'white';
            }
        }
        p9B.style.border = 'solid 2px transparent'
    }



    if (p10B.value == 'dma' || p10B.value == 'DMA') {
        for (index = 1; index <= 3; index++) {
            document.querySelector(`.j${index}`).style.color = 'white';
            document.querySelector(`.j${index}`).style.background = 'green';
        }
        p10B.style.border = 'solid 2px green'
        dmaValid = true
    } else {
        for (index = 1; index <= 3; index++) {
            if (index == 1) {
                if (!threadsValid) {
                    document.querySelector(`.j${index}`).style.color = 'transparent';
                    document.querySelector(`.j${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.j${index}`).style.color = 'transparent';
                document.querySelector(`.j${index}`).style.background = 'white';
            }
        }
        p10B.style.border = 'solid 2px transparent'
        dmaValid = false
    }


    if (p11B.value == 'cs' || p11B.value == 'CS') {
        for (index = 1; index <= 2; index++) {
            document.querySelector(`.k${index}`).style.color = 'white';
            document.querySelector(`.k${index}`).style.background = 'green';
        }
        p11B.style.border = 'solid 2px green'
        csValid = true
    } else {
        for (index = 1; index <= 2; index++) {
            if (index == 2) {
                if (!threadsValid) {
                    document.querySelector(`.k${index}`).style.color = 'transparent';
                    document.querySelector(`.k${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.k${index}`).style.color = 'transparent';
                document.querySelector(`.k${index}`).style.background = 'white';
            }
        }
        p11B.style.border = 'solid 2px transparent'
        csValid = false
    }



    if (p12B.value == 'cpu' || p12B.value == 'CPU') {
        for (index = 1; index <= 3; index++) {
            document.querySelector(`.l${index}`).style.color = 'white';
            document.querySelector(`.l${index}`).style.background = 'green';
        }
        p12B.style.border = 'solid 2px green'
    } else {
        for (index = 1; index <= 3; index++) {
            if (index == 1) {
                if (!csValid) {
                    document.querySelector(`.l${index}`).style.color = 'transparent';
                    document.querySelector(`.l${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.l${index}`).style.color = 'transparent';
                document.querySelector(`.l${index}`).style.background = 'white';
            }
        }
        p12B.style.border = 'solid 2px transparent'
    }



    if (p13B.value == 'adress bus' || p13B.value == 'ADRESS BUS') {
        for (index = 1; index <= 10; index++) {
            document.querySelector(`.m${index}`).style.color = 'white';
            document.querySelector(`.m${index}`).style.background = 'green';
        }
        p13B.style.border = 'solid 2px green'
        adressValid = true
    } else {
        for (index = 1; index <= 10; index++) {
            if (index == 1) {
                if (!dmaValid) {
                    document.querySelector(`.m${index}`).style.color = 'transparent';
                    document.querySelector(`.m${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.m${index}`).style.color = 'transparent';
                document.querySelector(`.m${index}`).style.background = 'white';
            }
        }
        p13B.style.border = 'solid 2px transparent'
        adressValid = false
    }


    if (p14B.value == 'dual core' || p14B.value == 'DUAL CORE') {
        for (index = 1; index <= 9; index++) {
            document.querySelector(`.n${index}`).style.color = 'white';
            document.querySelector(`.n${index}`).style.background = 'green';
        }
        p14B.style.border = 'solid 2px green'
    } else {
        for (index = 1; index <= 9; index++) {
            if (index == 5) {
                if (!adressValid) {
                    document.querySelector(`.n${index}`).style.color = 'transparent';
                    document.querySelector(`.n${index}`).style.background = 'white';
                }
            } else if (index == 8) {
                if (!registradorValid) {
                    document.querySelector(`.n${index}`).style.color = 'transparent';
                    document.querySelector(`.n${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.n${index}`).style.color = 'transparent';
                document.querySelector(`.n${index}`).style.background = 'white';
            }
        }
        p14B.style.border = 'solid 2px transparent'
    }


    if (p15B.value == 'data bus' || p15B.value == 'DATA BUS') {
        for (index = 1; index <= 8; index++) {
            document.querySelector(`.o${index}`).style.color = 'white';
            document.querySelector(`.o${index}`).style.background = 'green';
        }
        p15B.style.border = 'solid 2px green'
        dataValid = true
    } else {
        for (index = 1; index <= 8; index++) {
            if (index == 7) {
                if (!adressValid) {
                    document.querySelector(`.o${index}`).style.color = 'transparent';
                    document.querySelector(`.o${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.o${index}`).style.color = 'transparent';
                document.querySelector(`.o${index}`).style.background = 'white';
            }
        }
        p15B.style.border = 'solid 2px transparent'
        dataValid = false
    }


    if (p16B.value == 'quad core' || p16B.value == 'QUAD CORE') {
        for (index = 1; index <= 9; index++) {
            document.querySelector(`.p${index}`).style.color = 'white';
            document.querySelector(`.p${index}`).style.background = 'green';
        }
        p16B.style.border = 'solid 2px green'
    } else {
        for (index = 1; index <= 9; index++) {
            if (index == 4) {
                if (!dataValid) {
                    document.querySelector(`.p${index}`).style.color = 'transparent';
                    document.querySelector(`.p${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.p${index}`).style.color = 'transparent';
                document.querySelector(`.p${index}`).style.background = 'white';
            }
        }
        p16B.style.border = 'solid 2px transparent'
    }


    if (p17B.value == 'i7' || p17B.value == 'I7') {
        for (index = 1; index <= 2; index++) {
            document.querySelector(`.q${index}`).style.color = 'white';
            document.querySelector(`.q${index}`).style.background = 'green';
        }
        p17B.style.border = 'solid 2px green'
    } else {
        for (index = 1; index <= 2; index++) {
            if (index == 1) {
                if (!registradorValid) {
                    document.querySelector(`.q${index}`).style.color = 'transparent';
                    document.querySelector(`.q${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.q${index}`).style.color = 'transparent';
                document.querySelector(`.q${index}`).style.background = 'white';
            }
        }
        p17B.style.border = 'solid 2px transparent'
    }


    if (p18B.value == 'cache' || p18B.value == 'CACHE') {
        for (index = 1; index <= 5; index++) {
            document.querySelector(`.r${index}`).style.color = 'white';
            document.querySelector(`.r${index}`).style.background = 'green';
        }
        p18B.style.border = 'solid 2px green'
    } else {
        for (index = 1; index <= 5; index++) {
            if (index == 2) {
                if (!registradorValid) {
                    document.querySelector(`.r${index}`).style.color = 'transparent';
                    document.querySelector(`.r${index}`).style.background = 'white';
                }
            } else {
                document.querySelector(`.r${index}`).style.color = 'transparent';
                document.querySelector(`.r${index}`).style.background = 'white';
            }
        }
        p18B.style.border = 'solid 2px transparent'
    }



}

