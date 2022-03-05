import React from "react";
import styles from './Figure.module.scss';

export type FigureName = 'askhild' | 'baard' | 'duke' | 'freya' | 'ragnar' | 'sigrid' | 'toke'

export interface FigureProps {
    name: FigureName;
}

export function Figure(props: FigureProps) {
    return (
        <div className={styles.container}>
            <img className={styles.figure} src={`/2022/images/${props.name}.png`} alt="cool figure of a viking"/>
        </div>
    )
}