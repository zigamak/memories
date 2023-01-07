import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import memories from './images/memories.png';
function App() {
  return (
    <div>
      <Container maxwidth="lg">
        <AppBar position="static" color="inherit">
          <Typograhy variant="h2" align="center">
              <img src={memories} alt= "memories" height='60' />
          </Typograhy>
          <Grow in> 
            <Container>
              <Grid container justify="space-between" alignItems="stretch" spacing={3}> 

              </Grid>
            </Container>
          </Grow>
        </AppBar>
      </Container>
    </div>  
    );
  } 

export default App;
