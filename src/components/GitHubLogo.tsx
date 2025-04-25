
import styles from './GitHubLogo.module.css';

export const GitHubLogo = () => {
    return (
        <div className={styles.container}>
            <img src="src/assets/githubLogo.png" alt="GitHub Logo" />
            <div className={styles.content}>
                <h3>Perfil</h3>
                <img src="src/assets/githubLogoName.png" alt="GitHub Logo Name" />
            </div>
        </div>
    );
}