import React from 'react';
import styles from './Footer.module.scss';
import { useIsFrontpage } from '../../core/hooks/UseIsFrontpage';
import classnames from 'classnames';
import { NavRoute } from '../Navigation/Navigation';
import {useLocation} from "react-router";

interface FooterProps {
    routes: NavRoute[];
}

function Footer(props: FooterProps) {
    const location = useLocation()
    const isFrontpage = useIsFrontpage(location.pathname, props.routes);
    const componentClass = classnames(
        styles.footer,
        {[styles.frontpage]: isFrontpage},
    );
    return (
        <footer className={componentClass}>
            <div className={styles.javabin}>
                <a target="_blank" rel="noopener noreferrer" href="https://javabin.no">
                    Made by javaBin
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://java.no/principles">
                    Code of Conduct
                </a>
            </div>
            <div className={styles.social}>
                <a href="mailto:javazone@java.no">
                    Mail
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/javazone">
                    Twitter
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/javazoneconference">
                    Facebook
                </a>
            </div>
        </footer>
    )
}

export default Footer;