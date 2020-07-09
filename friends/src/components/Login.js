import React from 'react';

export function Login () {

    const [credentials, setCredentials] = useState({username: "", password: ""})

    const handleChanges = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };
    const login = e => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={login}>
                <label>Username: </label>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChanges}
                    />
                    <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChanges}
                    />
                <button>Login</button>
            </form>
        </div>
    )
}
