import styles from '../styles/components/Countdown.module.css';
import { useContext, useEffect, useState } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import DarkThemeContext from '../contexts/DarkThemeContext';

export function Countdown () {
    const { minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown, 
        } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    const {isDark} = useContext(DarkThemeContext)

    return (
        <div>
            <div className={ `${styles.countdownContainer} ${isDark}`}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className={ `${styles.countdownButton} ${isDark}`}
            > 
                Ciclo encerrado
                <p>
                    <img className={styles.Check} src="icons/check.png" alt="levelcheck"/>
                </p>
                </button>
            ) : (
               <>
                    { isActive ? (
                    <button 
                        type="button" 
                        className={`${styles.countdownButton} ${styles.countdownButtonActive} ${isDark}`}
                        onClick={resetCountdown}
                    >
                        Abandonar ciclo
                        <img src="icons/x-cancel-white.svg" alt="Close" className={styles.Check}/>
                    </button>
                    ) : (
                    <button 
                        type="button"
                        className={`${styles.countdownButton} ${isDark}`}
                        onClick={startCountdown}
                    >
                        Iniciar ciclo
                        <img src="icons/play.svg" alt="Arrow" className={styles.Check}/>
                    </button>
                    ) 
}
               </> 
            ) }
        </div>
    );
}