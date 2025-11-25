import { FC } from "react"
import styles from './Layout.module.css'


export interface LayoutProps {
    children?: React.ReactNode;
    title: string;
    subtitle: string;
}

export const Layout:FC<LayoutProps> = ({ children, title, subtitle }) => {
    return (
        <main className={styles.main}>
            <h1>{title}</h1>
            <small>{subtitle}</small>
            <section className={styles.content}>
                {children}
            </section>
        </main>
    )
}