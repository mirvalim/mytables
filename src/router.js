import Table from "./components/Table";
import userProfile from "./components/userProfile";
import DataTable from "./components/DataTable";
import schedul from "./components/schedul";


export  default [
    {
        path:"/",
        component:Table
    },
    {
        path:"/user-profile/:id",
        component:userProfile
    },
    {
        path:"/data-table",
        component:DataTable
    },
    {
        path:"/schedul",
        component:schedul
    },
]