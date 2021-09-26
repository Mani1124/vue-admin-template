import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '',
            components: {
                root: () => import('./../layout/Public'),
            },
            children: [
                {
                    path: '',
                    name: 'SingIn',
                    meta: { name: 'Sign In' },
                    components: {
                        public: () => import('../pages/public/singin/SingIn'),
                    },
                },
                {
                    path: '/authentication/forget/password',
                    name: 'ForgetPassword',
                    meta: { name: 'Forget Password' },
                    components: {
                        public: () => import('../pages/public/forget_password/ForgetPassword'),
                    },
                },
                {
                    path: '/authentication/recover/password',
                    name: 'RecoverPassword',
                    meta: { name: 'Recover Password' },
                    components: {
                        public: () => import('../pages/public/forget_password/RecoverPassword'),
                    },
                },
            ],
        },
        {
            path: '/user',
            components: {
                root: () => import('../layout/Dashboard'),
            },
            children: [
                {
                    path: '',
                    name: 'Dashboard',
                    meta: { name: 'Dashboard' },
                    components: {
                        admin: () => import('../pages/authenticated/dashboard/Dashboard'),
                    },
                },
                {
                    path: 'page/singin/:context',
                    name: 'PageSignIn',
                    meta: { name: 'Sign In' },
                    components: {
                        admin: () => import('../pages/public/singin/SingIn'),
                    },
                },
                {
                    path: 'page/forget/password/:context',
                    name: 'PageForgetPassword',
                    meta: { name: 'Forget Password' },
                    components: {
                        admin: () => import('../pages/public/forget_password/ForgetPassword'),
                    },
                },
                {
                    path: 'page/recover/password/:context',
                    name: 'PageRecoverPassword',
                    meta: { name: 'Recover Password' },
                    components: {
                        admin: () => import('../pages/public/forget_password/RecoverPassword'),
                    },
                },
                {
                    path: 'page/create/account/:context',
                    name: 'PageRegistration',
                    meta: { name: 'Registration' },
                    components: {
                        admin: () => import('../pages/public/registration/Registration'),
                    },
                },
                {
                    path: '/account/settings',
                    name: 'Settings',
                    meta: { name: 'Settings' },
                    components: {
                        admin: () => import('../pages/authenticated/setting/Setting'),
                    },
                },
                {
                    path: '/logout',
                    name: 'Logout',
                    meta: { name: 'Logout' },
                    components: {
                        admin: () => import('../pages/authenticated/Logout'),
                    },
                },

            ],
        },

    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
