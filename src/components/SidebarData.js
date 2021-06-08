import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as ImIcons from "react-icons/im"
import * as MdIcons from "react-icons/md"
import * as BiIcons from "react-icons/bi"

export const SidebarData=[
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },

    {
        title:'Students',
        path:'/students',
        icon:<ImIcons.ImProfile/>,
        cName: 'nav-text'
    },

    

    {
        title:'Courses',
        path:'/courses',
        icon:<ImIcons.ImBook/>,
        cName: 'nav-text'
    },

    {
        title:'Add Students',
        path:'/add-student',
        icon:<MdIcons.MdPersonAdd/>,
        cName: 'nav-text'
    },
    
    {
        title:'Add Courses',
        path:'/add-course',
        icon:<BiIcons.BiBookAdd/>,
        cName: 'nav-text'
    },
   

    


]