import CycleCalendar from '../react/Components/Images/CycleCalendar'

export const defaultUser = {
  experience: 0,
  stars: 0,
  progress: { chapter: 1, lesson: 1 }
}

export const defaultUserCredentials = {
  username: 'test',
  email: 'test2@example.com',
  password: 'Testpwd1'
}

export const mockExplanationExercise = {
  id: '102',
  task: null,
  __component: 'exercises.explanation',
  text: 'In der <b>Follikelphase</b> macht sich dein Körper startklar: Ein Eibläschen (Follikel) reift heran, die Gebärmutterschleimhaut wird schick gemacht – alles für den großen Eisprung-Auftritt. Danach chillt dein Körper in der <b>Lutealphase</b>. Showtime jeden Monat!'
}

export const mockDragAndDropExercise = {
  id: '101',
  task: 'Ziehe die Phasen zur richtigen Lösung',
  __component: 'exercises.drag-and-drop',
  fields: [
    {
      id: 'follikel',
      label: 'Follikelphase',
      position: { top: '5%', right: '0%' }
    },
    {
      id: 'luteal',
      label: 'Lutealphase',
      position: { top: '88%', left: '0%' }
    }
  ],
  ImageComponent: CycleCalendar
}

export const defaultChapters = [
  {
    id: 10,
    documentId: 'xjbplt8daj9vb477nn9mtrew',
    title: 'Der Menstruationszyklus',
    createdAt: '2025-07-25T01:14:37.831Z',
    updatedAt: '2025-07-25T01:20:58.711Z',
    publishedAt: '2025-07-25T01:20:58.715Z',
    lessons: [
      {
        id: 22,
        documentId: 'b0zylj47mmhf1o3a19pdj9ml',
        title: 'Die Phasen deines Zyklus',
        createdAt: '2025-07-24T22:24:44.486Z',
        updatedAt: '2025-07-25T01:20:35.217Z',
        publishedAt: '2025-07-25T01:20:35.229Z',
        Exercises: [
          {
            __component: 'exercises.multiple-choice',
            id: 22,
            Question: 'Was passiert während der Follikelphase im Eierstock?',
            task: 'Was passiert während der Follikelphase im Eierstock?',
            Answers: [
              {
                id: 65,
                Text: 'Das Corpus luteum bildet sich',
                IsCorrect: false
              },
              {
                id: 66,
                Text: 'Ein Follikel reift heran und produziert Östrogen',
                IsCorrect: true
              },
              {
                id: 67,
                Text: 'Die Gebärmutterschleimhaut wird abgestoßen',
                IsCorrect: false
              },
              {
                id: 68,
                Text: 'Die Eizelle wird befruchtet',
                IsCorrect: false
              }
            ]
          },
          {
            __component: 'exercises.match-pairs',
            id: 15,
            task: 'Finde die passenden Paare',
            Pairs: [
              {
                id: 57,
                Question: 'Follikelphase',
                Answer:
                  'Einer der herangreiften Follikel wird dominant und produziert das Hormon Östrogen'
              },
              {
                id: 58,
                Question: 'Lutealphase',
                Answer:
                  'Der geplatzte Follikel wird zum Gelbkörper (Corpus luteum) und produziert Progesteron'
              },
              {
                id: 59,
                Question: 'Eisprung',
                Answer:
                  'Die freigesetzte Eizelle wird in den Eileiter transportiert'
              },
              {
                id: 60,
                Question: 'Menstruation',
                Answer:
                  'Die Gebärmutter stößt ihre innere Auskleidung aus Weichteilen und Blutgefäßen ab'
              }
            ]
          }
        ]
      }
    ]
  }
]
