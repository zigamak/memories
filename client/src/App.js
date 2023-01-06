import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
function App() {
  return (
    <div>
      <Container maxwidth="lg">
        <AppBar position="static" color="inherit">
          <Typograhy variant="h2" align="center">
            Memories
          </Typograhy>
        </AppBar>
      </Container>
    </div>  
    );
  }

export default App;
