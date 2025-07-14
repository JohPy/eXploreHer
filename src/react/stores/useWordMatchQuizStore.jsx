import { create } from 'zustand'

const questions = [
  {
    id: '1',
    question: 'Und',
    answer: 'And'
  },
  {
    id: '2',
    question: 'Klein',
    answer: 'Small'
  },
  {
    id: '3',
    question: 'Zu',
    answer: 'To'
  },
  {
    id: '4',
    question: 'Meer',
    answer: 'Sea'
  },
  {
    id: '5',
    question: 'Langsam',
    answer: 'Slowly'
  }
]

const useWordMatchQuizStore = create((set) => ({
  // currently selected question (null means no question selected)
  selectedQuestion: null,

  // currently selected answer (null means no answer selected)
  selectedAnswer: null,

  // the list of all questions available in the game
  questions,

  selectAnswer: (answer, id) => {
    set((state) => {
      // if the same answer is already selected, deselect it (toggle behavior)
      if (
        state.selectedAnswer?.answer === answer &&
                state.selectedAnswer?.id === id
      ) {
        return { selectedAnswer: { answer: null, id: null } }
      }

      // otherwise, select the new answer
      return { selectedAnswer: { answer, id } }
    })
  },

  selectQuestion: (question, id) => set((state) => {
    // if the same question is already selected, deselect it (toggle behavior)
    if (
      state.selectedQuestion?.question === question &&
                state.selectedQuestion?.id === id
    ) {
      return { selectedQuestion: { question: null, id: null } }
    }

    // otherwise, select the new question
    return { selectedQuestion: { question, id } }
  })
}))

export default useWordMatchQuizStore
