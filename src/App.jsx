import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ResetCSS } from './ResetCss'
import AuthProvider from './contexts/Auth'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Today from './pages/Today'
import Historic from './pages/Historic'
import Habits from './pages/Habits'
import TodayProvider from './contexts/TodayContext'



function App() {

  return (
    <>
      <ResetCSS />
      <BrowserRouter>
        <TodayProvider>
          <AuthProvider>
            <Routes>
              <Route path='/' element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/today' element={<Today />} />
              <Route path='/historic' element={<Historic />} />
              <Route path='/habits' element={<Habits />} />
            </Routes>
          </AuthProvider>
        </TodayProvider>
      </BrowserRouter>
    </>
  )
}

export default App
