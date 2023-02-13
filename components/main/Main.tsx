'use client'

import { useGetAllProductsQuery } from '@/redux/api/products/product.api';
import styles from './Main.module.scss';
import { Roboto } from '@next/font/google'
import Banner from '../banner/Banner';
import CardProduct from '../card/CardProduct';

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Main() {

    const { data, isLoading, error } = useGetAllProductsQuery(9)
    return (
        <main className={styles.main}>
            <Banner />
            {data?.map((product: any) => <div className={roboto.className} key={product.id}>
                <CardProduct product={product} />
            </div>)}
        </main>
    )
}