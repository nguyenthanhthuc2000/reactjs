import "./App.css";
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home';
import { lazy, Suspense } from 'react';
const User = lazy(() => import('./pages/User'));

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/:id" element={ 
            <Suspense>
              <User />
            </Suspense>} 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
