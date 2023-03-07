import { defineStore } from "pinia";
import { ref } from "vue";

import { authEndpoints } from './../endpoints/authEndpoints';
import { AxiosSingleton } from "@/api/AxiosSingleton";

export const useAuthStore = defineStore('auth', () => {

    const token = ref('')
    const email = ref('')

    const axios = AxiosSingleton.getInstance();

    async function loginUser( credentials: any ) {
        const { data, status } = await axios.post(authEndpoints.login, credentials)
        token.value = data.token;
        email.value = data.email;
        return status
    }

    return { token, email, loginUser }

})