import React from "react";

import styles from "./styles.module.css";

type CardGrids = {
    children: string,
    home: boolean
}
const CardGrid = ({ children, home = false }: CardGrids) => (
    <div className={home ? styles.homeGrid : styles.cardGrid}>{children}</div>
);

export default CardGrid;