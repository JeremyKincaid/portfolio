import './App.css';
import Tetris from './Tetris/Tetris';
import About from './About/About';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (

    <StyledEngineProvider injectFirst>
      <div className="App">
        <About></About>
        <Tetris></Tetris>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
