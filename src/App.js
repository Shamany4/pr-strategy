import './style.sass';

import Header from './components/Header';
import HomeSection from './sections/HomeSection';
import ExperienceSection from './sections/ExperienceSection';
import StageSection from './sections/StageSection';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <HomeSection />
      </div>

      <ExperienceSection />

      <StageSection />

    </div>
  );
}

export default App;
