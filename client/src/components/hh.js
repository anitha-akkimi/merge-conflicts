import {useState} from 'react'

const ListItem = (props) => {

    const [isClicked, setIsClicked] = useState(false)

   const buttonStatus = isClicked ? "forcolor" : "btn-style"


    const {details} = props
    const {id, name} = details
    return (
        <>
        <button className={`${buttonStatus}`} onClick={() => setIsClicked(current => !current)}>{name}</button>
        </>

    )

}

export default ListItem