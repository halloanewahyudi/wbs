<script setup>
import gsap from 'gsap';
import Logo from '/img/logo-white.svg'
import { onMounted } from 'vue';
function animasi() {
    gsap.timeline({ duration: 1 })
        .fromTo('.logo', {
            opacity: 0,
        }, {
            opacity: 1
        })
        .from('.logo', {
            top: '40%',
            left: '40%',
            translateX: '50%',
            translateY: '50%',
            scale: 2,
            delay: 1
        })
        .from('.kanan', {
            width: 0,
            duration:1
        })
        .from('.opening-text .item', {
            opacity: 0,
            translateX: -300,
            stagger: 1,
        })
}
onMounted(() => {
    animasi()
})
</script>
<template>
    <div
        class="min-h-screen overflow-x-hidden flex flex-col justify-center items-center bg-gradient-to-br from-brand-400 to-brand-600 text-white">
        <img :src="Logo" class="w-32 logo absolute top-10 left-10 z-50" alt="logo">
        <div class=" lg:flex gap-5 items-center justify-between w-screen">
            <div class="min-h-screen flex flex-col justify-center px-6 py-10">
                <div class="opening-text lg:-right-80 relative z-20 max-w-md">
                    <h1 class="item text-3xl lg:text-8xl font-bold"> Design</h1>
                    <h1 class="item text-3xl lg:text-8xl font-light">Architecture <br> & Build</h1>
                    <p class="item text-lg  tracking-wide mt-6">
                        merancang bangunan yang tidak hanya memikat mata dengan estetika yang modern dan inovatif, tetapi
                        juga memiliki dampak positif pada lingkungan.
                    </p>
                </div>
            </div>
            <div class="kanan w-full lg:w-1/2  h-screen relative z-0">
                <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-gray-900  opacity-40 z-0">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.kanan{
    background: url('/img/home-2.png')no-repeat;
    background-size: cover;
}
</style>
