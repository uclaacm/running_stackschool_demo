import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FeedPage from './FeedPage';
import ProfilePage from './ProfilePage';
import NavBar from '../components/Navbar';

function App() {
    return (
        <div className='main'>
            <NavBar />
            <Routes>
                <Route index element={<FeedPage />} />
                <Route path='/feed' element={<FeedPage />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        </div>
    );
}

export default App;