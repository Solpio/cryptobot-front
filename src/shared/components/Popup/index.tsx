import React from "react";
import { createPortal } from "react-dom";

import styles from "./Popup.module.scss";

interface IOwnProps {
	children: React.ReactNode;
	isOpen: boolean;
	title?: string;
	onClose(): void;
}
const Popup = ({ children, isOpen, onClose, title }: IOwnProps) => {
	const closeModal = () => {
		onClose();
	};

	return createPortal(
		<div className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
			<div className={styles.modalHeader}>
				<span>{title}</span>
				<button className={styles.closeButton} onClick={closeModal}>
					<div>X</div>
				</button>
			</div>
			<div className={styles.modalContent}>{children}</div>
		</div>,
		document.body
	);
};

export default Popup;
