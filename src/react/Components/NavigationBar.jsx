import React from 'react'

import {
    BottomNavigation,
    BottomNavigationAction
} from '@mui/material'

import {
    Settings as SettingsIcon
} from '@mui/icons-material'

import HomeIcon from './Icons/HomeIcon'
import MistakesIcon from './Icons/MistakesIcon'
import ProfileIcon from './Icons/ProfileIcon'

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
                    icon={<MistakesIcon style={{ ...iconStyle, transform: 'rotate(180deg)' }} />}
                    onClick={() => { }}
                />
                <BottomNavigationAction
                    icon={<ProfileIcon style={iconStyle} />}
                    onClick={() => navigate('/profile')}
                />
                <BottomNavigationAction
                    icon={<SettingsIcon style={iconStyle} />}
                    onClick={() => navigate('/profile/settings')}
                />
            </BottomNavigation>
        </div>
    );
}
export default NavigationBar;
