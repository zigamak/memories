import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux'; 
import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from  './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';
function App() {
  //Added functions for usestyle
    const classes = useStyles();
    const disptach = useDispatch();

    useEffect(()=>{
      dispatch(getPosts());
    },[dispatch]);
    return (
    <div>
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
              <img className={classes.img} src={memories} alt= "memories" height='60' />
          </Typography>
          <Grow in> 
            <Container>
              <Grid container ="space-between" alignItems="stretch" spacing={3}> 
                <Grid item xs={12} sm={7}>
                  <Posts/>                  
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form/>
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </AppBar>
      </Container>
    </div>  
    );
  } 

export default App;
