const button = document.getElementById('dropdownbtn')
const listItems = document.querySelectorAll('.dropdownList li.hidden')
button.addEventListener('click', function() {
    listItems.forEach(function(item) {
        item.classList.toggle('hidden')
    })
})