let rootSyllableIndex = 1;
showRootSyllables();

function showRootSyllables() {
    let rootSyllables = document.querySelectorAll('.root-syllable');
    let length = rootSyllables.length;
    rootSyllables.forEach((rootS) => {
        rootS.style.display = 'none';
    })
    if (rootSyllableIndex > length) {
        rootSyllableIndex = 1;
    }
    if (rootSyllableIndex <= 0) {
        rootSyllableIndex = length;
    }
    rootSyllables[rootSyllableIndex - 1].style.display = 'block';

}

let nextRootButton = document.querySelector('#next-root-button');
let prevRootButton = document.querySelector('#prev-root-button');

nextRootButton.addEventListener('click', function () {
    rootSyllableIndex++;
    showRootSyllables();

})

prevRootButton.addEventListener('click', function () {
    rootSyllableIndex--;
    showRootSyllables();
})