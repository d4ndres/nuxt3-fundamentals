export default defineNuxtRouteMiddleware((to, from) => {
    const userIsAuth = false
    if(!userIsAuth){
        // return abortNavigation("You're not allowed to visit /admin")
        return navigateTo({ name: 'login' })
    }
})
