import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutPage = () => {

const {user, setUser} = useContext(UserContext)


    return (
        <div>
        <h1>AboutPage</h1>
        <hr/>

        <pre>{JSON.stringify(user,null,3)}</pre>

        <button
        className= 'btn btn-warning'
        onClick = {() => setUser({})}>LogOut</button>
    </div>
    )
}
