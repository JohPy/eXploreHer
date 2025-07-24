import React from 'react'

import { Stack, Button } from '@mui/material'
import { AppSettingsAlt as SettingsIcon } from '@mui/icons-material'

const buttonDisabled = true

const ProfileOverview = () => (
  <Stack
    sx={{
      width: '100%',
      height: '100%',
      justifyContent: 'center'
    }}
  >
    <Button
      variant="contained"
      startIcon={<SettingsIcon />}
      disabled={buttonDisabled}
    >
      Go to Settings
    </Button>
  </Stack>
)

export default ProfileOverview
