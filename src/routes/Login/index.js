import React from 'react';

const Login = ({ users, handleUser }) => {

    return (
        <div className='shadow text-center radius-5 p-m mv-m'>
            <div className='font-bold text-primary p-m b-b cursor-default'>
                Welcome to Instads webiste
            </div>
            <div>
                <ul className="flex flex-column">
                    {users.map((user) => 
                     <li
                     key={user.id}
                     className="text-center btn btn-white border-0 p-m"
                     onClick={() => handleUser(user)}
                   >
                     {user.name}
                   </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Login