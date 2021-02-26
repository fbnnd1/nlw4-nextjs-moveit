import Head from 'next/head'
import styles from '../styles/pages/Home.module.css';
import {ExperienceBar} from '../components/ExperienceBar';
import {Profile} from '../components/Profile';
import { CompleteChallanges } from '../components/CompleteChallanges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallanges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}