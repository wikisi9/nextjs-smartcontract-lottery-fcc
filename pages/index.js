import Head from "next/head"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
//import ManualHeader from "@/components/ManualHeader";
import Header from "@/components/Header"
import LotteryEntrance from "@/components/LotteryEntrance"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our smart contract lottery" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <LotteryEntrance />
        </>
    )
}
