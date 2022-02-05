let navbarheader = `
<nav class="navbar lg:flex justify-between sticky top-0">
<a href="#" class="brandLogo mx-4 navbar-brand ">
    <img class="rounded-full w-20 block py-2" src="../images/logo.jpeg" alt="City College">
</a>
<div class="burger lg:hidden absolute top-16 right-8 h-6 w-6 flex flex-col space-y-2 ">
    <span class="line h-3 bg-white "></span>
    <span class="line h-3 bg-white "></span>
    <span class="line h-3 bg-white "></span>
</div>
<div
    class="navbar-items-responsive lg:flex lg:justify-between lg:w-[80%] lg:static absolute top-3 navbar w-full mt-28 lg:mt-0 right-[100%] lg:right-0 transition-all duration-300">
    <div
        class="navigation lg:flex lg:space-x-7 lg:space-y-0 mx-2 space-y-2 flex flex-col lg:flex-row lg:items-center">
        <a class=" nav-item block text-white text-xl font-bold  py-2 rounded-lg px-3 hover:text-black transition-all duration-100 text-center mx-2 "
            href="../index.html">Home</a>
        <a class=" nav-item block text-white text-xl font-bold py-2 rounded-lg px-3 hover:text-black transition-all duration-100 text-center mx-2 active"
            href="#">Announcement</a>
        <a class=" nav-item block text-white text-xl font-bold  py-2 rounded-lg px-3 hover:text-black transition-all duration-100 text-center mx-2"
            href="#">About</a>
        <a class=" nav-item block text-white text-xl font-bold py-2 rounded-lg px-3 hover:text-black transition-all duration-100 text-center mx-2"
            href="#">Services</a>

    </div>
    <div
        class="loginData lg:flex lg:space-x-6 lg:flex-row lg:items-center mx-4 text-xl space-y-3 mt-3 lg:mt-0 lg:space-y-0">
        <button
            class="btn block lg:py-3 py-2 w-full px-4 rounded-lg transition-all duration-100 lg:w-auto ">Login</button>
        <button
            class="btn block lg:py-3 py-2 w-full px-4 rounded-lg transition-all duration-100 lg:w-auto ">Sign
            up</button>
    </div>
</div>
</nav>

`;


let announcementPage = `
<div class="announcementsPageDesign ">
<div
    class="sideBar h-screen lg:w-1/3 bg-gray-200 fixed right-0 overscroll-y-auto overflow-x-hidden rounded-2xl">
</div>
<i class="fas fa-plus fa-lg"></i>
<main class="h-screen overflow-y-auto">

</main>
</div>
`;


let homePage = `  <div class="Homebg h-screen bg-fixed relative">
            <div class="textContent w-1/2 flex flex-col items-center justify-center h-[60vh]">
                <h2 class="text-4xl text-white heading font-semibold">City College Warburton</h2>
                <h3 class="text-2xl text-white heading">(We Generate Knowledge)</h3>
                <p class="text-center text-white w-7/12 homeAboutText mt-12">Our College is City College Warburton. We
                    provide
                    top class
                    study into
                    students.
                    Our aim is
                    to make the Warburton students more knowlege able.</p>
            </div>
            <div class=" flex  space-x-6 -mt-20 justify-center w-1/2">
                <button class="btn block lg:py-3 py-2 w-full px-4 rounded-lg transition-all duration-100 lg:w-auto">Take
                    admission</button>
                <button
                    class="btn block lg:py-3 py-2 w-full px-4 rounded-lg transition-all duration-100 lg:w-auto ">Check
                    Result</button>
            </div>
        </div>`;
let aboutPage = `<div>About Screen</div>`;
let servicePage = `<div>Service Screen</div>`