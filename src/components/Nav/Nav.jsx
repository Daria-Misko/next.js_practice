import Link from "next/link";
import React from "react";

export default function Nav() {
	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container-fluid">
				<Link href="/" className="navbar-brand mb-0 h1">
					Go Home
				</Link>
			</div>
		</nav>
	);
}
