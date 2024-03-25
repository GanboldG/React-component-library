import React from "react";
import "./Button.css";

interface ButtonProps {
    label: string;
    color: 'primary' | 'secondary' | 'destructive' | 'grey';
    size: 'small' | 'medium' | 'large';
}

const Button = (props: ButtonProps) => {
    const {label, size, color} = props;

    return <button className={'button-' + size + ' button-' + color}>{label}</button>
};

export default Button;