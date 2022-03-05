import React from 'react';
import styles from './Button.module.scss';
import classnames from 'classnames';

export type ButtonSize = 'small' | 'normal'

export interface ButtonProps {
    onClick?: () => void;
    size?: ButtonSize;
    children: React.ReactNode;
    className?: string
}

export function Button(props: ButtonProps) {
    const classes = classnames(
        styles.button,
        props.className,
        {[styles.small]: props.size === 'small'}
    )
    return (
        <button onClick={props.onClick} className={classes}>
            {props.children}
        </button>
    )
}