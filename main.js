

var index = 1;
var nextButton = document.querySelector('.next-button');
var prevButton = document.querySelector('.prev-button')
var lessons = document.querySelectorAll('.lesson');
var refreshButton = document.querySelector('.refresh-button');

//This can be used for slideshows for other sites
setInitial();
function setInitial() {

    if (index > lessons.length) {
        index = 1
    }
    if (index < 1) {
        index = lessons.length
    }

    lessons[index - 1].style.display = 'block';
}

function hideLessons() {
    lessons.forEach((lesson) => {
        lesson.style.display = 'none'
    })
}
function addLesson() {
    hideLessons()
    index++;
    setInitial()

    console.log(index)
}

function showLessons() {
    lessons.forEach((lesson) => {
        lesson.style.display = 'block'
    })
    index = 1;
}

prevButton.addEventListener('click', () => {

    // if (index < 1) {
    //     index = lessons.length
    // }
    hideLessons()
    index--;
    setInitial()

    // lessons[index - 1].style.display = 'block';

})
nextButton.addEventListener('click', addLesson)
refreshButton.addEventListener('click', showLessons)




