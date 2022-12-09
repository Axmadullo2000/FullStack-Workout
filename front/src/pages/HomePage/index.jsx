import React from 'react'

import { Header } from '../../components/layouts/Header'
import Counters from '../../components/counters'

import background from '../../assets/homepage.jpg'

import './index.scss'

export const HomePage = () => {
	return (
		<div className='homePage' style={{
			backgroundImage: `url(${background})`,
			height: '100vh',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: "center"
		}}>
			<Header />

			<div className='homepage_center'>
				<button className="">New</button>
				<p className='homepage_title'>
					EXERCISES FOR
					THE SHOULDERS
				</p>

				<Counters />
			</div>
		</div>
	)
}
