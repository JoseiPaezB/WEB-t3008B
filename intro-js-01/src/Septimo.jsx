import PropTypes from 'prop-types';
import { Fragment } from 'react';   

export const Septimo= ({title,subTitle})=>{
    
    Septimo.PropTypes={
        title:PropTypes.string.isRequired,
        subTitle:PropTypes.string.isRequired
    }
    
    return (
            <Fragment>
                <h2>{title}</h2>
                <h3>{subTitle}</h3>
            </Fragment>
    )
}