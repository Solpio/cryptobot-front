export interface MainButtonProps {
	/**
	 * Current button text
	 * @defaultValue Set to `CONTINUE` by default
	 */
	text?: string;
	/**
	 * The button progress state indicator.
	 * @defaultValue  Set to `false` by default
	 */
	progress?: boolean;
	/**
	 * The button disable state.
	 * @defaultValue Set to `false` y defaults
	 */
	disabled?: boolean;
	/** The button press event handler */
	onClick?: () => void;
	/**
	 * Current button color.
	 * @defaultValue Set to themeParams.button_color by default
	 */
	color?: string;
	/**
	 * Current button text color
	 * @defaultValue Set to themeParams.button_text_color by default
	 */
	textColor?: string;
}

const TelegramButton = ({
	text = "CONTINUE",
	progress = false,
	disabled = false,
	onClick,
}: MainButtonProps) => {
	return (
		<button onClick={onClick} disabled={disabled && progress}>
			{text}
		</button>
	);
};

export default TelegramButton;
