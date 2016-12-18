import React from 'react';
import s from './styles.css';

export default function Input(props) {
    return <input className={s.input} {...props}/>;
}