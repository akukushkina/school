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

const animatedImages = document.querySelectorAll(".image-animate");
const infoAnimation = document.querySelector(".info__inner")



animatedImages.forEach( (image) =>{
    const animatedImageTimeline = new ScrollTimeline ({
    scrollOffsets: [
        {
            target: infoAnimation, edge: "end", threshold: "1"
        },
        {
            target: infoAnimation, edge:"start", threshold: "1"
        },
    ]
});
image.animate({
    transform: [
        "scale(0)",
        "scale(1)"
    ],
    opacity: ["0", "1"],
},
{
    duration: 1,
    timeline: animatedImageTimeline,
})
})



// check email
