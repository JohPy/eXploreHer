import React from 'react'

import {
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material'

import PropTypes from 'prop-types'
import HomeIcon from './Icons/HomeIcon'
import MistakesIcon from './Icons/MistakesIcon'
import ProfileIcon from './Icons/ProfileIcon'

const NavigationBar = ({ navigationIndex, navigate }) => {
  const iconStyle = { width: 30, height: 30 }

  const actions = [
    {
      icon: <HomeIcon style={iconStyle} />,
      onClick: () => navigate('/'),
      key: 'home'
    },
    {
      icon: <MistakesIcon style={{ ...iconStyle, transform: 'rotate(180deg)' }} />,
      onClick: () => { },
      key: 'mistakes'
    },
    {
      icon: <ProfileIcon style={iconStyle} />,
      onClick: () => navigate('/profile'),
      key: 'profile'
    }
  ]

  const getIconContainerStyle = (isActive) => ({
    background: isActive ? '#FBE7DF' : undefined,
    borderRadius: isActive ? 16 : undefined,
    border: isActive ? '2px solid #FAC4AF' : undefined,
    boxSizing: isActive ? 'border-box' : undefined,
    padding: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })

  return (
    <div style={{ borderTop: '1px solid #ccc', width: '100%' }}>
      <BottomNavigation
        showLabels
        value={navigationIndex}
        sx={{ width: '100%' }}
      >
        {actions.map((action, idx) => (
          <BottomNavigationAction
            key={action.key}
            icon={
              <div style={getIconContainerStyle(navigationIndex === idx)}>
                {action.icon}
              </div>
            }
            onClick={action.onClick}
          />
        ))}
      </BottomNavigation>
    </div>
  )
}

NavigationBar.propTypes = {
  navigationIndex: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired
}

export default NavigationBar
