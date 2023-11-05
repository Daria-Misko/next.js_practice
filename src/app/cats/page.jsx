import React from "react";
import { cats } from "../../../data";
import Card from "@/components/Card/Card";

export default function CatPage() {
	const catArr = cats;
	// console.log(catArr);
	return (
		<div className="container mt-5">
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: 15,
					justifyContent: "center",
				}}
			>
				{catArr.map((cat) => (
					<Card
						key={cat.id}
						name={cat.name}
						id={cat.id}
						phone={cat.phone}
						email={cat.email}
						image={cat.image}
					/>
				))}
			</div>
		</div>
	);
}
