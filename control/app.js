/* Variable initialization */

let announcement = document.querySelector('.announcement');
let openButton = document.querySelector('.openButton');
let navbarItemResponsive = document.querySelector('.navbar-items-responsive');
let navItems = document.querySelectorAll('.nav-item');
let home = document.querySelector('.home');
let allContent = document.querySelector('.allContent');
let contentPageArray = [homePage, announcementPage, aboutPage, servicePage];

navItems.forEach((button, index) => {
    button.addEventListener('click', function () {
        navItems.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        setContent(contentPageArray[index]);
    });
});
openButton.addEventListener('click', () => {
    navbarItemResponsive.classList.toggle('w-full');
})
/**
 * This funciton set the content  of the page corrosponding to the button when the user clicks
 * @param {String}  contentPageData The content of page which will appear after click the navitem. 
 */
function setContent(contentPageData) {
    allContent.innerHTML = '';
    allContent.insertAdjacentHTML('afterbegin', contentPageData);
}
const closeNavbarButtonDesign = `&times;`;
const openNavbarButtonDesign = `&#9776;`;