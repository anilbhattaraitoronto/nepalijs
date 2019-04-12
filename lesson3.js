let extendedRootSyllableIndex = 1;
showExtendedRootSyllables();

function showExtendedRootSyllables() {
    let extendedRootSyllables = document.querySelectorAll('.extended-root-syllable');
    let length = extendedRootSyllables.length;
    extendedRootSyllables.forEach((roots) => {
        roots.style.display = 'none';
    })
    if (extendedRootSyllableIndex > length) {
        extendedRootSyllableIndex = 1;
    }
    if (extendedRootSyllableIndex <= 0) {
        extendedRootSyllableIndex = length;
    }
    extendedRootSyllables[extendedRootSyllableIndex - 1].style.display = 'block';

}

let nextExtendedButton = document.querySelector('#next-extended-syllable-button');
let prevExtendedButton = document.querySelector('#prev-extended-syllable-button');

nextExtendedButton.addEventListener('click', function () {
    extendedRootSyllableIndex++;
    showExtendedRootSyllables();

})

prevExtendedButton.addEventListener('click', function () {
    extendedRootSyllableIndex--;
    showExtendedRootSyllables();
})