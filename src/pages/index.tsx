import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="container">
      <img src="https://media.istockphoto.com/id/1273611387/photo/woman-is-holding-credit-card-and-using-laptop-computer-shopping-christmas-gifts.jpg?s=612x612&w=0&k=20&c=n1iZdFI1hfuhCSg8gHXcU8Spyu-CwMbn3wjddOnYfGU="alt="banner" height={"800px"} width={"100%"}/>

    </div>
  )
}
