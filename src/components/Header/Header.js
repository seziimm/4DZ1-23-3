import styles from './header.module.css';

const Header = (props) => {
    const {title} = props;
    return (
        <div className={styles.header}>
            <h2>{title}</h2>
        </div>
    )
}
export default Header;