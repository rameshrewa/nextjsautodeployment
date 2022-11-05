import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ homepage }) {
  return (
    <div>
    <ul style={{ display: 'grid', 'grid-template-columns': '1fr 1fr 1fr', 'grid-gap': '4em' }}>
    <div
      dangerouslySetInnerHTML={{__html: homepage.data.attributes.Description}}
    /> 
    </ul>
  </div>
    
  )
}


export async function getStaticProps() {
  const homepage = await fetch('http://localhost:1337/api/homepage').then(res => res.json());
  console.log(homepage);
  return {
    props: {
      homepage
    }
  }
}