
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
            <h1 class="font-bold text-3xl sm:text-5xl lg:text-6xl text-base-content">
                <span class="block z-10">Hi, I'm Laurent Savivanh!</span> 
                <span class="block z-10">I love coding.</span> 
                <span class="my-2 block text-lg font-light text-gray-400 sm:text-xl lg:text-3xl z-10">Software Engineer. Fullstack developer.</span>
            </h1>
        </div>
        <div class="light-surface-group absolute bottom-0 left-1/2 -translate-x-1/2 p-8">
            <a href="#about" aria-label="about">
                <div style="--mouse-x: -25px; --mouse-y: 44px;" class="light-surface rounded-full">
                    <span class="bg-page flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down "><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                    </span>
                </div>
            </a>
        </div>
    </section>
</section>
<section id="about" class="min-h-screen">
    <h1 class="text-3xl text-base-content">
        <span class="block">About me</span> 
    </h1>
    <div class="flex flex-col items-center justify-between lg:flex-row mb-12 mt-4 text-lg">
        <div class="lg:max-w-xl text-base-contentt">
            <p class="mb-2">Hello! My name is Laurent Savivanh, and i love everything that touch computer!</p>
            <p class="mb-2">I'm deeply passionate about the world of computer and technology. My journey began with a burning curiosity to understand how software and hardware collaborate to shape our modern world.</p>
            <p class="mb-2">With a solid foundation in computer science, I've embarked on a journey that has led me to explore various domains within the field. From algorithmic problem-solving that challenges my logical thinking, to web development...</p>
            <p class="mb-2">In my spare time, you'll find me learning and praticing new programming languages, experimenting with new web/gaming projects, or simply lost in the pages of philosophy book.</p>
            <p class="mb-2">Feel free to connect with me! I'm excited to engage in discussions, collaborate on projects, and share in the boundless possibilities that the world of computer offers!</p>
            <p class="mb-2">Recently, I have been working with these technologies:</p>
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
        <div class="avatar">
            <div class="lg:w-80 w-48 rounded-full">
              <img src={Laurent} alt="Laurent"/>
            </div>
        </div>
    </div>
</section>
<section id="project" class="min-h-screen">

</section>
<section id="experience" class="min-h-screen">

</section>
<section id="education" class="min-h-screen">

</section>
<section id="contact" class="min-h-screen">

</section>