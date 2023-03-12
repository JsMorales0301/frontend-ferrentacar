<template>
    <div class="container">

        <h1>Create a new account</h1>

        <StepRegister />

        <FormRegisterViewOne />

        <!-- <FormRegisterViewTwo /> -->

    </div>
</template>

<script lang="ts" setup>
import FormRegisterViewOne from '../components/FormRegisterViewOne.vue';
import '../styles/RegisterView.css'
import { defineAsyncComponent } from 'vue';

const StepRegister = defineAsyncComponent(() => import('../components/StepRegister.vue'))
const FormRegisterViewTwo = defineAsyncComponent(() => import('../components/FormRegisterViewTwo.vue'))

</script>