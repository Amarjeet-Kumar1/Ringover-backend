import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavHeader from './components/NavHeader';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';
import JourneyScreen from './screens/JourneyScreen';
import StoreScreen from './screens/StoreScreen';
import TeamScreen from './screens/TeamScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavHeader />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/journey" element={<JourneyScreen />} />
            <Route path="/team" element={<TeamScreen />} />
            <Route path="/store" element={<StoreScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
