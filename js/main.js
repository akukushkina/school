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
const triggerBottom = (window.innerHeight / 5) * 4;
window.addEventListener("scroll", checkImages);

checkImages();

function checkImages() {
  animatedImages.forEach((image) => {
    const imageTop = image.getBoundingClientRect().top;
    if (imageTop < triggerBottom) {
      image.classList.add("show");
    }
  });
}

// articles
const article = document.querySelectorAll(".article");

window.addEventListener("scroll", checkArticles);

checkArticles();

function checkArticles() {
  article.forEach((article) => {
    const articleTop = article.getBoundingClientRect().top;
    if (articleTop < triggerBottom) {
      article.classList.add("scale");
    }
  });
}

// comments
const comments = document.querySelectorAll(".comment");

window.addEventListener("scroll", checkComments);

checkComments();

function checkComments() {
  comments.forEach((comment) => {
    const commentTop = comment.getBoundingClientRect().top;
    if (commentTop < triggerBottom) {
      comment.classList.add("slice");
    }
  });
}

// members
const members = document.querySelectorAll(".member");

window.addEventListener("scroll", checkMembers);

checkMembers();

function checkMembers() {
  members.forEach((member) => {
    const memberTop = member.getBoundingClientRect().top;
    if (memberTop < triggerBottom) {
      member.classList.add("slice");
    }
  });
}

// burger menu

const burger__btn = document.querySelector(".burger__menu");
const menu__list = document.querySelector(".menu__list");
burger__btn.onclick = function () {
  menu__list.classList.toggle("seen");
}

// check email
