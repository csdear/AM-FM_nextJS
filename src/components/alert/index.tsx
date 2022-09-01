import React, {FC, ReactNode } from 'react';
import styles from './alert.module.scss'
import cn from 'classnames'

interface AlertProps {
    children: ReactNode;
    type: string;
}

const Alert: FC<AlertProps> = ({ children, type }) => {
    return (
    <div
    className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
    })}
    >{children}</div>
)
}

export default Alert;