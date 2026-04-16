import React, { useState } from 'react';

function Register() {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/register/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, first_name: firstName, last_name: lastName, email, password })
        }).then(response => response.json())
          .then(data => console.log(data));
    };

    return (
        <div className="container mt-5">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" className="form-control" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" className="form-control" value={lastName} onChange={e => setLastName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default Register;
