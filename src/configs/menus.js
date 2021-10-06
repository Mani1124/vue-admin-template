const menus= [
    {
        icon: 'mdi-view-dashboard',
        children: [],
        title: 'Dashboard',
        route:'Dashboard',
        external:false,
        params:null,
    },
    {
        icon: 'mdi-calendar',
        children: [],
        title: 'Event Calendar',
        route:'EventCalendar',
        external:false,
        params:null,
    },
    {
        icon: 'mdi-cog',
        children: [],
        title: 'Setting',
        route:'Settings',
        external:false,
        params:null,
    },
    {
        icon: 'mdi-connection',
        active: false,
        children: [
            {

                title: 'Alert',
                route:'https://vuetifyjs.com/en/components/alerts',
                icon: 'mdi-alert',
                external:true,
                params:null,
            },
            {

                title: 'Buttons',
                route:'https://vuetifyjs.com/en/components/buttons/',
                icon: 'mdi-gesture-tap-button',
                external:true,
                params:null,
            },
            {

                title: 'Calendar',
                route:'https://vuetifyjs.com/en/components/calendars/',
                icon: 'mdi-calendar',
                params:null,
                external:true,
            },
            {

                title: 'Drawer',
                route:'https://vuetifyjs.com/en/components/navigation-drawers/',
                icon: 'mdi-format-horizontal-align-center',
                external:true,
                params:null,
            },

            {

                title: 'Cards',
                route:'https://vuetifyjs.com/en/components/cards/',
                icon: 'mdi-card-outline',
                external:true,
                params:null,
            },
            {

                title: 'Grid System',
                route:'https://vuetifyjs.com/en/components/grids',
                icon: 'mdi-grid',
                external:true,
                params:null,
            },
            {

                title: 'Date Picker',
                route:'https://vuetifyjs.com/en/components/date-pickers/',
                icon: 'mdi-calendar-range',
                external:true,
                params:null,
            },
            {
                title: 'More Components',
                route:'https://vuetifyjs.com',
                icon: 'mdi-dots-horizontal',
                external:true,
                params:null,
            },

        ],
        title: 'Components',
        external:false,
        params:null,
    },
    {
        icon: 'mdi-chart-bar',
        children: [],
        title: 'Apex Chart',
        route:'https://apexcharts.com/vue-chart-demos/',
        external:true,
        params:null,
    },
    {
        icon: 'mdi-text-box-multiple',
        children: [
            {

                title: 'Registration',
                route:'PageRegistration',
                icon: 'mdi-account-plus',
                params:{context:"page"},
                external:false,
            },
            {

                title: 'Sign In',
                route:'PageSignIn',
                icon: 'mdi-login',
                params:{context:"page"},
                external:false,
            },
            {

                title: 'Forget Password',
                route:'PageForgetPassword',
                icon: 'mdi-lock',
                params:{context:"page"},
                external:false,
            },
            {

                title: 'Recover Password',
                route:'PageRecoverPassword',
                icon: 'mdi-lock',
                params:{context:"page"},
                external:false,
            },
        ],
        title: 'Pages',
        route:'',
        external:false,
        params:null,
    },
]
export default menus;