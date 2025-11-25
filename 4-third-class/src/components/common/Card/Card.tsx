import { FC } from "react";
import styles from './Card.module.css';


export interface CardProps {
    children: React.ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
    return (
        <section className={styles.card}>
            {children}
        </section>
    )
}

export default Card;