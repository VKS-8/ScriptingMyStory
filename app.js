//welll.....it looks easier, but....

const inputTextArea = document.getElementsByClassName('inputTextArea');
console.log(inputTextArea);

function displayTextArea(index) {
  for (let i = 0; i < inputTextArea.length; i++) {
    inputTextArea[i].style.display = "none";
  }
  inputTextArea[index].style.display = "block";
}

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

function ScrollTo(name) {
  //init thread
  ScrollToResolver(document.getElementById(name));
}

function ScrollToResolver(elem) {
  var jump = parseInt(elem.getBoundingClientRect().top * .2);
  document.body.scrollTop += jump;
  document.documentElement.scrollTop += jump;
  //lastjump detects anchor unreachable, also manual scrolling to cancel animation if scroll > jump
  if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
    elem.lastjump = Math.abs(jump);
    setTimeout(function() {
      ScrollToResolver(elem);
    }, "100");
  } else {
    elem.lastjump = null;
  }
}
