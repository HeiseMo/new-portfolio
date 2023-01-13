import Header from './components/header.js';
import AllProjects from './components/all-projects.js';
import Changelog from './components/changelog.js';
import Footer from './components/footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AllProjects />
      <Changelog />
      <Footer />
    </div>
  );
}

export default App;
