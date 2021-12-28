if (document.querySelector(".owl-carousel1")) {
    $('.owl-carousel1').owlCarousel({
        loop: true,
        margin: 100,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    })
}
if (document.querySelector(".owl-carousel2")) {
    $('.owl-carousel2').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })
}
if (document.querySelector(".owl-carousel3")) {
    $('.owl-carousel3').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })
}
if (document.querySelector(".owl-carousel4")) {
    $('.owl-carousel4').owlCarousel({
        loop: true,
        margin: 20,
        //responsiveClass: true,
        center:true,
        responsive: {
            0: {
                items: 1,
                nav:true
            },
            600: {
                items: 2,
                nav:true
            },
            1000: {
                items: 3,
                nav:true
            }
        }
    })
}
if (document.querySelector(".owl-carousel5")) {
    $('.owl-carousel5').owlCarousel({
        loop: false,
        margin: 10,
        //responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav:true
            },
            600: {
                items: 2,
                nav:true
            },
            1000: {
                items: 3,
                nav:true
            }
        }
    })
}
if(document.querySelector('.my-rating')){
    $(".my-rating").starRating({
        starSize: 25,
        readOnly: true,
        callback: function(currentRating, $el){
            // make a server call here
        }
    });
}

if (document.querySelector(".countdown-pr")) {
    const countdown = document.querySelectorAll(".countdown-pr")
    countdown.forEach((ex, i) =>{
        $(`#example-${i}`).countdown({
            date: '01/05/2022 23:59:59'
            }, function () {
            });
    })
   

}


if (document.querySelector('#table_id')) {
    $('#table_id') && $(document).ready(function() {
        $('#table_id').DataTable({
            paging: false,
            searching: false,
            ordering: false,
            info: false,
            responsive: true
        });
    });
}

if (document.querySelector('#sticky-nav')) {
    let navLinks = document.querySelectorAll("#sticky-nav a");

    // for each link 
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            // get the data-link value
            let astt = link.getAttribute("href").split('#');
            let targetId = astt[1]
            console.log(targetId)
                // scrollTo function
            window.scrollTo({
                // scroll to the element position - 60px (-60px is added because of the margin-top of each section)
                top: document.getElementById(targetId).offsetTop - 80,
                behavior: "smooth"
            });

        })
    })
}

if (document.querySelector('#Iner')) {
    const usd = document.querySelector('#usd1')
    const inr = document.querySelector('#inr1')

    usd.addEventListener('click', function() {
        document.querySelectorAll('#Iner').forEach(on => {
            on.style.display = 'none'
        });
        document.querySelectorAll('#Usd').forEach(on => {
            on.style.display = 'table-cell'
        })
    })
    inr.addEventListener('click', function() {
        document.querySelectorAll('#Usd').forEach(on => {
            on.style.display = 'none'
        });
        document.querySelectorAll('#Iner').forEach(on => {
            on.style.display = 'table-cell'
        })
    })

}
if (document.querySelector('#INR')) {
    const usd = document.querySelector('#usd1')
    const inr = document.querySelector('#inr1')

    usd.addEventListener('click', function() {
        document.querySelectorAll('#INR').forEach(on => {
            on.style.display = 'none'
        });
        document.querySelectorAll('#USD').forEach(on => {
            on.style.display = 'block'
        })
    })
    inr.addEventListener('click', function() {
        document.querySelectorAll('#USD').forEach(on => {
            on.style.display = 'none'
        });
        document.querySelectorAll('#INR').forEach(on => {
            on.style.display = 'block'
        })
    })

}

if (document.querySelector('.show-less-div')) {
    $('.show-less-div').myOwnLineShowMoreLess({
        showLessText: 'Read Less',
        showMoreText: 'Read More',
        showLessLine: 3
    });
}
if (document.querySelector('.show-less-div-2')) {
    $('.show-less-div-2').myOwnLineShowMoreLess({
        showLessText: 'Read Less',
        showMoreText: 'Read More',
        showLessLine: 5
    });
}