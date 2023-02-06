import { makeStyles } from '@material-ui/core/styles';

// exported styles for form 
export default makeStyles(() => ({
  //appBar style
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },//header style
  heading: {
    color: 'rgba(0,183,255, 1)',
  },//image style
  image: {
    marginLeft: '15px',
  },
})); 