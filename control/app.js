/* Variable initialization */

let announcement = document.querySelector('.announcement');
let openButton = document.querySelector('.openButton');
let navbarItemResponsive = document.querySelector('.navbar-items-responsive');
let navItems = document.querySelectorAll('.nav-item');
let home = document.querySelector('.home');
let allContent = document.querySelector('.allContent');
let contentPageArray = [homePage, announcementPage, aboutPage, servicePage];
let closeModal, createAnnouncementModalBox, openAnnouncementModalBox, createPostButton, blogLocalStorageData, blogTitle, blogContent, blogLinks, inputFields;

navItems.forEach((button, index) => {
    button.addEventListener('click', function () {
        navItems.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        setContent(contentPageArray[index]);
    });
});
announcement.addEventListener('click', () => {
    initializationAnnouncementDOM();
    openAnnouncementModalBox.addEventListener('click', () => {
        createAnnouncementModalBox.classList.remove('hidden');
        createAnnouncementModalBox.classList.add('absolute');
    });
    inputFields.forEach(input => {
        input.value = '';
    });
    createPostButton.addEventListener('click', () => {
        let blogData = {
            title: blogTitle.value,
            content: blogContent.value
        }
        blogLocalStorageData.setItem(blogData.title, blogData.content);
        console.log(blogData.title);
        console.log(blogData.content);
        createAnnouncementModalBox.classList.add('hidden');
    });
    closeModal.addEventListener('click', () => {
        createAnnouncementModalBox.classList.add('hidden');
    });
});

openButton.addEventListener('click', () => {
    navbarItemResponsive.classList.toggle('w-full');
});






/**
 * This function set the content  of the page corrosponding to the button when the user clicks
 * @param {String}  contentPageData The content of page which will appear after click the navitem. 
 */
function setContent(contentPageData) {
    allContent.innerHTML = '';
    allContent.insertAdjacentHTML('afterbegin', contentPageData);
}



function initializationAnnouncementDOM() {
    closeModal = document.querySelector('.closeModal');
    createAnnouncementModalBox = document.querySelector('.createAnnouncementModalBox');
    openAnnouncementModalBox = document.querySelector('.openAnnouncementModalBox');
    createPostButton = document.querySelector('.createPostButton');
    blogLinks = document.querySelector('.blogLinks');
    inputFields = document.querySelectorAll('.inputField');
    blogLocalStorageData = localStorage;
    blogTitle = document.querySelector('.title');
    blogContent = document.querySelector('.content');
}



const closeNavbarButtonDesign = `&times;`;
const openNavbarButtonDesign = `&#9776;`;