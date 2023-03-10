import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import {useDispatch} from 'react-redux'; 
import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from  './components/Form/Form';
import memories from './images/memories.png';

import useStyles from './styles';
function App() {
    const classes = useStyles();
    const disptach = useDispatch();
    useEffect(()=>{
      dispatch(getPosts());
    },[dispatch]);
    return (
    <div>
      {/*Updated Container*/}
      <Container maxwidth="lg">
        {/*Updated AppBAR*/}
        <AppBar className={classes.appBar} position="static" color="inherit">
          {/*Updated typography*/}
          <Typography className={classes.heading} variant="h2" align="center">
              <img className={classes.img} src={memories} alt= "memories" height='60' />
          </Typography>
          {/*Updated Grow in*/}
          <Grow in> 
          {/*Updated Container */}
            <Container>
              <Grid container ="space-between" alignItems="stretch" spacing={3}> 
              
          {/*Updated Container */}
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
