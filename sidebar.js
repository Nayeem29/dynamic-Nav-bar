const toggle = document.querySelector(".sidebar-toggle");

const sideBar = document.querySelector(".sidebar");

const closeBtn = document.querySelector(".close-btn");

toggle.addEventListener('click', function() {
    console.log(sideBar.classList)
    sideBar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', function() {
    sideBar.classList.remove('show-sidebar');
})