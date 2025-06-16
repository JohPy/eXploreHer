import React from 'react'

import {
    BottomNavigation,
    BottomNavigationAction
} from '@mui/material'

import {
    HealthAndSafety as HomeIcon,
    Pets as CatIcon,
    Person4 as ProfileIcon
} from '@mui/icons-material'

const NavigationBar = ({ navigationIndex, navigate }) => {
    return (
        <BottomNavigation
            showLabels
            value={navigationIndex}
            sx={{ width: '100%' }}
        >
            <BottomNavigationAction
                label="Home"
                icon={<HomeIcon />}
                onClick={() => navigate('/')}
            />
            <BottomNavigationAction
                label="Cat Names"
                icon={<CatIcon />}
                onClick={() => navigate('/catnames')}
            />
            <BottomNavigationAction
                label="Profile"
                icon={<ProfileIcon />}
                onClick={() => navigate('/profile')}
            />
        </BottomNavigation>
    );
}
export default NavigationBar;
