import React, { useState } from 'react';
import { signup } from '../api/auth';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        password: '',
        profilePic: null,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => data.append(key, formData[key]));

        try {
            await signup(data);
            alert("Signup successful!");
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            <input
                type="date"
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <input
                type="file"
                onChange={(e) => setFormData({ ...formData, profilePic: e.target.files[0] })}
            />
            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;
