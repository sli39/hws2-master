import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: 'red' | 'secondary'
}

const SuperButton: React.FC<SuperButtonPropsType> = ({ xType, className, disabled, ...restProps }) => {
    const typeClass = xType === 'red' ? s.red : xType === 'secondary' ? s.secondary : s.default
    const finalClassName = `${s.button} ${typeClass} ${disabled ? s.disabled : ''} ${className ?? ''}`
    return <button disabled={disabled} className={finalClassName} {...restProps} />
}

export default SuperButton
