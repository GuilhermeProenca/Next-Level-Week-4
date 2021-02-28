import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import DarkThemeContext from '../contexts/DarkThemeContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    const {isDark} = useContext(DarkThemeContext)

    return (
        <header className={ `${styles.experienceBar} ${isDark}`}>
            <span>0 XP</span>
            <div>
            <div style={{width: percentToNextLevel + '%'}}></div>
                <span style={{left: percentToNextLevel + '%'}}>{currentExperience} XP</span>
            </div>
            <span>{experienceToNextLevel} XP</span>
        </header>
    );
}