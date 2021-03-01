import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import DarkThemeContext from '../contexts/DarkThemeContext';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const {activeChallenge, resetChallenge, completedChallenge} = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);
    
    const {isDark} = useContext(DarkThemeContext)
    const dark = isDark ? styles.darkTheme : '';

    function handleChallengeSucceeded(){
        completedChallenge();
        resetCountdown();
    }

    function handleChallengeFailded(){
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={ `${styles.challengeBoxContainer} ${dark}` }>
            {activeChallenge ? (
                <div className={ `${styles.challengeActive} ${dark}`} >

                    <header>Ganhe {activeChallenge.amount} XP</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailded}
                            >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                            >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
            <div className={ `${styles.challengeNoActive} ${dark}`}>
                <strong className={isDark && styles.darkTheme}>Finalize o ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up"/>
                        Avance de level completando desafios.
                </p>
            </div>
            )}
        </div>
    );
}