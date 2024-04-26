import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ResetCSS } from './ResetCss'
import AuthProvider from './contexts/Auth'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Today from './pages/Today'
import Historic from './pages/Historic'
import Habits from './pages/Habits'
import TodayHabitsProvider from './contexts/TodayHabits'



function App() {

  return (
    <>
      <ResetCSS />
      <BrowserRouter>
        <TodayHabitsProvider>
          <AuthProvider>
            <Routes>
              <Route path='/' element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/today' element={<Today />} />
              <Route path='/historic' element={<Historic />} />
              <Route path='/habits' element={<Habits />} />
            </Routes>
          </AuthProvider>
        </TodayHabitsProvider>
      </BrowserRouter>
    </>
  )
}

export default App
