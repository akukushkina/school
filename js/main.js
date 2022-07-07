// top line
const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

scrollTracker.animate(
  {
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    duration: 1,
    timeline: scrollTrackingTimeline,
  }
);

// animation for images

// boy
const animatedImages = document.querySelectorAll(".info__img");

window.addEventListener("scroll", checkImages);

checkImages();

function checkImages() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  animatedImages.forEach((image) => {
    const imageTop = image.getBoundingClientRect().top;
    if (imageTop < triggerBottom) {
      image.classList.add("show");
    } else {
      image.classList.remove("show");
    }
  });
};



// check email
