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
import NavHome from '../components/NavHome.vue';
import HomeView from '../views/HomeView.vue';
import '../styles/HomeLayout.css'

</script>

