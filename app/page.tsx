'use client'
import Image from 'next/image'
import { Roboto } from '@next/font/google'
import { Provider } from 'react-redux'
import { store } from '@/redux/store/store'
import styles from './page.module.scss'
import Main from '../components/main/Main';

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <Provider store={store}>
      <div className={styles.wrapper}>
        <Main />
      </div>
    </Provider>
  )
}
