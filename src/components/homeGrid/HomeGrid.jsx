import styles from "./homeGrid.module.css"
import { assets } from "../../assets/assets"

const homeGrid = () => {
	return (
		<div className={styles.container}>
			<h1>Our Works</h1>
			<div className={styles.imageContainer}>
				<div className={styles.leftImgContainer}>
					<div>
						<img
							src={assets.homeImg4}
							alt=""
						/>
						<div className={styles.hovereffect}>
							<h2>Interior Design</h2>
						</div>
					</div>
					<div>
						<img
							src={assets.homeImg5}
							alt=""
						/>
						<div className={styles.hovereffect}>
							<h2>Residential Projects</h2>
						</div>
					</div>
				</div>
				<div className={styles.rightImgContainer}>
					<div>
						<img
							src={assets.homeImg9}
							alt=""
						/>
						<div className={styles.hovereffect}>
							<h2>Commercial Projects</h2>
						</div>
					</div>
					<div>
						<img
							src={assets.homeImg8}
							alt=""
						/>
						<div className={styles.hovereffect}>
							<h2>Exhibitions</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default homeGrid
