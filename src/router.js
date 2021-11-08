import Table from "./components/Table";
import userProfile from "./components/userProfile";


export  default [
    {
        path:"/",
        component:Table
    },
    {
        path:"/user-profile/:id",
        component:userProfile
    }
]