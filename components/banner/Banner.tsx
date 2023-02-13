'use client'
import styles from './Banner.module.scss'
import { Roboto } from '@next/font/google'
import Image from 'next/image'
import arrow from './assets/arrow.svg'
import bannerup from './assets/bannerup.png'
import bannerdown from './assets/bannerdown.png'

const roboto = Roboto({ subsets: ['latin'], weight: '500' })

export default function Banner() {

    return (
        <div className={styles.promoContainer}>
            <div className={roboto.className} >
                <strong>Всё для комфортной работы</strong>
            </div>
            <div className={styles.arrow}>
                <Image src={arrow} width={40} height={16} alt='arrow' />
            </div>
            <div>
                <Image src={bannerup} width={332} height={140} alt='баннер ' />
            </div>
            <div>
                <Image src={bannerdown} width={332} height={140} alt='баннер' />
            </div>
        </div>

    )
}