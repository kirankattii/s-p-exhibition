import styles from "./exhibition.module.css"
import { allExhibition } from "../../assets/assets"
import Gallery from "../../components/Gallery"
import Gallery2 from "../../components/Gallery2"
const Exhibition = () => {
	return (
		<div className={styles.container}>
			<h1>Exhibitions</h1>
			<Gallery2 images2={allExhibition} />
		</div>
	)
}

export default Exhibition
