//welll.....it looks easier, but....

// const inputTextArea = document.getElementsByClassName('inputTextArea');
// console.log(inputTextArea);

// function displayTextArea(index) {
//   for (let i = 0; i < inputTextArea.length; i++) {
//     inputTextArea[i].style.display = "none";
//   }
//   inputTextArea[index].style.display = "block";
// }

//sourced from
//http://www.javascriptkit.com/javatutors/scrolling-html-bookmark-javascript.shtml
//& https://stackoverflow.com/questions/3163615/how-to-scroll-an-html-page-to-a-given-anchor#:~:text=The%20easiest%20way%20to%20to,your%20HTML%20navigation%20use%20%23NameOfTheSection%20.&text=This%20CSS%20method%20works%20great%20for%20me%20and%20is%20super%20elegant!
//I couldn't find any reason to change the code since it works great as is

// let anchorlinks = document.querySelectorAll('a[href^="#"]')

// for (let item of anchorlinks) {
//     item.addEventListener('click', (e)=> {
//         let hashval = item.getAttribute('href')
//         let target = document.querySelector(hashval)
//         target.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//         history.pushState(null, null, hashval)
//         e.preventDefault()
//     })
// }

//or this which was sourced from
//https://jsfiddle.net/jd7q25hg/12/
//orignially found on stackoverflow
//https://stackoverflow.com/questions/3163615/how-to-scroll-an-html-page-to-a-given-anchor#:~:text=The%20easiest%20way%20to%20to,your%20HTML%20navigation%20use%20%23NameOfTheSection%20.&text=This%20CSS%20method%20works%20great%20for%20me%20and%20is%20super%20elegant!

// function ScrollTo(name) {
//   //init thread
//   ScrollToResolver(document.getElementById(name));
// }

// function ScrollToResolver(elem) {
//   var jump = parseInt(elem.getBoundingClientRect().top * .2);
//   document.body.scrollTop += jump;
//   document.documentElement.scrollTop += jump;
//   //lastjump detects anchor unreachable, also manual scrolling to cancel animation if scroll > jump
//   if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
//     elem.lastjump = Math.abs(jump);
//     setTimeout(function() {
//       ScrollToResolver(elem);
//     }, "100");
//   } else {
//     elem.lastjump = null;
//   }
// }

//Code sourced from:
// 50 Projects In 50 Days - HTML, CSS & JS - 6 Scroll Animation || By Frontend Genius || #html #css #js
// https://www.youtube.com/watch?v=Yuc0UcHyFXc

// const inputTextArea = document.querySelector('.inputTextArea');
// console.log(inputTextArea);

// window.addEventListener('scroll', transitionTextBox);

// transitionTextBox();

// function transitionTextBox() {
//   const triggerBottom = window.innerHeight / 10;
//   const textBoxes = document.querySelectorAll('.inputTextArea');

//   textBoxes.forEach(textBox => {
//     const textBoxTop = textBox.getBoundingClientRect().top;

//     if(textBoxTop < triggerBottom) {
//       textBox.classList.add('transitionBox')
//     } else {
//       textBox.classList.remove('transitionBox');
//     }

//   });
// }

// My attempt to rewrite this code for the wrapper layers

const foreground = document.querySelector('.foreground');
console.log(foreground);

window.addEventListener('scroll', transitionForeground);

transitionForeground();

function transitionForeground() {
  const triggerBottom = window.innerHeight / 5 * 4;
  const foreground = document.querySelector('.foreground');

  const foregroundTop = foreground.getBoundingClientRect().top;

  if(foregroundTop < triggerBottom) {
    foreground.classList.add('transitionForeground')
  } else {
    foreground.classList.remove('transitionForeground');
  }
}

const middleground = document.querySelector('.middleground');
console.log(middleground);

window.addEventListener('scroll', transitionMiddleground);

transitionMiddleground();

function transitionMiddleground() {
  const triggerBottom = window.innerHeight / 5 * 4;
  const middleground = document.querySelector('.middleground');

  const middlegroundTop = middleground.getBoundingClientRect().top;

  if(middlegroundTop < triggerBottom) {
    middleground.classList.add('transitionMiddleground')
  } else {
    middleground.classList.remove('transitionMiddleground');
  }
}

const heroHeader = document.querySelector('#heroHeader');
console.log(heroHeader);

window.addEventListener('scroll', transitionHeroHeader);

transitionHeroHeader();

function transitionHeroHeader() {
  const triggerBottom = window.innerHeight / 5 * 4;
  const heroHeader = document.querySelector('#heroHeader');

  const heroHeaderTop = heroHeader.getBoundingClientRect().top;

  if(heroHeaderTop < triggerBottom) {
    heroHeader.classList.add('transitionHeroHeader')
  } else {
    heroHeader.classList.remove('transitionHeroHeader');
  }
}

// Wrapper div set to display none and display sections

removeWrapper();

function removeWrapper() {

  const skip = document.querySelector('#skipBtn');
  setTimeout(() => skip.style.opacity = '70%', 1000);
  setTimeout(() => skip.style.opacity = '40%', 1500);
  setTimeout(() => skip.style.opacity = '10%', 2000);
  setTimeout(() => skip.style.opacity = '0%', 2500);

  const wrapper = document.querySelector('.wrapper');
  setTimeout(() => wrapper.classList.add('display'), 18000);
  setTimeout(() => nav.classList.remove('display'), 18000);
  setTimeout(() => newSceneEntry.classList.remove('display'), 18000);
  setTimeout(() => sections.classList.remove('display'), 18000);

  const scrollToTopBtn = document.querySelector('#scrollToTopContainer');
  setTimeout(() => scrollToTopBtn.classList.remove('display'), 18000);
}

const skipHeroAnim = document.querySelector('#skipBtn');
skipHeroAnim.addEventListener('click', ()=>{
  const wrapperSkip = document.querySelector('.wrapper');
  wrapperSkip.style.display = 'none';
  nav.classList.remove('display');
  newSceneEntry.classList.remove('display');
  sections.classList.remove('display');
});

// My attempt to set active state on the nav link when in viewport

const section = document.querySelector('section');
console.log(section);

window.addEventListener('scroll', setActive);

setActive();

function setActive() {
  const triggerBottom = window.innerHeight / 5 * 4;
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom) {
      section.classList.add('active')
    } else {
      section.classList.remove('active');
    }
  });
}


// Code sourced from here:
// https://www.youtube.com/watch?v=QOWq3_zpOK4
// YouTube channel: dcode -- Detect DOM Changes With The Intersection Observer API - JavaScript Tutorial
// and https://www.youtube.com/watch?v=gQ8WggeHoJU&list=PLQIg5ltqYKppPcnn-Anucd5vrkXP9Oh1Y&index=50
// YouTube channel: Steve Griffith -- IntersectioObserver API

document.addEventListener('DOMContentLoaded', () => {
  let options = {
    root: null,
    rootMargin: "-250px -1px",
    threshold: 0.05
  };

  let observer = new IntersectionObserver(enterIntersection, options);
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
      console.log('watching', section.textContent);
    });
  });

  function enterIntersection(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log('intersecting');
      console.log(entry.target);
      console.log(entry.time, entry.intersectionRatio);
      entry.target.classlist.add('.nav-link:active');
    } else {
      entry.target.classList.remove('nav-link:active');
    }
  });
}

// Append character button to page as user creates a new character
// Add new character

const characterModal = document.querySelector('#characterModal');
const addCharacterButton = document.querySelector('#addCharacterBtn');
const closeButton = document.querySelector('.close');
const addAnotherButton = document.querySelector('#addAnotherBtn');
const characterForm = document.querySelector('#characterForm');
const addImage = document.querySelector('characterImageInput')

addCharacterButton.addEventListener('click', () => {
  characterModal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  characterModal.style.display = 'none';
  characterForm.reset();
});

addAnotherButton.addEventListener('click', () => {
  characterForm.reset();
});

characterForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const characterNameInput = document.querySelector('#characterNameInput');
  const characterImageInput = document.querySelector('#characterImageInput');

  const character = {
    name: characterNameInput.value,
    image: characterImageInput.value,
    additionalInfo: ""
  };

  createCharacterButton(character);
  characterForm.reset();

  characterNameInput.focus();

  const shouldAddAnother = confirm('Do you want to add another character?');
  if (!shouldAddAnother) {
    characterModal.style.display = 'none';
  }
});

function createCharacterButton(character) {
  const characterList = document.querySelector('#characterList');

  const link = document.createElement('a');
  link.setAttribute('href', "#${character.name}"),
  link.setAttribute('id', "${character.name}"),
  link.setAttribute('class', "button"),
  link.setAttribute('target', "_blank"),
  link.setAttribute('rel', "noopener noreferrer");
  link.innerText = `${character.name}`;
  // link.classList.add('button');

  // link.addEventListener("click", () => {
  //   character.additionalInfo = prompt("Enter additional information about the character:");
  //   // Update the DOM with the additional information
  //   const infoParagraph = document.createElement("p");
  //   infoParagraph.textContent = character.additionalInfo;
  //   charactersContainer.appendChild(infoParagraph);
  // });

  characterList.appendChild(link);
}

// Allow user to paste file name into character image input field
let imageInput = document.querySelector('#characterImageInput');
imageInput.addEventListener("paste", (event) => {
  const clipboardData = event.clipboardData || window.Clipboard;
  const pastedText = clipboardData.getData("text");
  imageInput.value = pastedText;
});
