import { makeStyles } from '@material-ui/core/styles';
//Updated styles for post
export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },//Updated image style
  image: {
    marginLeft: '15px',
  },
}));