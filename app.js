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

const inputTextArea = document.querySelector('.inputTextArea');
console.log(inputTextArea);

window.addEventListener('scroll', transitionTextBox);

transitionTextBox();

function transitionTextBox() {
  const triggerBottom = window.innerHeight / 10;
  const textBoxes = document.querySelectorAll('.inputTextArea');

  textBoxes.forEach(textBox => {
    const textBoxTop = textBox.getBoundingClientRect().top;

    if(textBoxTop < triggerBottom) {
      textBox.classList.add('transition-box')
    } else {
      textBox.classList.remove('transition-box');
    }

  });
}

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

const wrapper = document.querySelector('.wrapper');
console.log(wrapper);

window.addEventListener('scroll', removeWrapper);

removeWrapper();

function removeWrapper() {

  const wrapper = document.querySelector('.wrapper');

  setTimeout(() => wrapper.innerHTML = '', 35000);

}




// My attempt to set active state on the nav link when in viewport
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
      entry.target.classlist.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}

