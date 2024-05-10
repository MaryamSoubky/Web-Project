const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');

sidebarToggle.addEventListener('click', () => {
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
    } else {
        sidebar.style.left = '0px';
    }
});
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('sidebar-visible');
}