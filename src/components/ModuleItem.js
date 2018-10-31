import React from 'react'

const ProjectsList = ({ module }) => {
	const { name, image } = module
	return (
		<figure className="module-item">
			<img 
				src={image}
				alt={name}
				className="module-image"
			/>
			<figcaption className="module-name">
				<p>{name}</p>
			</figcaption>
		</figure>
	)
}

export default ProjectsList
