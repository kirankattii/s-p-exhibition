// import styles from "./interiorDesign.module.css"
// import Gallery from "../../components/Gallery"
// import { allInteriorDesign } from "../../assets/assets"

// const InteriorDesign = () => {
// 	return (
// 		<div className={styles.container}>
// 			<h1>Interior Designs</h1>
// 			<Gallery images={allInteriorDesign} />
// 		</div>
// 	)
// }

// export default InteriorDesign

import React, { useState } from "react"
import styles from "./interiorDesign.module.css"
import Gallery from "../../components/Gallery"
import { commercial, recidential } from "../../assets/assets"

const InteriorDesign = () => {
	const [activeTab, setActiveTab] = useState(0)

	const handleTabClick = (index) => {
		setActiveTab(index)
	}

	return (
		<div className={styles.container}>
			<div className={styles.tabs}>
				<div
					className={`${styles.tab} ${activeTab === 0 ? styles.active : ""}`}
					onClick={() => handleTabClick(0)}
				>
					Residential Project
				</div>
				<div
					className={`${styles.tab} ${activeTab === 1 ? styles.active : ""}`}
					onClick={() => handleTabClick(1)}
				>
					Commercial Project
				</div>
			</div>
			<div className={styles.content}>
				{activeTab === 0 && (
					<div>
						{" "}
						<Gallery images={recidential} />
					</div>
				)}
				{activeTab === 1 && (
					<div>
						{" "}
						<Gallery images={commercial} />
					</div>
				)}
			</div>
		</div>
	)
}

export default InteriorDesign
