import React from 'react'

const ProjectsList = ({module}) => {
	const { name, image } = module
	return (
		<figure>
		<img src={image} alt=""/>
		<figcaption>
			<p>{name}</p>
		</figcaption>
	</figure>
	)
}

export default ProjectsList
