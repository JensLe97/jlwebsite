import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline', 'btn--outline-rev']

const SIZES = ['btn--medium', 'btn--large', 'btn--medium-rev', 'btn--large-rev']
export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    to,
    enabled=true,
    onlyButton=false
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        onlyButton ?
        <button disabled={!enabled} className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button> :
        <Link to={to} className="btn-mobile" style={enabled ? null : {pointerEvents: "none"}}>
            <button disabled={!enabled} className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}