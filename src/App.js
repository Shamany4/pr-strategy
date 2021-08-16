import './style.sass';

import Header from './components/Header';
import HomeSection from './sections/HomeSection';
import ExperienceSection from './sections/ExperienceSection';
import StageSection from './sections/StageSection';
import FeedbackSection from './sections/FeedbackSection';
import AboutSection from './sections/AboutSection';
import PersonSection from './sections/PersonSection';
import PortfolioSection from './sections/PortfolioSection';
import LettersSection from './sections/LettersSection';
import QuestionsSection from './sections/QuestionsSection';
import FooterSection from './sections/FooterSection';

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

      <LettersSection />
      <QuestionsSection />
      <FooterSection />
    </div>
  );
}

export default App;
