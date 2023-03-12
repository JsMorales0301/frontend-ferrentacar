<template>
    <div class="container">

        <h1 class="">Create a new account</h1>

        <StepRegister />

        <!-- <FormRegisterViewOne /> -->

        <FormRegisterViewTwo />

    </div>
</template>

<script lang="ts" setup>
import StepRegister from '../components/StepRegister.vue';
// import FormRegisterViewOne from '../components/FormRegisterViewOne.vue';
import FormRegisterViewTwo from '../components/FormRegisterViewTwo.vue';
import '../styles/RegisterView.css'
</script>