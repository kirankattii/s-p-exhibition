import { useNavigate } from "react-router-dom"
import { assets } from "../../assets/assets"
import styles from "./gallary.module.css"

const Gallary = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.container}>
			<h1 className={styles.ourProject}>Our Projects</h1>
			<div className={styles.imgContainer}>
				<div className={styles.interior}>
					<img
						src={assets.interiordesign}
						alt=""
					/>
					<button onClick={() => navigate("/gallary/interior-design")}>
						Interior Designs
					</button>
				</div>
				<div className={styles.exhibition}>
					<img
						src={assets.exhibitionDesign}
						alt=""
					/>
					<button onClick={() => navigate("/gallary/exhibitions")}>
						Exhibitions
					</button>
				</div>
			</div>
		</div>
	)
}

export default Gallary
