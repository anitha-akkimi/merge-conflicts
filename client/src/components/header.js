import {useState} from 'react'
import ListItem from './hh'

const userList = [
    {
        id : 1,
        name : "My Dashboard"
    }
,
    {
        id : 2,
        name : "Projects"
    }
,
    {
        id : 3,
        name : "My Tasks"
    }
,
    {
        id : 4,
        name : "Pull Requests"
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