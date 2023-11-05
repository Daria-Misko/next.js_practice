"use client";
import React from "react";
import { useParams } from "next/navigation";
import { cats } from "../../../../data";

export default function Cat() {
	const params = useParams();
	const catId = params.catId;
	const catsArr = cats;
	const cat = catsArr.find((cat) => cat.id.toString() === catId);

	return (
		<div>
			{cat ? (
				<div className="container mt-5" style={{ display: "flex" }}>
					<img src={cat.image.url} alt={cat.image.alt} width={500} />
					<div className="mx-5">
						<h1>{cat.name}</h1>
						<p>{cat.description}</p>
					</div>
				</div>
			) : (
				<p>Кота з таким ID не знайдено.</p>
			)}
		</div>
	);
}
