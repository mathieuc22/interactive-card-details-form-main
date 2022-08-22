<template>
    <div class="w-screen h-screen flex font-Space flex-col md:flex-row">
        <div class="relative bg-mobile h-56 md:bg-desktop md:w-2/6 md:h-screen">
            <div
                class="absolute h-40 w-72 md:h-60 md:w-96 right-4 top-8 md:-right-1/2 md:top-2/3 md:-translate-y-1/2 bg-card-back bg-contain bg-no-repeat">
                <div class="text-white text-xs absolute top-1/2 -translate-y-1/2 right-9">123</div>
            </div>
            <div
                class="absolute h-40 w-72 md:h-60 md:w-96 left-4 -bottom-14 md:top-1/3 md:left-1/2 md:-translate-y-1/2 bg-card-front bg-contain bg-no-repeat">
                <img class="absolute top-4 left-4 w-14" src="src/assets/images/card-logo.svg" alt="">
                <div class="absolute text-white text-lg tracking-widest left-6 bottom-12">9591 6489 6389 1011</div>
                <div class="absolute text-white text-xs uppercase left-6 bottom-6">Felicia Leire</div>
                <div class="absolute text-white text-xs uppercase right-6 bottom-6">09/26</div>
            </div>
        </div>
        <div class="md:w-4/6">
        </div>
    </div>
</template>