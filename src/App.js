import logo from './logo.svg';
import './App.css';
import './Components/FreeText'
import FreeText from './Components/FreeText';
import PersonalSkills from './Components/PersonalSkills'
import TechnicalSkills from './Components/TechnicalSkills'
import Awards from './Components/Awards'
import WorkExperience from './Components/WorkExperience';
import Education from './Components/Education';
import MostProudOf from './Components/MostProudOf';
import MyTime from './Components/MyTime';
import PersonalData from './Components/PersonalData'
import { personal_skills, technical_skills, awards, workExperience, mostProudOf, myTime} from './Data';

function App() {
   
  return (
    <div className="App">
      <div className='left-container '>
        <FreeText/>
        <PersonalSkills skills = {personal_skills}/>
        <TechnicalSkills skills = {technical_skills}/>
        <Awards awards={awards}></Awards>
        <WorkExperience workExperience={workExperience}></WorkExperience>
        <Education/>
        <MostProudOf mostProudOf={mostProudOf}/>
        <MyTime myTime={myTime}/>
      </div>
      <div className='right-container '>
        <PersonalData/>
      </div>
    </div>
  );
}

export default App;
