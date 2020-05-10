<template>
    <div>
        <!-- <h1>Happy Birthday!</h1>
        <p class="absolute">Saurabh!</p> -->
        <div>
            <div class="flex flex-wrap text-center justify-center mx-auto absolute pattern-vertical-lines-xl text-gray-300 h-full">
                <div class="w-full md:w-1/2">
                    <div class="mx-auto pt-20">
                        <g-image src="../assets/images/birthday.svg"  id="bImg" class="hidden md:block"></g-image>
                        <g-image src="../assets/images/birthday.svg"  class="mx-auto h-64 w-64 md:hidden"></g-image>
                    </div>
                </div>
                <div class="w-full md:w-1/2">
                    <div class="mx-auto">
                        <div class="flex flex-wrap items-center">
                            <div class="w-1/3">
                                <div class="flex mx-auto">
                                    <g-image src="../assets/images/bitmoji.png" class="h-28 w-40"></g-image>
                                </div>
                            </div>
                            <div class="w-2/3">
                                <p class="text-3xl text-gray-800 font-bday"><span class="text-gray-800 underline">May 10th, 2020</span></p>
                            </div>
                        </div>
                        <p class="text-4xl md:text-5xl text-gray-800 font-bday">Many Many Happy Return Of The Day <span class="text-red-500"> Saurabh...</span></p>
                        <p class="text-3xl md:text-5xl font-bday bg-yellow-400 shadow-2xl inline-block rounded-lg px-4 mt-6"> <span class="text-red-500 underline"> Happy 23rd Birthday!</span></p>
                    </div>
                    <g-link to="/video">
                        <button class="bg-green-700 px-4 py-1 mt-10 rounded-md font-light">Click Here to See More..</button>
                    </g-link>
                </div>
        </div>
            <canvas id="canvas"></canvas>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        let W = window.innerWidth;
        let H = window.innerHeight;
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");
        const maxConfettis = 150;
        const particles = [];

        const possibleColors = [
        "DodgerBlue",
        "OliveDrab",
        "Gold",
        "Pink",
        "SlateBlue",
        "LightBlue",
        "Gold",
        "Violet",
        "PaleGreen",
        "SteelBlue",
        "SandyBrown",
        "Chocolate",
        "Crimson"
        ];

        function randomFromTo(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
        }

        function confettiParticle() {
        this.x = Math.random() * W; // x
        this.y = Math.random() * H - H; // y
        this.r = randomFromTo(11, 33); // radius
        this.d = Math.random() * maxConfettis + 11;
        this.color =
            possibleColors[Math.floor(Math.random() * possibleColors.length)];
        this.tilt = Math.floor(Math.random() * 33) - 11;
        this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
        this.tiltAngle = 0;

        this.draw = function() {
            context.beginPath();
            context.lineWidth = this.r / 2;
            context.strokeStyle = this.color;
            context.moveTo(this.x + this.tilt + this.r / 3, this.y);
            context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
            return context.stroke();
        };
        }

        function Draw() {
        const results = [];

        // Magical recursive functional love
        requestAnimationFrame(Draw);

        context.clearRect(0, 0, W, window.innerHeight);

        for (var i = 0; i < maxConfettis; i++) {
            results.push(particles[i].draw());
        }

        let particle = {};
        let remainingFlakes = 0;
        for (var i = 0; i < maxConfettis; i++) {
            particle = particles[i];

            particle.tiltAngle += particle.tiltAngleIncremental;
            particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
            particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

            if (particle.y <= H) remainingFlakes++;

            // If a confetti has fluttered out of view,
            // bring it back to above the viewport and let if re-fall.
            if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
            particle.x = Math.random() * W;
            particle.y = -30;
            particle.tilt = Math.floor(Math.random() * 10) - 20;
            }
        }

        return results;
        }

        window.addEventListener(
        "resize",
        function() {
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        },
        false
        );

        // Push new confetti objects to `particles[]`
        for (var i = 0; i < maxConfettis; i++) {
        particles.push(new confettiParticle());
        }

        // Initialize
        canvas.width = W;
        canvas.height = H;
        Draw();

    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Niconne&display=swap');
body{
    background: #ffc800;
}
h1 {
  position: absolute;
  margin-top: 30vh;
  width: 100%;
  text-align: center;
  font-size: 333%;
  font-family: sans-serif;
  color: grey;
  opacity: 0.5;
}
#bImg{
  height: 460px;
  width: 460px;
}
.font-bday{
    font-family: 'Niconne', cursive;
}
canvas {
  overflow-y: hidden;
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  background: #ffc800;
}

</style>