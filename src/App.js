import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Error from './page/Error';
import Home from "./page/Home"
import Login from "./page/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/error"
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  )
}


export default App