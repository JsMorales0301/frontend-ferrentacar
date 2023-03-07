<template>
    <h1 class="text-center">Login to your account</h1>

    <form class="form-login separator-2">
    
        <div class="field">
            <label for="email_user">Email address</label>
            <input type="email" id="email_user" class="input-login">
        </div>
    
        <div class="field separator-1">
            <label for="password_user">Password</label>
            <input type="password" id="password_user" class="input-login">
        </div>
    
        <div class="separator-2">
            <button class="btn">Login</button>
        </div>
    
        <div class="forgot-password separator-1">
            <a href="" class="text-center link-forgot">Forgot my password</a>
        </div>
    
    
        <div class="separator-2">
            <button class="btn">Register</button>
        </div>
    
    </form>
</template>