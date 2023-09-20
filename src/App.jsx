import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { ResetCSS } from './ResetCss'
import AuthProvider from './contexts/Auth'



function App() {

  return (
    <>
      <ResetCSS />
      <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
