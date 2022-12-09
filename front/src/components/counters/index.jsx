import React from 'react'

const userProfile = {
	"minutes": 0,
	"workouts": 2,
	"kgs": 0
}

const Counters = () => {
	return (
		<div className='counter'>
			{Object.entries(userProfile).map((item, index) => (
					<div className="homepage_header" key={index}>
						<table>
							<thead>
								<tr>
									<th>{item[0]}</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{item[1]}</td>
								</tr>
							</tbody>
						</table>
					</div>
			))}
		</div>
	)
}

export default Counters
