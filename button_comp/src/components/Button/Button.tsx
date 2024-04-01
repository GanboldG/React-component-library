import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
    label: string;
    color: 'primary' | 'secondary' | 'destructive' | 'gray';
    size: 'small' | 'medium' | 'large';
    variant: 'filled' | 'outline' | 'text';
    state: 'default' | 'hovered' | 'focused' | 'pressed' | 'disabled';
}

const Button = (props: ButtonProps) => {
    const {label, size, color, variant, state} = props;

    return <button className={`${styles['btn-' + size]} 
                               ${styles['btn-' + variant + '-' + color]}
                               ${styles['btn-' + state + '-' + color]}`}>{label}</button>;
};

export default Button;