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
  <div class="announcementsPageDesign h-[70vh]">
            <div
                class="sideBar h-screen lg:w-1/3 bg-gray-200 fixed right-0 overflow-y-auto overflow-x-hidden rounded-2xl mt-2">
                <div
                    class="blogLinkHeading text-3xl text-center font-semibold text-gray-800 select-none border-b-2 border-blue-700 pb-5">
                    Announcement
                    index
                </div>
                <div class="blogLinks divide-y-2 divide-gray-500 flex flex-col justify-around py-10">

                </div>
                <hr>
            </div>
            <a href="#"
                class="openAnnouncementModalBox relative top-2 left-2 inline-flex items-center space-x-4 bg-primary hover:bg-primary transition-all duration-100 rounded-l-2xl rounded-r-md "><i
                    class="fas fa-plus fa-4x text-accent"></i>
                <div class="text-2xl text-accent px-3">Create Announcement</div>
            </a>
            <!-- Create Announcement Modal Box Start. -->
            <div
                class="createAnnouncementModalBox bg-gray-400 lg:w-1/2 w-11/12 hidden top-20 z-20 left-1/2 -translate-x-1/2 p-2 py-4 h-[450px] shadow-[0_35px_100px_-15px_rgba(0,0,0,0.5)] rounded-md">
                <a href="#" class="closeModal text-4xl absolute top-1 right-2">&times;</a>
                <h3 class="text-2xl text-center select-none">Create Announcement.</h3>
                <input
                    class="title w-full focus:ring-8 transition-all duration-100 py-2 rounded-lg mt-5 focus:placeholder-transparent placeholder-gray-600 text-lg px-5 inputField"
                    type="text" placeholder="Enter announcement header.">

                <textarea name="CreateAnnouncement" id="announcementText"
                    class="inputField content w-full rounded-lg focus:ring-8 transition-all duration-300 h-3/5 resize-none my-4 p-4 focus:placeholder-transparent placeholder-gray-600 text-lg"
                    placeholder="Write your announcement here."></textarea>
                <button
                    class="btn createPostButton block w-full px-4 py-2 rounded-lg transition-all duration-100 bg-accent hover:bg-accent-hover text-lg focus:ring-4 focus:ring-yellow-500">Post
                    Announcement</button>
                <!-- Create Announcement Modal Box End. -->
            </div>

            <main class="h-full overflow-y-scroll lg:w-2/3 p-3 mt-20 no-scrollbar">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque consectetur ad, sed porro, nesciunt
                rerum animi dolor fugit laborum placeat magnam repellat ullam labore dolorum tempore voluptatem quo
                harum corrupti at minima. Aliquid magni mollitia cupiditate consectetur, quis praesentium doloremque
                sunt ex assumenda perspiciatis recusandae quos vitae dignissimos qui voluptatem repudiandae tempore
                minus? Dolore, rerum officia? Laboriosam error, reprehenderit voluptatem natus autem culpa tenetur
                recusandae animi saepe aperiam consequuntur ducimus! Atque deleniti nesciunt vitae facilis nisi, quis
                illum quos consectetur amet eveniet sed officiis voluptates dolor. Nesciunt magni dolor optio ea
                aspernatur incidunt eius? Commodi libero at exercitationem et iusto facilis eligendi, asperiores sed
                distinctio vel, repellendus voluptatem molestiae ipsa hic ipsum qui iste accusantium consectetur magni
                dolore enim voluptates. Commodi neque explicabo asperiores perferendis delectus! Optio fuga culpa
                nostrum, est dignissimos fugit sapiente sunt libero architecto voluptatibus porro aliquid illo assumenda
                deleniti ut autem nesciunt nulla nihil vel quam. Sunt quaerat quis pariatur totam praesentium possimus
                ducimus, dolores necessitatibus veniam maiores modi, vero a natus voluptas doloribus, ut error nesciunt.
                Ab nemo aliquid, repellat harum aperiam eligendi commodi sapiente cupiditate, voluptatum non excepturi,
                reprehenderit totam deserunt labore a eos aut. Aperiam corporis eius adipisci, sit debitis esse dicta,
                blanditiis tempora voluptatibus illo autem id repellendus incidunt est! Suscipit fugit adipisci quasi ex
                tempore omnis. Beatae cumque quam vero molestiae officiis omnis minus voluptatibus, similique optio
                ratione est tenetur consequuntur nulla enim quisquam sit, itaque at saepe nisi voluptas suscipit.
                Asperiores, molestias neque! Nisi architecto repellat quo minus. Est porro quis, illo deleniti minus
                veniam minima atque pariatur, facilis necessitatibus nihil aperiam delectus. Eius assumenda incidunt
                rerum laborum provident ratione fugit, accusantium nobis ullam earum corporis sed, repudiandae rem
                architecto vel! Nobis laboriosam quibusdam accusamus velit eos maxime cum porro, repudiandae dignissimos
                in quam voluptatum eius culpa alias tempore amet voluptatibus nemo dolorem beatae eveniet. Obcaecati,
                blanditiis, adipisci natus cumque consequatur, dolor fugiat ut itaque esse labore quam ullam eaque animi
                saepe deserunt dolore soluta earum illo quo illum architecto voluptas debitis. Nisi rerum, perferendis
                rem velit placeat animi blanditiis, molestias vero ut assumenda, adipisci porro aliquid facere. Ipsum
                adipisci dignissimos repudiandae facilis, possimus minus, maxime asperiores veniam quibusdam repellendus
                illum hic nostrum! In, ipsa quasi! Tenetur doloremque consequatur accusamus cum quaerat quasi voluptate
                ipsa! Facilis laborum consectetur maxime doloribus dicta minima provident corrupti odio quam eum
                corporis eius voluptas illo magni nisi perspiciatis earum ut hic praesentium accusamus, officia enim
                quos? Animi in est repellendus commodi praesentium rerum consequatur odio illum. Animi cupiditate,
                numquam blanditiis culpa maxime impedit perspiciatis labore iste velit deserunt est esse saepe quia
                ipsam voluptas, fugiat obcaecati doloribus nesciunt laborum, incidunt iure necessitatibus! Unde ullam
                similique nobis, illo quis ab? Aspernatur molestiae temporibus provident placeat blanditiis tempora
                aliquid odit maiores ipsa architecto. Libero amet reiciendis ea rerum tempora officiis repellendus quasi
                illum obcaecati eum assumenda distinctio hic eligendi sunt, aliquam ullam. Distinctio autem nesciunt
                quam quaerat commodi doloribus minima, ex vel tenetur nobis consequuntur dolor placeat sint rem enim
                voluptatum incidunt nemo voluptates sunt sequi.
            </main>
        </div>
    </div>
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
                <button
                    class="btn block lg:py-3 py-2 w-full px-4 rounded-lg transition-all duration-100 lg:w-auto bg-accent hover:bg-accent-hover">Take
                    admission</button>
                <button
                    class="btn block lg:py-3 py-2 w-full px-4 rounded-lg transition-all duration-100 lg:w-auto bg-accent hover:bg-accent-hover">Check
                    Result</button>
            </div>
        </div>`;


let aboutPage = `<div>About Screen</div>`;
let servicePage = `<div>Service Screen</div>`