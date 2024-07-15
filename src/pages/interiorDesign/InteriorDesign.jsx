import styles from "./interiorDesign.module.css"
import Gallery from "../../components/Gallery"
import { allInteriorDesign } from "../../assets/assets"

const InteriorDesign = () => {
	return (
		<div className={styles.container}>
			<h1>Interior Designs</h1>
			<Gallery images={allInteriorDesign} />
		</div>
	)
}

export default InteriorDesign
