import './style.sass';

import Header from './components/Header';
import HomeSection from './sections/HomeSection';
import ExperienceSection from './sections/ExperienceSection';
import StageSection from './sections/StageSection';
import FeedbackSection from './sections/FeedbackSection';
import AboutSection from './sections/AboutSection';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <HomeSection />
      </div>

      <ExperienceSection />

      <StageSection />

      <FeedbackSection />

      <AboutSection />

    </div>
  );
}

export default App;
