import React from "react";
import "./Button.css";

interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <button color="#841584">{props.label}</button>
};

export default Button;