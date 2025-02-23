// dropdown
const button = document.getElementById('dropdownbtn')
const listItems = document.querySelectorAll('.dropdownList li.hidden')
button.addEventListener('click', function() {
    listItems.forEach(function(item) {
        item.classList.toggle('hidden')
    })
})

// dark mode
const toggleDarkButton = document.getElementById('toggle-dark-mode');
toggleDarkButton.addEventListener('click', function() {
    document.body.classList.toggle("dark-mode");
});


// button click tracker
let clicks = 0;
display = document.querySelector('.display-number');
const clickTrackButton = document.getElementById('track-clicks');

clickTrackButton.addEventListener('click', function() {
    clicks +=1;
    display.innerText = `Number of clicks: ${clicks}`
})

const subtractClickButton = document.getElementById('remove-clicks');
subtractClickButton.addEventListener('click', function() {
    clicks -=1;
    display.innerText = `Number of clicks: ${clicks}`
})
