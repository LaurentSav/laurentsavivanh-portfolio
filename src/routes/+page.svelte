
<style lang="css">
    #matrix {
        width: 100%;
        height: 100%;
    }
</style>


<script lang="ts">
	import { onMount } from "svelte";
    import {Effect} from "$lib/matrix";
    import Laurent from "$lib/assets/Laurent.jpg"
    import LaurentSavivanhFr from "$lib/assets/laurentsavivanhfr.png"
    import UQAC from "$lib/assets/UQAC.png"
    import EILCO from "$lib/assets/EILCO.png"


    onMount(() => {
        const canvas = document.getElementById('matrix') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d')!;

        // Set the canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const effect = new Effect(canvas.width, canvas.height);

        let lastTime = 0;
        const fps = 20;
        const nextFrame = 1000/fps;
        let timer = 0;

        function animate(timeStamp: number){
            const deltaTime = timeStamp - lastTime;
            lastTime = timeStamp;
            if(timer > nextFrame){
                ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--matrix-background');
                ctx.textAlign = 'center';
                ctx.fillRect(0, 0, canvas.width, canvas.height)
                ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--matrix-letter');
                ctx.font = effect.fontSize + 'px monospace';
                effect.symbols.forEach(symbole => symbole.draw(ctx))
                timer = 0;
            }else{
                timer += deltaTime
            }
            requestAnimationFrame(animate);

        }
        animate(0);
        window.addEventListener('resize', function(){
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            effect.resize(canvas.width, canvas.height);
        });
    })
    
</script>

<section id="main">
    <div class="matrix-container">
        <canvas id="matrix" class="absolute inset-x-0 z-9 "></canvas>
    </div>
    <section id="intro" class="relative min-h-screen">
        <div class="absolute top-1/2 -translate-y-1/2">
            <h1 class="font-bold text-3xl sm:text-5xl lg:text-6xl title1">
                <span class="block z-10">Hi, I'm Laurent Savivanh!</span> 
                <span class="block z-10">I love <span class="text-secondary">coding</span>.</span> 
                <span class="my-2 block text-lg font-light text-gray-400 sm:text-xl lg:text-3xl z-10">Software Engineer. Fullstack developer.</span>
            </h1>
            <div class="flex gap-4 pb-6 pt-6 sm:gap-6">
                <a href="https://www.linkedin.com/in/laurentsavivanh/" target="_blank">
                    <div class="rounded-full bg-neutral-focus transition delay-50 duration-50 ease-in-out hover:scale-110">
                        <span class="bg-page text-white flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin "><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </span>
                    </div> 
                </a>
                <a href="https://github.com/LaurentSav" target="_blank">
                    <div class="rounded-full bg-neutral-focus transition delay-50 duration-50 ease-in-out hover:scale-110">
                        <span class="bg-page text-white flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github "><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </span>
                    </div> 
                </a>
            </div>
        </div>
        <div class="rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 p-2 mb-6">
            <a href="#about" aria-label="about">
                <div class="rounded-full">
                    <span class="bg-page flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down "><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                    </span>
                </div>
            </a>
        </div>
    </section>
</section>
<section id="about" class="min-h-screen">
    <h1 class="text-4xl text-base-content pt-16 lg:pt-24">
        <span class="block">About me</span> 
    </h1>
    <div class="flex flex-col items-center justify-between lg:flex-row mb-12 mt-4 text-lg">
        <div class="lg:max-w-xl text-base-content">
            <p class="mb-2">Hello! My name is <span class="text-secondary font-bold">Laurent Savivanh</span>, and i love everything that touch computer!</p>
            <p class="mb-2">I'm deeply passionate about the world of computer and technology. My journey began with a burning curiosity to understand how software and hardware collaborate to shape our modern world.</p>
            <p class="mb-2">With a solid foundation in computer science, I've embarked on a journey that has led me to explore various domains within the field. From algorithmic problem-solving that challenges my logical thinking, to web development...</p>
            <p class="mb-2">In my spare time, you'll find me learning and praticing new programming languages, experimenting with new web/gaming projects, or simply lost in the pages of philosophy book.</p>
            <p class="mb-2">Feel free to connect with me! I'm excited to engage in discussions, collaborate on projects, and share in the boundless possibilities that the world of computer offers!</p>
            <p class="mb-2 pt-12">Recently, I have been working with these technologies:</p>
            <div class="grid grid-cols-2">
                <ul style="list-style-type: circle;" class="list-inside">
                    <li class="mb-2">Spring Boot</li> 
                    <li class="mb-2">ASP.NET</li> 
                    <li class="mb-2">React</li>
                </ul> 
                <ul style="list-style-type: circle;" class="list-inside">
                    <li class="mb-2">SvelteKit</li> 
                    <li class="mb-2">JavaScript/TypeScript</li> 
                    <li class="mb-2">Tailwind CSS</li> 
                </ul> 
            </div>
        </div>
        <div class="avatar rounded-full ring ring-secondary mt-12 lg:pt-0 hover:scale-110 transition delay-75 duration-75 shadow-xl">
            <div class="lg:w-80 w-48 rounded-full">
              <img src={Laurent} alt="Laurent"/>
            </div>
        </div>
    </div>
</section>
<section id="project">
    <h1 class="text-4xl text-base-content pt-16 lg:pt-24">
        <span class="block">Projects</span> 
    </h1>
    <div class="flex flex-col justify-between lg:flex-row mb-12 mt-4 text-lg">
        <div class="lg:max-w-xl text-base-content pt-4">
            <h1 class="text-3xl text-secondary">
                <span class="block">laurentsavivanh.com</span>
            </h1>
            <p class="mb-2 pt-2">Portfolio website i made to introduce myself and most importantly, learn more about new trending framework!</p>
            <p class="mb-2 pt-2">I made several versions of this website using differents frameworks as years passed such as Angular (2020), React (2021) and Svelte (2023)</p>
            <p class="mb-2 pt-2">I used SvelteKit, Svelte, Tailwind CSS, DaisyUI, TypeScript, the website is entirely responsive.</p>
            <button class="mt-8 btn btn-active btn-ghost hover:scale-105 hover:bg-secondary"><a href="https://github.com/LaurentSav/laurentsavivanh-portfolio" target="_blank">Check out on Github!</a></button>
        </div>
        <div class="mt-16">
            <img id="imgProjet1" src={LaurentSavivanhFr} alt="laurentsavivanhfr" class="shadow-xl rounded-lg border-solid border-2 border-secondary w-96 h-48 object-fill transition delay-50 duration-50 ease-in-out hover:scale-105"/>
        </div>
    </div>
    <div class="flex flex-col justify-between lg:flex-row mb-12 mt-4 text-lg">
        <div class="lg:max-w-xl text-base-content pt-4">
            <h1 class="text-3xl">
                <span class="block">More <span class="text-secondary">projects</span> too come soon...</span>
            </h1>
        </div>
    </div>
</section>
<section id="experience">
    <h1 class="text-4xl text-base-content pt-16 lg:pt-24">
        <span class="block">Work Experience</span> 
    </h1>
    <div class="flex justify-center w-full">
        <div class="flex flex-col mb-12 mt-8 items-center lg:w-5/6">
            <div class="collapse collapse-arrow w-full outline outline-secondary outline-offset-0 transition delay-50 duration-50 ease-in-out hover:scale-105 hover:bg-secondary">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title title1 peer-checked:bg-secondary peer-checked:text-secondary-content py-4 lg:py-8">
                    <div class="flex flex-rox justify-between items-center gap-6 grow lg:text-lg md:font-medium w-full ">
                        <h1 class="font-semibold">Backend Java Developer <span>@Desjardins</span></h1>
                        <h1 class="font-semibold md:block hidden">Sept. 2021 - Today</h1>
                    </div>
                </div>
                <div class="collapse-content text-base-content"> 
                    <p class="pt-4">Worked within a scrum/agile team composed of developers and quality analysts to develop, implement and maintain internal Spring boot microservices (Rest API) in the context of bank financing</p>
                    <ul class="list-disc m-8">
                        <li class="mb-2">Developed new functionality and microservices using Java with the framework Spring boot</li>
                        <li class="mb-2">Used extensively Junit5 for unitary testing and Cucumber for integration testing</li>
                        <li class="mb-2">Developed and maintained CI/CD pipelines (Concourse) to rapidly iterate new features in the source code</li>
                        <li class="mb-2">Used Dynatrace and Splunk to monitor and debug the performance and health of microservices</li>
                    </ul>
                </div>
            </div >
            <div class="collapse collapse-arrow w-full outline outline-secondary outline-offset-0 mt-4 transition delay-50 duration-50 ease-in-out hover:scale-105 hover:bg-secondary">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title title1 peer-checked:bg-secondary peer-checked:text-secondary-content py-4 lg:py-8">
                    <div class="flex flex-rox justify-between items-center gap-6 grow lg:text-lg md:font-medium w-full ">
                        <h1 class="font-semibold">Software Engineer, Intern <span>@Landis+Gyr</span></h1>
                        <h1 class="font-semibold md:block hidden">June 2019 - Aug. 2019</h1>
                    </div>
                </div>
                <div class="collapse-content text-base-content"> 
                    <p class="pt-4">Internship as part of my engineering training in a company that makes industrial sensor, I used mainly C#, Visual Basics, Visual Studio and MYSQL.</p>
                    <ul class="list-disc m-8">
                        <li class="mb-2">Development of new features and resolution of bugs in internal software of the company</li>
                    </ul>
                </div>
            </div >
        </div>
    </div>
    
</section>
<section id="education">
    <h1 class="text-4xl text-base-content pt-16 lg:pt-24">
        <span class="block">Education</span> 
    </h1>
    <div class="mt-12 flex flex-col items-center justify-center gap-8 lg:flex-row">
        <div class="pt-4 card card-compact w-80 bg-base-100 shadow-xl outline outline-secondary outline-offset-0 transition delay-50 duration-50 ease-in-out hover:scale-105 hover:bg-secondary">
            <figure><img class="object-fill h-32 w-48" src={UQAC} alt="UQAC" /></figure>
            <div class="card-body">
              <h2 class="card-title">Master Degree, in Computer Science - University of Quebec at Chicoutimi</h2>
              <p>Chicoutimi, Canada, Sep. 2020 - Feb. 2022</p>
            </div>
          </div>
        <div class="pt-4 card card-compact w-80 bg-base-100 shadow-xl outline outline-secondary outline-offset-0 transition delay-50 duration-50 ease-in-out hover:scale-105 hover:bg-secondary">
            <figure><img class="object-fill h-32 w-64" src={EILCO} alt="EILCO" /></figure>
            <div class="card-body">
                <h2 class="card-title">Engineer Degree, in Computer Science - Engineering School of the Opal Coast</h2>
                <p>Calais, France, Sep. 2018 - Feb. 2022</p>
            </div>
        </div>
    </div>
</section>
<section id="contact">

</section>