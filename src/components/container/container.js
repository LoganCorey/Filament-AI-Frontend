import React from 'react';
import PropTypes from 'prop-types';
import classes from './container.module.css';

/**
 * Flex container react component
 */
class Container extends React.PureComponent{
    
    getMaxWidth =(maxWidth)=>{
        switch(maxWidth) {
            case 'sm':
              return '30%'
            case 'md':
              return '50%'
            case 'lg':
                return '100%'
            case 'xlg':
                return '90%'
            default:
              return '100%'
          }
    }
    render(){
        //const width = this.getMaxWidth(this.props.maxWidth);

        return(
            <div style={{minHeight: this.props.minHeight}} className={[classes.container, this.props.classes].join(' ')} >
                {this.props.children}
            </div>
        )
    }
}

Container.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.object),
    children: PropTypes.element,
    maxWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xlg']),
    minHeight: PropTypes.string
}

Container.defaultProps = {
    classes: [],
    maxWidth: 'md',
}

export default Container;