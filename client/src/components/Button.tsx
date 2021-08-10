import React from "react";
import styles from "../styles/Button.module.css";

interface ButtonProps {
    text: string;
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    );
};
export default Button;