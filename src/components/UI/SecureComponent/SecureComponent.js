import React from 'react'
import { useAuthUser, useSignOut } from 'react-auth-kit'

const SecureComponent = () => {
    const signOut = useSignOut()
    const authUser = useAuthUser()
    return (
        <div>
            <p>{`Hello ${authUser().email}, your U-ID is: ${authUser().password}`}</p>
            <button onClick={() => signOut()}>Sign Out!</button>
        </div>
    )
}

export default SecureComponent