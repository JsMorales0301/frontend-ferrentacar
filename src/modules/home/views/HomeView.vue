<template>

    <div class="separator-2">
        <h1 class="text-center">Welcome FerRentacar</h1>
        <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, magnam? Placeat omnis, esse odit laboriosam, doloremque a eius recusandae.</p>
    </div>

    <div class="vehicle-main separator-2">
        <img src="@/assets/home/mercedesAMG.webp" alt="carro-landing" class="vehicle">
    </div>

    <div class="separator-1">
        <FormHome />
    </div>

</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import '../styles/HomeView.css'

const FormHome = defineAsyncComponent(() => import('../components/FormHome.vue'))

</script>

