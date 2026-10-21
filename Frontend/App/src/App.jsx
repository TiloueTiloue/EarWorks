import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ChordsPage from './pages/ChordsPage';
import NotesPage from './pages/NotesPage';
import KeysPage from './pages/KeysPage';
import ExerciseLayout from './components/ExerciseLayout/ExerciseLayout';
import ScalesPage from './pages/Scales';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<ExerciseLayout />}>
          <Route path="/chords" element={<ChordsPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/keys" element={<KeysPage />} />
          <Route path="/scales" element={<ScalesPage />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
