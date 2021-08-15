import './style.sass';

import Header from './components/Header';
import HomeSection from './sections/HomeSection';
import ExperienceSection from './sections/ExperienceSection';
import StageSection from './sections/StageSection';
import FeedbackSection from './sections/FeedbackSection';
import AboutSection from './sections/AboutSection';
import PersonSection from './sections/PersonSection';
import PortfolioSection from './sections/PortfolioSection';

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

      <div className="section-bg">
        <AboutSection />
        <PersonSection />
        <PortfolioSection />
      </div>

    </div>
  );
}

export default App;
