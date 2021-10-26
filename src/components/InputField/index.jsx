import React from 'react'
import PropTypes from 'prop-types'
import './InputField.scss'

const InputField = ({type,placeholder,value,onChange,...props}) => {
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange? (e) => onChange(e): null} {...props}/>
    )
}

InputField.propTypes = {
    type :PropTypes.string,
    placeholder: PropTypes.string,
    onchange:PropTypes.func

}

export default InputField
