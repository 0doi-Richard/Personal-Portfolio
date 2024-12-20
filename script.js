// Canvas bubbles scripts
const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];

// Creates and animates bubbles
function bounceBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    bubbles.forEach(bubble => {
        bubble.x += bubble.dx;
        bubble.y += bubble.dy;

        // Bounce on walls
        if (bubble.x + bubble.radius > canvas.width || bubble.x - bubble.radius < 0) {
            bubble.dx *= -1;
        }
        if (bubble.y + bubble.radius > canvas.height || bubble.y - bubble.radius < 0) {
            bubble.dy *= -1;
        }

        // Draw bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color;
        ctx.fill();
        ctx.closePath();
    });
    requestAnimationFrame(bounceBubbles);
}

// Initialize bubbles
function initBubbles() {
    const colors = ['#ff5733', '#33ff57', '#3357ff', '#ff33a8'];
    for (let i = 0; i < 50; i++) {
        bubbles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: (Math.random() - 0.5) * 4,
            dy: (Math.random() - 0.5) * 4,
            radius: Math.random() * 20 + 10,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
}

// Initialize and run
initBubbles();
bounceBubbles();

// General scripts
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }                                                               
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

});