import React from 'react'

import { Route, Routes } from 'react-router-dom'

import LessonOverview from './Pages/LessonOverview'
import Lesson from './Pages/Lesson'
import CatNames from './Pages/CatNames/CatNames'
import Profile from './Pages/Profile/Profile'
import ProfileOverview from './Pages/Profile/ProfileOverview'
import Completion from './Pages/Completion'

import Error404 from './Pages/Error404'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LessonOverview />} />
    <Route path="/lessons/:id" element={<Lesson />} />
    <Route path="/completion" element={<Completion />} />
    <Route path="/profile" element={<Profile />}>
      <Route path="" element={<ProfileOverview />} />
    </Route>
    <Route path="/catnames" element={<CatNames />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
)

export default AppRoutes
