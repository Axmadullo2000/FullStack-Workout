import React from 'react'

import hamburger from "../../../assets/hamburger_menu.svg";
import user from "../../../assets/user_icon.svg";

import styles from "./Header.module.scss";

function Header () {
	return (
		<div>
			<div className={styles.header}>
				<button className={styles.btn}>
					<img alt="user" src={user} />
				</button>

				<button className={styles.btn}>
					<img src={hamburger} alt="hamburger menu" />
				</button>
			</div>
		</div>
	)
}

export { Header }
