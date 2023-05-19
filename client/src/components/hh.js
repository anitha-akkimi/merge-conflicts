import {useState} from 'react'
import {Link} from 'react-router-dom'


const ListItem = (props) => {

    const [isClicked, setIsClicked] = useState(false)

   const buttonStatus = isClicked ? "forcolor" : "btn-style"


    const {details} = props
    const {id, name, path} = details
    return (
        <>
        <Link to={path}>
        <button className={`${buttonStatus}`} onClick={() => setIsClicked(current => !current)}>{name}</button>
        </Link>
        </>

    )

}

export default ListItem