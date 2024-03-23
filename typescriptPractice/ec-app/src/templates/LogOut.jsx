import React from 'react'

import { PrimaryButton } from '../components/UIkit'

import { logout } from '../firebase'

const LogOut = () => {
    return (
        <div className='center'>
            <PrimaryButton label={"ログアウト"}
                onClick={() => logout()} />
        </div>
    )
}

export default LogOut