
<style lang="css">
    #matrix {
        width: 100%;
        height: 100%;
    }
</style>


<script lang="ts">
	import { onMount } from "svelte";
    import {Effect} from "$lib/matrix";

    onMount(() => {
        const canvas = document.getElementById('matrix') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d')!;

        // Set the canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const effect = new Effect(canvas.width, canvas.height);

        let lastTime = 0;
        const fps = 30;
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
        <canvas id="matrix" class="absolute inset-x-0 z-9"></canvas>
    </div>
    <section id="intro" class="relative min-h-screen">
        <div class="absolute top-1/2 -translate-y-1/2">
            <h1 class="font-bold text-3xl sm:text-5xl lg:text-6xl text-base-content">
                <span class="block z-10">Hi, I'm Laurent Savivanh!</span> 
                <span class="block z-10">I like to code.</span> 
                <span class="my-2 block text-lg font-light text-gray-400 sm:text-xl lg:text-3xl z-10">Software Engineer. Fullstack developer.</span>
            </h1>
        </div>
    </section>
</section>
<section id="about">
    <h1 class="text-3xl text-base-content">
        <span class="block">Hi, I'm Laurent Savivanh!</span> 
        <span class="block">I like to code</span> 
        <span class="my-2 block text-lg font-light text-gray-400 sm:text-xl lg:text-3xl">Software Engineer. Fullstack developer.</span>
    </h1>
    <h1 class="text-3xl text-base-content">
        <span class="block">Hi, I'm Laurent Savivanh!</span> 
        <span class="block">I like to code</span> 
        <span class="my-2 block text-lg font-light text-gray-400 sm:text-xl lg:text-3xl">Software Engineer. Fullstack developer.</span>
    </h1>
    <h1 class="text-3xl text-base-content">
        <span class="block">Hi, I'm Laurent Savivanh!</span> 
        <span class="block">I like to code</span> 
        <span class="my-2 block text-lg font-light text-gray-400 sm:text-xl lg:text-3xl">Software Engineer. Fullstack developer.</span>
    </h1>
</section>
<section id="project">

</section>
<section id="experience">

</section>
<section id="education">

</section>
<section id="contact">

</section>