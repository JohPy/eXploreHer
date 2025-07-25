import React from 'react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import AppLayout from './AppLayout'
import Theme from '../theme/theme'
import UserProvider from './contexts/user-context'
import { CourseContentProvider } from './contexts/course-context'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(

  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <UserProvider>
      <CourseContentProvider>
        <Router>
          <AppLayout />
        </Router>
      </CourseContentProvider>
    </UserProvider>
  </ThemeProvider>
)
