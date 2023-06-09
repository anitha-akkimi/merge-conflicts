import {useState} from 'react'
import ListItem from './hh'

const userList = [
    {
        id : 1,
        name : "My Dashboard",
        path : "/"
    }
,
    {
        id : 2,
        name : "Projects",
        path:"/projects"

    }
,
    {
        id : 3,
        name : "My Tasks",
        path:"/mytasks"
    }
,
    {
        id : 4,
        name : "Pull Requests",
        path:"/pullrequests"
    }
]
const Header = () => {
   

    return(
        <>
        <h1 className='main-heading'>MyApp</h1>
        
        <div className='btn-container'>
            {userList.map(each => <ListItem details={each} key={each.id}/>)}
        </div>
        
        </>
    )
}

export default Header