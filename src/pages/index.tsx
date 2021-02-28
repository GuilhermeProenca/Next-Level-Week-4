import Head from 'next/head'
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css'
import React, {useState, useEffect} from 'react'

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { DarkThemeContext } from '../contexts/DarkThemeContext';

interface HomeProps {
  level: number;
  currentExperience: number; 
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const [isDark, setDarkTheme] = useState(false)
  const dark = isDark ? styles.dark : '';
  
  useEffect(()=>{
    setDarkTheme(JSON.parse(localStorage.getItem('darkTheme')) || false)
  }, [])

  function putDarkTheme() {
    setDarkTheme(!isDark);
  }

  useEffect(()=>{
    localStorage.setItem('darkTheme', JSON.stringify(isDark))
  }, [isDark])

  return (
    <DarkThemeContext.Provider value={{isDark, putDarkTheme}}>
      <ChallengesProvider 
          level={props.level} 
          currentExperience={props.currentExperience}
          challengesCompleted={props.challengesCompleted}
        >
          <div className={`${isDark ? styles.containerDark : styles.container} ${isDark}`}>
            <Head>
              <title> Início | move.it </title>
            </Head>

            <ExperienceBar />
            <CountdownProvider>
              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
            </section>
        </CountdownProvider>
          <header>
          <button onClick={putDarkTheme}> {isDark ? <img src="icons/sun.svg" alt="Sun"/> : <img src="icons/moon.svg" alt="Moon"/> } </button>
          </header>
        </div>
      </ChallengesProvider>
    </DarkThemeContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0)
    }
  }
}