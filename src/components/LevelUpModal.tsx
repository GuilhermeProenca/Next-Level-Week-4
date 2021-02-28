
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import DarkThemeContext from '../contexts/DarkThemeContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    const {isDark} = useContext(DarkThemeContext)

    new Audio('/som-level-up.wav').play();

    return (
        <div className={styles.overlay}>
            <div className={ `${styles.container} ${isDark}`}> 
                <header> { level } </header>

                <strong> Parabéns! 🥳 </strong>
                <p> Você alcançou um novo level. </p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar Modal"/>
                </button>
            </div>
        </div>
    )
}