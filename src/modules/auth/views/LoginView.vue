<template>
    
    <section>
        <div class="container">
            <FormLogin />
        </div>
    </section>


</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import '../styles/LoginView.css'

const FormLogin = defineAsyncComponent(() => import('../components/FormLogin.vue'))

</script>

