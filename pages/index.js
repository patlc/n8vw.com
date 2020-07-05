import Head from 'next/head'
import Layout from '../components/layout'
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <Layout>
      <NextSeo
        title="N8VW | Home"
        description="Amateur Radio Station N8VW"
        canonical="//www.n8vw.com/"
        openGraph={{
          url: '//www.n8vw.com',
          title: "N8VW | Home",
          description: 'Amateur Radio Station N8VW',
          site_name: 'N8VW',
        }}
        twitter={{
          handle: '@radiosport',
          site: '@radiosport',
          cardType: 'summary_large_image',
        }}
        />
      <div className="container">
        <article className="w-full mx-auto">
          <h2 className="text-center text-5xl">N8VW</h2>
          <img src='./static/images/20200610_193602.jpg' alt="N8VW Shack" />
        </article>
      </div>
    </Layout>
  
  )
}
