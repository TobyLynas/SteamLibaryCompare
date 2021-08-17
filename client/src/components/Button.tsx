import React from "react";
import styles from "../styles/Button.module.css";

interface ButtonProps {
    text: string;
    variant?: string;
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
    let classNames = styles.button;
    if (props.variant) {
        classNames += ` ${styles[props.variant]}`;
    }

    return (
        <button className={classNames} onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default Button;
