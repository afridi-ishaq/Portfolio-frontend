document.querySelectorAll('.control').forEach(control => {
  control.addEventListener('click', function () {
    // Remove active classes
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.control').forEach(btn => btn.classList.remove('active-btn'));

    // Add to clicked control
    this.classList.add('active-btn');

    // Get the section id from data-id
    const sectionId = this.dataset.id;
    document.getElementById(sectionId)?.classList.add('active');
  });
});
// Toggle theme
const themeBtn = document.querySelector('.theme-toggler');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
    themeBtn.classList.toggle('active');

});
