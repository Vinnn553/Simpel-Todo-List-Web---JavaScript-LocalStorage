function filterDropdown() {
    document.getElementById('filterDropdown').classList.toggle('show-filter');
};

window.onclick = function(event) {
    if(!event.target.matches('.filterBtn')) {
        var filterDrop = document.getElementsByClassName('dropdown-content');
        var i;
        for (i = 0; i < filterDrop.length; i++) {
            var openDropdown = filterDrop[i];
            if (openDropdown.classList.contains('show-filter')) {
                openDropdown.classList.remove('show-filter')
            }
        }
    }
}

const modal = document.getElementById('myModal');
const addBtn = document.getElementById('addBtn');
const closeBtn = document.getElementById('closeBtn');

addBtn.onclick = (e) => {
    e.preventDefault()
    modal.classList.add('show-modal')
}

closeBtn.onclick = (e) => {
    e.preventDefault()
    modal.classList.remove('show-modal')
}

window.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.remove('show-modal')
    }
}