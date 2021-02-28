import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import DarkThemeContext from '../contexts/DarkThemeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    
    const {isDark} = useContext(DarkThemeContext)
    
    return (
        <div className={ `${styles.profileContainer} ${isDark}`}>
            <img src="https://github.com/GuilhermeProenca.png" alt="Guilherme Proença" />
        
            <div>
                <strong className={isDark && styles.darkTheme}> Guilherme Proença </strong>
                    <p> 
                        <img src="icons/level.svg" alt="Level"/>
                        Level { level } 
                    </p>
            </div>
        </div>
    )
}