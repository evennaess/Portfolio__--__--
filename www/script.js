function init() {
    const burgerIcon = document.querySelector('.burger-icon');
    const nav = document.querySelector('nav');
    const navLinks = nav.querySelector('.nav-links');
    // const mobileNav = document.querySelector('.mobile-nav');
    burgerIcon.addEventListener('click', () => {
        burgerIcon.classList.toggle('closemobilemenu');
        navLinks.classList.toggle('active');
        // mobileNav.classList.toggle('mobile-nav-hide');
        // burgerIcon.classList.toggle('burger');
        // burgerIcon.classList.toggle('closemobilemenu');
    }); 
    
}

async function getSanity() {
    const clientId = '7cjl1phd';
    const url = `https://${clientId}.api.sanity.io/v2021-10-21/data/query/production?query=*[]`;
    const response = await fetch(url);
    const results = await response.json()
    console.log(results)
}


init();
getSanity();
const windowWidth = $(document).width()

    console.log('kjør')
    $(document).on('mousemove', function(e){

        $('.cursor').css({
            left: e.pageX - $('.cursor').width() / 2,
            top: e.pageY - $('.cursor').height() / 2
        })
    
        $(e.target).css('cursor', 'none')
    })
    
    $('a').on('mouseenter', function(){
        $('.cursor').addClass('cursorExpand')
    })
    $('a').on('mouseleave', function(){
        $('.cursor').removeClass('cursorExpand')
    })