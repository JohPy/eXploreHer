import React from 'react'
import { useNavigate } from 'react-router-dom'
import LessonCompletionAnimation from '../Components/LessonCompletionAnimation'

const Completion = () => {
  const navigate = useNavigate()

  const handleFinish = () => {
    navigate('/')
  }

  return <LessonCompletionAnimation onFinish={handleFinish} />
}

export default Completion
