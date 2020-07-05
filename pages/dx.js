import Layout from '../components/layout';
import { NextSeo } from 'next-seo';

export default () => {
    return (
        <Layout>
            <NextSeo
        title="N8VW | DX"
        description="Past, Present, and Future DX operations of Amateur Radio Station N8VW"
        canonical="//www.n8vw.com/dx"
        openGraph={{
          url: '//www.n8vw.com/dx',
          title: "N8VW | DX",
          description: 'Pat, Present, and Future DX operations Amateur Radio Station N8VW',
          site_name: 'N8VW',
        }}
        twitter={{
          handle: '@radiosport',
          site: '@radiosport',
          cardType: 'summary_large_image',
        }}
        />
            <article className="text-white pl-4 pb-4">
                <h3 className="text-4xl">DX</h3>
                <ul>
                    <li>NZ4K/TI2 - 1995</li>
                    <li>N8VW/PJ2 - 2001</li>
                    <ll>N8VW/KP4 - 2019</ll>
                </ul>
            </article>
        </Layout>
    )
}