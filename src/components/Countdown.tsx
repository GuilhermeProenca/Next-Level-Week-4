import styles from '../styles/components/Countdown.module.css';
import { useContext, useEffect, useState } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

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

    return (
        <div>
            <div className={styles.countdownContainer}>
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
                    className={styles.countdownButton}
            > 
                Ciclo encerrado
                <img src="icons/check.png" alt="levelcheck"/>
            </button>
            ) : (
               <>
                    { isActive ? (
                    <button 
                        type="button" 
                        className={ `${styles.countdownButton} ${styles.countdownButtonActive}` }
                        onClick={resetCountdown}
                    >    
                        Abandonar ciclo
                        <img src="icons/x-cancel-white.svg" alt="Close" />
                    </button>
                    ) : (
                    <button 
                        type="button"
                        className={styles.countdownButton}
                        onClick={startCountdown}
                    > 
                        Iniciar ciclo
                        <img src="icons/play.svg" alt="Arrow" />
                    </button>
                    ) }
               </> 
            ) }
        </div>
    );
}