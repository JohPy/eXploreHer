import React from 'react'

import {
    BottomNavigation,
    BottomNavigationAction
} from '@mui/material'

import {
    Pets as CatIcon,
    Person4 as ProfileIcon,
    Settings as SettingsIcon
} from '@mui/icons-material'

import HomeIcon from './Icons/HomeIcon'

const NavigationBar = ({ navigationIndex, navigate }) => {
    const iconStyle = { width: 30, height: 30 };

    return (
        <div style={{ borderTop: '1px solid #ccc', width: '100%' }}>
            <BottomNavigation
                showLabels
                value={navigationIndex}
                sx={{ width: '100%' }}
            >
                <BottomNavigationAction
                    icon={<HomeIcon style={iconStyle} />}
                    onClick={() => navigate('/')}
                />
                <BottomNavigationAction
                    label="Cat Names"
                    icon={<CatIcon style={iconStyle} />}
                    onClick={() => navigate('/catnames')}
                />
                <BottomNavigationAction
                    label="Profile"
                    icon={<ProfileIcon style={iconStyle} />}
                    onClick={() => navigate('/profile')}
                />
                <BottomNavigationAction
                    label="Settings"
                    icon={<SettingsIcon style={iconStyle} />}
                    onClick={() => navigate('/profile/settings')}
                />
            </BottomNavigation>
        </div>
    );
}
export default NavigationBar;
