"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Card.module.css";

export default function Card({ name, phone, email, image, id }) {
	const router = useRouter();
	const { url, alt } = image;

	return (
		<div
			className={styles.card}
			onClick={() => {
				router.push(`/cats/${id}`);
			}}
		>
			<div className={styles["card-header"]}>
				<img
					src={url}
					alt={alt}
					className={styles["card-img"]}
					width={20}
				/>
			</div>
			<div>
				<h3>{name}</h3>
				<p>{phone}</p>
				<p>{email}</p>
			</div>
		</div>
	);
}
