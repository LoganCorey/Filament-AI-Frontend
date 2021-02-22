import React from 'react';
import classes from './footer.module.css';
import Box from '../box/box';
class Footer extends React.PureComponent{

    render(){
        return(
<Box t={3}>
            <footer className={classes.footer}>
                <h2 style={{float:'left', color:'white', fontWeight:'300', marginLeft:'10px', fontSize:'2em'}}>Annotator</h2>
            </footer>
            </Box>
        )
    }
};

export default Footer;