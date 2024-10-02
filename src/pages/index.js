import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Navbar from '../components/Navbar';
import Heroheader from '../components/Heroheader';
import Features from '../components/Features';
import Banner from '../components/Banner';
import Footer from "../components/Footer";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Petrite</title>
        <meta name="description" content="The Number one Pet Food Distributor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Heroheader/>
      <Features />
      <Services/>
    </>
  );
}
