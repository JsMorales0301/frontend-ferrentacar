<template>
    <nav class="nav-home">
        <div>
            <a href="">HOME</a>
        </div>
        <div>
            <a href="">SVG</a>
        </div>
        <div>
            <router-link :to="{ name: 'login-user' }">LOGIN</router-link>
            <span class="separated">|</span>
            <a href="">REGISTER</a>
        </div>
    </nav>
</template>

<script setup lang="ts">
import '../styles/NavHome.css'
</script>