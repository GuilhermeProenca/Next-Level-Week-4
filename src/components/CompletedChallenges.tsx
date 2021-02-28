import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import DarkThemeContext from '../contexts/DarkThemeContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    
    const {challengesCompleted} = useContext(ChallengesContext);

    const {isDark} = useContext(DarkThemeContext)
    
    return(
        <div className={ `${styles.completedChallengesContainer} ${isDark}`}>
            <span> Desafios Completos </span>
            <span> {challengesCompleted} </span>
        </div>
    );
}