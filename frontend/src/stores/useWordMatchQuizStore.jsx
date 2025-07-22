import { create } from 'zustand'

const questions = [
  {
    id: '1',
    question: 'Follikelphase',
    answer: 'Einer der herangreiften Follikel wird dominant und produziert das Hormon Östrogen'
  },
  {
    id: '2',
    question: 'Eisprung',
    answer: 'Die freigesetzte Eizelle wird in den Eileiter transportiert'
  },
  {
    id: '3',
    question: 'Menstruation',
    answer: 'Die Gebärmutter stößt ihre innere Auskleidung aus Weichteilen und Blutgefäßen ab'
  },
  {
    id: '4',
    question: 'Lutealphase',
    answer: 'Der geplatzte Follikel wird zum Gelbkörper (Corpus luteum) und produziert Progesteron'
  }
]

const useWordMatchQuizStore = create((set) => ({
  // currently selected question (null means no question selected)
  selectedQuestion: null,

  // currently selected answer (null means no answer selected)
  selectedAnswer: null,

  // the list of all questions available in the game
  questions,

  // keeps track of buttons that should be disabled (to prevent reuse or mistakes)
  disabledButtons: [],

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
  }),

  checkAnswer: (question, answer) => {
    const questionObj = questions.find((q) => q.question === question)
    if (!questionObj) {
      return false
    }
    if (questionObj.answer === answer) {
      // if the answer is correct, reset the selected question and answer
      set(() => ({
        selectedQuestion: { question: null, id: null },
        selectedAnswer: { answer: null, id: null }
      }))
      return true
    }

    return false
  },

  disableButton: (questionId, answerId) => set((state) => ({
    disabledButtons: [
      ...state.disabledButtons,
      { questionId, answerId }
    ]
  }))
}))

export default useWordMatchQuizStore
