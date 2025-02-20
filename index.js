// initialization

const RESPONSIVE_WIDTH = 1024

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseBtn = document.getElementById("collapse-btn")
const collapseHeaderItems = document.getElementById("collapsed-header-items")



function onHeaderClickOutside(e) {

    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader()
    }

}


function toggleHeader() {
    if (isHeaderCollapsed) {
        // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
        collapseHeaderItems.classList.add("opacity-100",)
        collapseHeaderItems.style.width = "60vw"
        collapseBtn.classList.remove("bi-list")
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    } else {
        collapseHeaderItems.classList.remove("opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed")
        collapseBtn.classList.add("bi-list")
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)

    }
}

function responsive() {
    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.width = ""

    } else {
        isHeaderCollapsed = true
    }
}

window.addEventListener("resize", responsive)


/**
 * Animations
 */

gsap.registerPlugin(ScrollTrigger)


gsap.to(".reveal-up", {
    opacity: 0,
    y: "100%",
})

const slideShowContainer = document.querySelector("#slideshow")

gsap.fromTo(".slide-in", {
    y: "100%"
}, {
    y: "0%",
    duration: 1,
})

const images = [
    "tiyeninew/WhatsApp Image 2025-02-04 at 16.09.51.jpeg",
    "tiyeninew/WhatsApp Image 2025-02-04 at 16.09.53.jpeg",
    "assets/images/home/hiking4.jpg",
    "tiyeninew/WhatsApp Image 2025-02-04 at 16.09.55 (1).jpeg",
    "Tiyeni/Screenshot 2025-02-03 at 2.12.59 PM.png"
]

function addSlideShowImages(img) {

    const imageContainer = document.createElement("div")

    imageContainer.classList.add("swiper-slide", "slide", "tw-rounded-md", "!tw-h-[450px]")

    imageContainer.innerHTML += `
                <img src="${img}" 
                        alt="hiking"
                        class="tw-object-cover tw-w-full tw-h-full">
    `
    slideShowContainer.prepend(imageContainer)

}

images.forEach(img => addSlideShowImages(img))

const countries = [
    "Lilongwe", "Blantyre", "Mzuzu", "Zomba", "Kasungu", 
    "Mangochi", "Karonga", "Nkhotakota", "Salima", "Liwonde", 
    "Nsanje", "Dedza", "Chikwawa", "Mchinji"
];

const places = [
    "Lake Malawi", "Liwonde National Park", "Mulanje Mountain", "Nyika National Park", "Cape Maclear", 
    "Majete Wildlife Reserve", "Zomba Plateau", "Vwaza Marsh Wildlife Reserve", "Kande Beach", "Nkhata Bay", 
    "Lengwe National Park", "Chongoni Rock Art Area", "Bua River Lodge", "Likoma Island"
];


const countriesContainer = document.querySelector(".countries-container")
const placeContainer = document.querySelector(".places-container")

function addSlidingPlace(place, container){
    
    const imageContainer = `
            <div class="tw-min-w-fit tw-p-2 tw-px-3 tw-w-max tw-h-[50px]
                        tw-border-solid tw-border-[1px] tw-flex 
                        tw-rounded-md tw-border-black
                        tw-place-items-center tw-place-content-center
                        tw-overflow-clip sliding-image">
                ${place}
            </div>
    `

    container.innerHTML += imageContainer

}


countries.forEach( img => addSlidingPlace(img, countriesContainer))
countries.forEach( img => addSlidingPlace(img, countriesContainer))

places.forEach( img => addSlidingPlace(img, placeContainer))
places.forEach( img => addSlidingPlace(img, placeContainer))
places.forEach( img => addSlidingPlace(img, placeContainer))


const swiper = new Swiper(".slideshow-container", {
    effect: "creative",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    creativeEffect: {
        prev: {
          shadow: true,
          origin: "left center",
          translate: ["-5%", 0, -200],
          rotate: [0, 100, 0],
        },
        next: {
          origin: "right center",
          translate: ["5%", 0, -200],
          rotate: [0, -100, 0],
        },
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    autoplay: {
        delay: 3000,
    },
})



const faqAccordion = document.querySelectorAll('.faq-accordion')

faqAccordion.forEach(function (btn) {
    btn.addEventListener('click', function () {
        this.classList.toggle('active')

        // Toggle 'rotate' class to rotate the arrow
        let content = this.nextElementSibling
        
        // content.classList.toggle('!tw-hidden')
        if (content.style.maxHeight === '200px') {
            content.style.maxHeight = '0px'
            content.style.padding = '0px 18px'

        } else {
            content.style.maxHeight = '200px'
            content.style.padding = '20px 18px'
        }
    })
})



// ------------- reveal section animations ---------------

const sections = gsap.utils.toArray("section")

sections.forEach((sec) => {

    const revealUptimeline = gsap.timeline({paused: true, 
                                            scrollTrigger: {
                                                            trigger: sec,
                                                            start: "10% 80%", // top of trigger hits the top of viewport
                                                            end: "20% 90%",
                                                            // markers: true,
                                                            // scrub: 1,
                                                        }})

    revealUptimeline.to(sec.querySelectorAll(".reveal-up"), {
        opacity: 1,
        duration: 0.8,
        y: "0%",
        stagger: 0.2,
    })


})

// Get references to the button, dialogue, and close button
const contactButton = document.getElementById('contactButton');
const contactDialog = document.getElementById('contactDialog');
const closeDialog = document.getElementById('closeDialog');

// Show the dialogue when the "Contact" button is clicked
contactButton.addEventListener('click', () => {
    contactDialog.style.display = 'flex';
});

// Hide the dialogue when the close button is clicked
closeDialog.addEventListener('click', () => {
    contactDialog.style.display = 'none';
});

// Hide the dialogue when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === contactDialog) {
        contactDialog.style.display = 'none';
    }
});

// Get references to article cards and dialogues
const article1 = document.getElementById('article1');
const article2 = document.getElementById('article2');
const article3 = document.getElementById('article3');

const dialog1 = document.getElementById('dialog1');
const dialog2 = document.getElementById('dialog2');
const dialog3 = document.getElementById('dialog3');

const articleCloseButtons = document.querySelectorAll('.article-close');

// Show dialogue for Article 1
article1.addEventListener('click', () => {
    dialog1.style.display = 'flex';
});

// Show dialogue for Article 2
article2.addEventListener('click', () => {
    dialog2.style.display = 'flex';
});

// Show dialogue for Article 3
article3.addEventListener('click', () => {
    dialog3.style.display = 'flex';
});

// Close dialogues when close button is clicked
articleCloseButtons.forEach((button) => {
    button.addEventListener('click', () => {
        dialog1.style.display = 'none';
        dialog2.style.display = 'none';
        dialog3.style.display = 'none';
    });
});

// Close dialogues when clicking outside
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('article-dialog')) {
        dialog1.style.display = 'none';
        dialog2.style.display = 'none';
        dialog3.style.display = 'none';
    }
});

window.addEventListener('scroll', () => {
    const section = document.getElementById('backchange');
    const scrollPosition = window.scrollY;
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollPosition / scrollMax) * 100;
    
    // Animate from right (100%) to left (0%)
    section.style.backgroundPosition = `${100 - scrollPercent}% 0%`; // Adjust both X and Y position
});

