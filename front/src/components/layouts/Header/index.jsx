import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import user from "../../../assets/user_icon.svg";

import styles from "./Header.module.scss";

function Header() {
	const [show, setShow] = useState(true)

	console.log(show)

	return (
		<div className={styles.header}>
			<button className={styles.btn}>
				<img src={user} alt="user" />
			</button>

			<div>
				<button className={`${styles.hamburger_button} ${styles.btn}`}
					onClick={() => setShow(!show)}>
						{show ? (
							<svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<line x1="27" y1="1.5" x2="11" y2="1.5" stroke="#B53471" strokeWidth="3" />
								<line x1="27" y1="11.5" y2="11.5" stroke="#B53471" strokeWidth="3" />
								<line x1="27" y1="22.5" y2="22.5" stroke="#B53471" strokeWidth="3" />
							</svg>

						) : (
							<>
								<div className={styles.header_navbar}>
									<ul>
										<li>
											<Link to="/">Workouts</Link>
										</li>
										<li>
											<Link to="/">Create new</Link>
										</li>
										<li>
											<Link to="/">Profile</Link>
										</li>
									</ul>
									<button className={styles.btn}>
										<Link to="/">Logout</Link>
									</button>
								</div>
								<svg width="37px" height="39px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg">
									<g id="color" />
									<g id="hair" />
									<g id="skin" />
									<g id="skin-shadow" />
									<g id="line">
										<line x1="17.5" x2="54.5" y1="17.5" y2="54.5" fill="none" stroke="#B53471" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
										<line x1="54.5" x2="17.5" y1="17.5" y2="54.5" fill="none" stroke="#B53471" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
									</g>
								</svg>
							</>
						) }
				</button>
			</div>
		</div>
	)
}

export { Header }
