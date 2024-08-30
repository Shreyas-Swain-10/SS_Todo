import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
// import { AuthProvider } from './state/authContext'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Todos from './pages/Todos'
// import PrivateRoute from './routes/privateRoute'
function App() {

  return (
    <AuthProvider>
        <Router>
          <Container maxW="container.md" py={6}>
            <Box textAlign="center" mb={6}>
              <Heading as="h1" size="xl">Todo Application</Heading>
            </Box>
            <Routes>
              <Route path="/login" element={<SignIn />} />
              {/* <Route path="/logout" element={<SignOut />} /> */}
              <Route path="/signup" element={<SignUp />} />
              <Route path="/todos/:userId" element={<PrivateRoute element={<Todos />} />} />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </Container>
        </Router>
      </AuthProvider>
  )
}

export default App
