import React from 'react'
import { Link } from 'react-router-dom'


const ProjectsList = ({ module }) => {
	const { name, image, slug } = module
	return (
		<Link
			to={`/modulo/${slug}`}
			className="reset--link"
		>
			<figure className="module--item">
				<img 
					src={image}
					alt={name}
					className="module--image"
				/>
				<figcaption className="module--name">
					<p>{name}</p>
				</figcaption>
			</figure>
		</Link>
	)
}

export default ProjectsList
