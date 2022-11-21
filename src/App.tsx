import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { NewNote } from './components/NewNote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>home</h1>}></Route>
        <Route path="/new" element={<NewNote/>}></Route>
        <Route path="/:id">
          <Route index element={<h1>show</h1>}></Route>
          <Route path="edit" element={<h1>edit</h1>}></Route>
        </Route>
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </Container>
    </>
  )
}

export default App
