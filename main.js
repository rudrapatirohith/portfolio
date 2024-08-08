import './style.css'

import Typed from 'typed.js'

document.querySelector('#app').innerHTML = `
 
<div id="body" class="font-container px-4 sm:px-10 lg:px-20 bg-scroll">

  <main>
    <header>
  <nav class="text-white flex justify-between items-center py-6 px-0 ">
    <div class='flex gap-6'>
      <button data-text="Awesome" class="button1 dark:block hidden">
  <span class="actual-text">&nbsp;Rohith&nbsp;</span>
  <span class="hover-text1" aria-hidden="true">&nbsp;Rohith&nbsp;</span>
</button>
<button data-text="Awesome" class="button2 dark:hidden block">
  <span class="actual-text">&nbsp;Rohith&nbsp;</span>
  <span class="hover-text2" aria-hidden="true">&nbsp;Rohith&nbsp;</span>
</button>

    </div>
    
    <div id="menu" class="hidden md:flex duration-300 md:static md:min-h-fit lg:-ml-36 absolute min-h-[30vh] left-0 top-0 md:top-auto md:w-auto w-full flex flex-col md:flex-row md:items-center md:justify-center py-4 md:px-2 md:py-2 rounded-bl-md rounded-br-md md:rounded-lg border-solid border-2 border-zinc-400 dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-900">
    <ul class="flex flex-col md:flex-row gap-4 font-mono md:items-center text-xl align-middle justify-center md:bg-transparent px-4 rounded-full font-medium max-w-max mx-auto">
        <a href="/" class="text-xl font-sans align-middle font-bold leading-6 p-2 hover:white hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-md cursor-pointer text-gray-800 dark:text-gray-200">Home</a>
        <a href="#Experience" class="text-xl p-2 font-sans align-middle font-bold leading-6 hover:white hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-md cursor-pointer text-gray-800 dark:text-gray-200">Experience</a>
        <a href="#Projects" class="text-xl font-sans p-2 align-middle font-bold leading-6 hover:white hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-md cursor-pointer text-gray-800 dark:text-gray-200">Projects</a>
        <a href="#Skills" class="text-xl p-2 font-sans align-middle font-bold leading-6 hover:white hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-md cursor-pointer text-gray-800 dark:text-gray-200">Skills</a>
        <a href="#Education" class="text-xl p-2 font-sans align-middle font-bold leading-6 hover:white hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-md cursor-pointer text-gray-800 dark:text-gray-200">Education</a>
        <a href="#Certifications" class="text-xl p-2 font-sans align-middle font-bold leading-6 hover:white hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-md cursor-pointer text-gray-800 dark:text-gray-200">Certifications</a>
        <a href="#Contact" class="text-xl p-2 font-sans align-middle font-bold leading-6 hover:white hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-md cursor-pointer text-gray-800 dark:text-gray-200">Contact</a>
    </ul>
</div>


    <div class="flex items-center gap-6">
      <button name="light-dark-mode-toggle" id="theme-toggle" type="button" class="h-fit w-fit my-0 dark:text-white text-gray-500 hover:scale-110 transition-transform transform hover:bg-zinc-200 bg-zinc-100 dark:hover:bg-zinc-600 dark:bg-zinc-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
        <svg id="theme-toggle-dark-icon" class="hidden w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg id="theme-toggle-light-icon" class="hidden w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
      </button>
      <ion-icon id="toggle-menu-button" name="menu" class="w-7 h-7 dark:bg-zinc-800  p-2.5 rounded-lg cursor-pointer md:hidden text-gray-500 dark:text-gray-400 hover:scale-110 transition-transform transform hover:bg-zinc-200 bg-zinc-300 dark:hover:bg-zinc-600  "></ion-icon>
    </div>
  </nav>
</header>

    

    <div id="hero" class="mt-20 mb-20 ">
      <div class=""><!-- commented text-center for having the text at left instead of center-->
        <h1 class="text-gray-950 dark:text-gray-100 text-3xl md:text-5xl font-bold mb-2 tracking-tight">Rohith Rudrapati</h1>
        <div id="typed-strings">
          <p class="text-gray-600 dark:text-gray-400 text-1xl md:text-2xl max-w-screen-md mx-auto font-normal tracking-tight mb-4"> Web Developer • Tech Enthusiast • Engineer</p>
        </div>
        <span id="typed" class="dark:text-gray-400"></span>
        <div class="max-w-screen-md mt-2 "><!-- commented mx-auto for having the text at left instead of center-->
          <p class="text-gray-800 dark:text-gray-200 text-xl md:text-3xl tracking-tight">I am a passionate web developer, dedicated to creating unique digital experiences one step at a time. As a recent graduate with a Master's in Computer Science, I spend my free time developing websites and solving coding problems.</p>
        </div>
      </div>
      <div class=""><!-- commented text-center for having the text at left instead of center-->
        <p class="text-gray-600 dark:text-gray-400 text-xl md:text-2xl mt-4 tracking-tight">Connect with me here! ⬇️</p>
        <div class="mt-8 flex flex-wrap gap-5  mb-16"><!-- commented justify-center for having the text at left instead of center-->
          <a href="https://github.com/rudrapatirohith" aria-label="GitHub" class="dark:fill-white fill-black transition-transform hover:scale-150">
            <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/rudrapati-rohith/" aria-label="LinkedIn" class="dark:fill-white  transition-transform hover:scale-150 fill-black">
            <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/rohith_rudrapati/" aria-label="Instagram" class="dark:fill-white transition-transform  fill-black hover:scale-150">
            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          
        </div>
      </div>
    </div>

    <div id="Experience" class="mb-20 mt-20 pt-8">
    <h1 class="flex flex-col text-5xl font-bold tracking-tight text-gray-950 dark:text-gray-100 mb-8">Experience</h1>
    <div class="px-4 sm:px-10 lg:px-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Experience Block -->
            <div id="block" class="mt-4 p-3 shadow-md w-full max-w-sm dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-100 transition-transform">
                <h1 class="dark:text-gray-100 m-2 text-xl sm:text-2xl font-bold tracking-tight mb-2">Software Developer - Intern</h1>
                <h1 class="dark:text-gray-100 m-2 text-xl sm:text-2xl font-bold tracking-tight mb-2">Cybyte Inc</h1>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">As a Software Developer Intern, currently working on a hospital management project, I am responsible for backend development using TypeScript, Node.js, and Express.js. My role includes designing and implementing APIs, managing MySQL databases, and utilizing stored procedures to handle complex data operations and ensure efficient system performance.</p>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">August 2024 - Present</p>
            </div>

            <div id="block" class="mt-4 p-3 shadow-md w-full max-w-sm dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-100 transition-transform">
                <h1 class="dark:text-gray-100 m-2 text-xl sm:text-2xl font-bold tracking-tight mb-2">Full Stack Developer</h1>
                <h1 class="dark:text-gray-100 m-2 text-xl sm:text-2xl font-bold tracking-tight mb-2">Calsoft Pvt Ltd</h1>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">Joined as a full-stack developer, trained in web technologies and Python. Boosted the "Resume Role Detector" project to 98% accuracy, halved manual evaluation time, and improved user satisfaction by 30% through enhanced algorithms and a responsive React.js interface.</p>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">January 2022 - July 2022</p>
            </div>

            <div id="block" class="mt-4 p-3 shadow-md w-full max-w-sm dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-100 transition-transform">
                <h1 class="dark:text-gray-100 m-2 text-xl sm:text-2xl font-bold tracking-tight mb-2">Web Developer</h1>
                <h1 class="dark:text-gray-100 m-2 text-xl sm:text-2xl font-bold tracking-tight mb-2">The Sparks Foundation</h1>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">Joined as a web developer, trained in front-end technologies, and improved user satisfaction by 30% through implementing responsive design and modern web practices in web design fixes and enhancements.</p>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">August 2021 - September 2021</p>
            </div>

            <!-- Add more experience blocks as needed -->
        </div>
    </div>
</div>


    <section id="Projects" class="mt-20 mb-20 pt-8"><!-- added  py-10 for having the having section look better-->
      <div id="projects">
        <h1 class="text-gray-950 dark:text-gray-100 text-5xl font-bold tracking-tight mb-10 ">Projects</h1><!-- commented text-center for having the text at left instead of center-->
        <div id="cards" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 sm:px-10 lg:px-20">
          <div id="block" class="mt-8 shadow-md dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white  transform hover:scale-103 transition-transform">
            <img class="p-4 rounded-3xl" src="/ecommerce.png" alt="E-commerce Website">
            <h1 class="dark:text-gray-100 text-4xl font-bold tracking-tight mx-5">E-commerce Website</h1>
            <p class="dark:text-gray-100 font-semibold text-md tracking-tight p-2 mx-5">Enhanced user engagement by 40% with a responsive e-commerce platform, improved security and optimized CRUD operations, and integrated Stripe for secure payments.</p>
            <div class="flex mt-4 mx-5 mb-5">
              <a href="https://shopngrab.onrender.com/" class="bg-gray-900 dark:bg-gray-100 items-center hover:scale-110 transition-transform transform text-white dark:text-black flex gap-2 p-3 rounded-md font-medium">Website
                <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="https://github.com/rudrapatirohith/ShopNGrab" class="bg-gray-900  items-center hover:scale-110 transition-transform transform dark:bg-gray-100 text-white dark:text-black flex gap-2 p-3 rounded-md font-medium ml-5">Github
                <svg class="fill-white dark:fill-black" width="22" height="22" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          <div id="block" class="mt-8 shadow-md dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-103 transition-transform">
            <img class="p-4 rounded-3xl" src="/inotebook.png" alt="I-NoteBook">
            <h1 class="dark:text-gray-100 text-4xl font-bold tracking-tight mx-5">I-NoteBook</h1>
            <p class="dark:text-gray-100 font-semibold text-md tracking-tight p-2 mx-5">Boosted user interaction by 35% with a responsive ReactJS note-taking app, and enhanced security and data management with an Express backend, JWT tokens, and MongoDB.</p>
           <div class="flex mt-4 mx-5 mb-5">
              <a href="https://inotebookbyrohithrudrapati.netlify.app/" class="bg-gray-900 dark:bg-gray-100 items-center hover:scale-110 transition-transform transform text-white dark:text-black flex gap-2 p-3 rounded-md font-medium">Website
                <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="https://github.com/rudrapatirohith/inotebook" class="bg-gray-900  items-center hover:scale-110 transition-transform transform dark:bg-gray-100 text-white dark:text-black flex gap-2 p-3 rounded-md font-medium ml-5">Github
                <svg class="fill-white dark:fill-black" width="22" height="22" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>

          <div id="block" class="mt-8 shadow-md dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-103 transition-transform">
            <img class="p-4 rounded-3xl" src="/textutils.png" alt="TextUtils">
            <h1 class="dark:text-gray-100 text-4xl font-bold tracking-tight mx-5">TextUtils</h1>
            <p class="dark:text-gray-100 font-semibold text-md tracking-tight p-2 mx-5">Developed a text utility app with ReactJS, featuring interactive light/dark mode and text tools, improving user experience by 30%, while enhancing UI with Bootstrap and boosting productivity by 20% with clipboard functionalities.</p>

            <div class="flex mt-4 mx-5 mb-5">
              <a href="https://textutilsbyrohithrudrapati.netlify.app/" class="bg-gray-900 items-center  dark:bg-gray-100 hover:scale-110 transition-transform transform border-2  text-white dark:text-black flex gap-2 p-3 rounded-md font-medium">Website
                <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </a>
              <a href="https://github.com/rudrapatirohith/textutils" class="bg-gray-900  items-center hover:scale-110 transition-transform transform dark:bg-gray-100 text-white dark:text-black flex gap-2 p-3 rounded-md font-medium ml-5">Github
                <svg class="fill-white dark:fill-black" width="22" height="22" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <button id="a" class="mt-8 mb-16 flex  px-4 sm:px-10 lg:px-20 transition-transform hover:scale-105 "><!-- commented justify-center for having the text at left instead of center-->
          <p class="dark:text-gray-900 flex gap-2 text-2xl font-md dark:bg-gray-100 p-3 rounded-lg text-gray-100 bg-gray-900 tracking-tight">
            <a class="flex gap-2" href="#">View more projects
              <svg width="34" height="34" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
              </svg>
            </a>
          </p>
        </button>
        
        

      </div>
    </section>


<div id="Skills" class="mb-20  mt-20 pt-8">
    <h1 class="flex flex-col text-5xl font-bold tracking-tight text-gray-950 dark:text-gray-100 mb-8 ">Skill</h1>
    <!-- commented text-center for having the text at left instead of center-->

    <div class="px-4 sm:px-10 lg:px-20">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <!-- Languages and Frameworks -->
            <div id="block" class="mt-8 p-4 grid col-span-1 shadow-md w-full dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-105 transition-transform">
                <h1 class="dark:text-gray-100 m-3 text-2xl sm:text-4xl font-bold tracking-tight mb-4">Languages and Frameworks</h1>
                <div class="flex flex-wrap gap-3 px-2 sm:px-5 pt-3 sm:pt-6">
                    <a href="https://www.w3schools.com/html/" target="_blank" class="skill-icon" title="HTML">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=html" alt="HTML">
                        <span class="skill-name">HTML</span>
                    </a>
                    <a href="https://www.w3schools.com/css/" target="_blank" class="skill-icon" title="CSS">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=css" alt="CSS">
                        <span class="skill-name">CSS</span>
                    </a>
                    <a href="https://www.w3schools.com/js/" target="_blank" class="skill-icon" title="JavaScript">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=javascript" alt="JavaScript">
                        <span class="skill-name">JavaScript</span>
                    </a>
                    <a href="https://www.w3schools.com/react/" target="_blank" class="skill-icon" title="React.js">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=react" alt="React.js">
                        <span class="skill-name">React.js</span>
                    </a>
                    <a href="https://www.w3schools.com/nodejs/" target="_blank" class="skill-icon" title="Node.js">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=nodejs" alt="Node.js">
                        <span class="skill-name">Node.js</span>
                    </a>
                    <a href="https://www.w3schools.com/express/" target="_blank" class="skill-icon" title="Express.js">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=expressjs" alt="Express.js">
                        <span class="skill-name">Express.js</span>
                    </a>
                     <a href="https://www.w3schools.com/typescript/" target="_blank" class="skill-icon" title="TypeScript">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=typescript" alt="TypeScript">
                        <span class="skill-name">TypeScript</span>
                    </a>
                    <a href="https://www.w3schools.com/redux/" target="_blank" class="skill-icon" title="Redux">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=redux" alt="Redux">
                        <span class="skill-name">Redux</span>
                    </a>
                    <a href="https://www.w3schools.com/java/" target="_blank" class="skill-icon" title="Java">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=java" alt="Java">
                        <span class="skill-name">Java</span>
                    </a>
                    <a href="https://www.w3schools.com/python/" target="_blank" class="skill-icon" title="Python">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=python" alt="Python">
                        <span class="skill-name">Python</span>
                    </a>
                    <a href="https://www.w3schools.com/tailwindcss/" target="_blank" class="skill-icon" title="TailwindCSS">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=tailwindcss" alt="TailwindCSS">
                        <span class="skill-name">TailwindCSS</span>
                    </a>
                    <a href="https://www.w3schools.com/bootstrap/" target="_blank" class="skill-icon" title="Bootstrap">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap">
                        <span class="skill-name">Bootstrap</span>
                    </a>
                </div>
            </div>

            <!-- Database and Tools -->
            <div id="block" class="mt-8 p-4 grid col-span-1 shadow-md w-full dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-105 transition-transform">
                <h1 class=" dark:text-gray-100 text-2xl m-3 sm:text-4xl font-bold tracking-tight mb-4">Database and Tools</h1>
                <div class="flex flex-wrap gap-3 px-2 sm:px-5 pt-3 sm:pt-6">
                    <a href="https://www.w3schools.com/mysql/" target="_blank" class="skill-icon" title="MySQL">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=mysql" alt="MySQL">
                        <span class="skill-name">MySQL</span>
                    </a>
                    <a href="https://www.w3schools.com/mongodb/" target="_blank" class="skill-icon" title="MongoDB">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB">
                        <span class="skill-name">MongoDB</span>
                    </a>
                    <a href="https://www.w3schools.com/vscode/" target="_blank" class="skill-icon" title="VS Code">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=vscode" alt="VS Code">
                        <span class="skill-name">VS Code</span>
                    </a>
                    <a href="https://www.w3schools.com/eclipse/" target="_blank" class="skill-icon" title="Eclipse">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=eclipse" alt="Eclipse">
                        <span class="skill-name">Eclipse</span>
                    </a>
                    <a href="https://www.w3schools.com/vercel/" target="_blank" class="skill-icon" title="Vercel">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=vercel" alt="Vercel">
                        <span class="skill-name">Vercel</span>
                    </a>
                    <a href="https://www.w3schools.com/netlify/" target="_blank" class="skill-icon" title="Netlify">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=netlify" alt="Netlify">
                        <span class="skill-name">Netlify</span>
                    </a>
                    <a href="https://www.w3schools.com/figma/" target="_blank" class="skill-icon" title="Figma">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=figma" alt="Figma">
                        <span class="skill-name">Figma</span>
                    </a>
                    <a href="https://www.w3schools.com/docker/" target="_blank" class="skill-icon" title="Docker">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=docker" alt="Docker">
                        <span class="skill-name">Docker</span>
                    </a>
                    <a href="https://www.w3schools.com/kubernetes/" target="_blank" class="skill-icon" title="Kubernetes">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=kubernetes" alt="Kubernetes">
                        <span class="skill-name">Kubernetes</span>
                    </a>
                    <a href="https://www.w3schools.com/git/" target="_blank" class="skill-icon" title="Git">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=git" alt="Git">
                        <span class="skill-name">Git</span>
                    </a>
                    <a href="https://www.w3schools.com/github/" target="_blank" class="skill-icon" title="GitHub">
                        <img class="w-8 h-8 sm:w-16 sm:h-16 mb-5" src="https://skillicons.dev/icons?i=github" alt="GitHub">
                        <span class="skill-name">GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Education Section -->
<div id="Education" class="mb-20 mt-20 pt-8">
    <h1 class="flex flex-col text-5xl font-bold tracking-tight text-gray-950 dark:text-gray-100 mb-8">Education</h1>
    <div class="px-4 sm:px-10 lg:px-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Education Block -->
            <div id="block" class="mt-4 p-3 shadow-md w-full max-w-sm dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-100 transition-transform">
                <h1 class="dark:text-gray-100 m-2 text-xl sm:text-2xl font-bold tracking-tight mb-2">Masters in Computer Science</h1>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">Univeristy Of Missouri-Kansas City</p>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">GPA: 3.822/4</p>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">Graduated: May 2024</p>
            </div>

             </div>
    </div>
</div>


<!-- Certifications Section -->
<div id="Certifications" class="mb-20 mt-20 pt-8">
    <h1 class="flex flex-col text-5xl font-bold tracking-tight text-gray-950 dark:text-gray-100 mb-8">Certifications</h1>
    <div class="px-4 sm:px-10 lg:px-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Certification Block -->
            <div id="block" class="mt-4 p-3 shadow-md w-full max-w-sm dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-100 transition-transform">
                <h1 class="dark:text-gray-100 m-2 text-xl sm:text-2xl font-bold tracking-tight mb-2">AWS Certified Cloud Practitioner</h1>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">Amazon Web Services Training and Certification</p>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">Issued: July 2024</p>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">
                <div class="flex mt-4 mx-2 mb-5">
                <a href="https://www.credly.com/badges/4b8f9366-dd93-47fb-ab73-de916d09a6d9" class="bg-gray-900 items-center  dark:bg-gray-100 hover:scale-110 transition-transform transform border-2  text-white dark:text-black flex gap-2 p-3 rounded-md font-medium">Link
                <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </a>
              </div>
                </p>

            </div>

            <div id="block" class="mt-4 p-3 shadow-md w-full max-w-sm dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-100 transition-transform">
                <h1 class="dark:text-gray-100 m-2 text-xl sm:text-2xl font-bold tracking-tight mb-2">Full Stack Engineer</h1>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">Codecademy</p>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">Issued: April 2024</p>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">
                <div class="flex mt-4 mx-2 mb-5">
                <a href="https://www.codecademy.com/profiles/Rohith_Rudrapati/certificates/ffd0f42cce1a44e9a0108b365047a0a6" class="bg-gray-900 items-center  dark:bg-gray-100 hover:scale-110 transition-transform transform border-2  text-white dark:text-black flex gap-2 p-3 rounded-md font-medium">Link
                <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </a>
              </div>
                </p>

            </div>

             <div id="block" class="mt-4 p-3 shadow-md w-full max-w-sm dark:bg-zinc-900 bg-zinc-100 rounded-xl border-2 border-solid border-zinc-400 dark:border-zinc-700 hover:border-zinc-600 dark:hover:border-white transform hover:scale-100 transition-transform">
                <h1 class="dark:text-gray-100 m-2 text-xl sm:text-2xl font-bold tracking-tight mb-2">Core Java and Advanced Data Structures</h1>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">GeeksForGeeks</p>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">Issued: August 2021</p>
                <p class="dark:text-gray-300 m-2 text-md sm:text-lg mb-2">
                <div class="flex mt-4 mx-2 mb-5">
                <a href="https://www.geeksforgeeks.org/certificate/e7039d03a8d48f6d7cc9727a021f2c77" class="bg-gray-900 items-center  dark:bg-gray-100 hover:scale-110 transition-transform transform border-2  text-white dark:text-black flex gap-2 p-3 rounded-md font-medium">Link
                <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </a>
              </div>
                </p>

            </div>

            <!-- Add more certification blocks as needed -->
        </div>
    </div>
</div>



<div id="Contact" class="mt-20 mb-20 pt-8 ">
  <h1 class="dark:text-gray-100 mb-16 text-5xl font-bold tracking-tight ">Contact</h1><!-- commented text-center for having the text at left instead of center-->
  <div id="block" class="flex justify-center items-center">
         <!--<form action="https://api.web3forms.com/submit" method="POST" class="w-full max-w-2xl lg:max-w-4xl"> this form is commented for removing captcha and to improve/change reponsivenes if needed switch back to it or it classes-->
    <form
  action="https://formspree.io/f/mvoejjvq"
  method="POST"
>
      <input type="hidden" name="access_key" value="ad73a3b2-ca2f-45bc-918a-5c642ff8ebf7" />
      
      <div class="dark:bg-zinc-900 bg-zinc-100 border-zinc-300 dark:border-zinc-700 border-solid border-2 p-4 rounded-xl shadow-lg">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 mb-8 md:mb-0 p-4">
            <h1 class="text-3xl dark:text-gray-100 font-bold mb-4">Contact Me</h1>
            <p class="dark:text-gray-100 mb-6">Any questions or discussions? Just write me a message!</p>
            <div class=" grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" autocomplete="given-name" placeholder="John" name="first-name" required class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <input type="text" autocomplete="given-name" placeholder="Doe" name="last-name" class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="form-group mt-4">
              <input type="email" autocomplete="given-email" name="email" required placeholder="lucas@mail.com" class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="form-group mt-4">
              <textarea id="message" name="message" placeholder="Your Message" class="border border-gray-300 rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
             
            <!-- <div class="h-captcha" data-captcha="true"></div>-->
            <button type="submit" class="form-submit bg-gray-900 dark:bg-gray-100 text-white dark:text-black font-medium px-6 py-2 rounded-md mt-4 dark:hover:bg-gray-300 hover:scale-110 transform transition-transform duration-300">SEND MESSAGE</button>
          </div>
    </form>
    <div class="md:w-1/2  bg-zinc-200 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 p-8 rounded-lg">
      <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
      <p class="mb-6">Fill up the form and send me your message or contact through below details</p>
      <div class="flex items-center mb-4">
        <i class="fas fa-phone mr-4"></i>
        <span>+1 8168598875</span>
      </div>
      <div class="flex items-center mb-4">
        <i class="fas fa-envelope mr-4"></i>
        <span>rudrapatirohith1@gmail.com</span>
      </div>
    <div class="mt-6 flex flex-row gap-5 ml-4">
     <a href="https://github.com/rudrapatirohith" aria-label="GitHub" class="dark:fill-white fill-black transition-transform hover:scale-150">
            <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/rudrapati-rohith/" aria-label="LinkedIn" class="dark:fill-white  transition-transform hover:scale-150 fill-black">
            <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/rohith_rudrapati/" aria-label="Instagram" class="dark:fill-white transition-transform  fill-black hover:scale-150">
            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          
    </div>
    <div class="flex items-center ml-4 my-4">
    </div>
    <button class="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-lg hover:bg-opacity-70 transition font-semibold shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
          <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
          <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Interface / Download">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path>
            </g>
          </g>
        </svg><a href="https://drive.google.com/uc?export=download&id=1lJ-1plG3jLsxS7mqQCGgMuM_UlH4V0oB">
        Resume</a>
        <div class="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
          <a href="https://drive.google.com/uc?export=download&id=1lJ-1plG3jLsxS7mqQCGgMuM_UlH4V0oB">Resume</a>
        </div>
      </button>
      </div>
  </div>
</div>
</div>
</main>


</div>



`
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  themeToggleLightIcon.classList.remove('hidden')
} else {
  themeToggleDarkIcon.classList.remove('hidden')
}

var themeToggleBtn = document.getElementById('theme-toggle')

themeToggleBtn.addEventListener('click', function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle('hidden')
  themeToggleLightIcon.classList.toggle('hidden')

  // if set via local storage previously
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }
})
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  backSpeed: 40,
  typeSpeed: 60
})
/*
document
  .getElementById('toggle-menu-button')
  .addEventListener('click', function () {
    var menu = document.getElementById('menu')
    if (menu.style.top === '0px') {
      menu.style.top = '-100%'
    } else {
      menu.style.top = '0px'
    }
  })*/
const toggleMenuButton = document.getElementById('toggle-menu-button')
const menu = document.getElementById('menu')

toggleMenuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})
