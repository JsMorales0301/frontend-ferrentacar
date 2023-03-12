<template>
    
    <section class="home-font">
        <header>
            <NavHome />
        </header>

        <main>
            <HomeView />
        </main>
    </section>

</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import '../styles/HomeLayout.css'

const NavHome = defineAsyncComponent(() => import('../components/NavHome.vue'))
const HomeView = defineAsyncComponent(() => import('../views/HomeView.vue'))

</script>

