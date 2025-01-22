import { useEffect, useState } from 'react';
import { getProfile } from '../api/auth';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const { data } = await getProfile(token);
                setProfile(data);
            } catch (error) {
                alert("Error fetching profile!");
            }
        };
        fetchProfile();
    }, []);

    if (!profile) return <p>Loading...</p>;

    return (
        <div>
            <h1>{profile.firstName} {profile.lastName}</h1>
            <img src={`http://localhost:5000/${profile.profilePic}`} alt="Profile" />
            <p>Date of Birth: {new Date(profile.dateOfBirth).toDateString()}</p>
            <p>Email: {profile.email}</p>
        </div>
    );
};

export default Profile;
