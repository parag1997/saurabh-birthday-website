<template>
    <div class="bg-red-500 h-screen">
        <div class="flex justify-center">
            <p class="text-white font-bday text-5xl">
                Here's a small video for you...
            </p>
        </div>
        <div>
            <div class="flex justify-center mx-auto">
                <iframe src="https://player.vimeo.com/video/416829248" width="1080" height="460" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
        </div>
        <g-link to="/" class="flex justify-center">
            <button class="bg-white px-4 py-1 mt-10 rounded-md font-light">Back to Home</button>
        </g-link>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Niconne&display=swap');
.font-bday{
    font-family: 'Niconne', cursive;
}
</style>