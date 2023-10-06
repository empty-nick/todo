import styles from './styles.module.css'

interface IFooter{
	style: string;
}
export function Footer({style}: IFooter) {
	console.log(styles)
	return (
		<div className={`${style} ${styles.footer}`}>
			Footer
		</div>
	)
}
