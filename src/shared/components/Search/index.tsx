import styles from "./Search.module.scss";
import React from "react";

interface SearchProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	placeholder?: string;
}

const Search = ({ placeholder, value, onChange }: SearchProps) => {
	return (
		<input
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={styles.input}
		/>
	);
};

export default Search;
