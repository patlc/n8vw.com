import Layout from '../components/layout';
import { NextSeo } from 'next-seo';

export default () => {
    return (
        <Layout>
            <NextSeo
        title="N8VW | About"
        description="About Amateur Radio Station N8VW"
        canonical="http://www.n8vw.com/about"
        openGraph={{
          url: 'http://www.n8vw.com/about',
          title: "N8VW | About",
          description: 'About Amateur Radio Station N8VW',
          site_name: 'N8VW',
        }}
        twitter={{
          handle: '@radiosport',
          site: '@radiosport',
          cardType: 'summary_large_image',
        }}
        />
            <div className="container text-white">
                <h4 className="test-4xl font-bold">Contests</h4>
                <ul>
                    <li>Coming soon.</li>
                </ul>
                <h4 className="test-4xl font-bold">Nets and Groups</h4>
                <ul>
                    <ul>OMISS #1031</ul>
                    <ul>GERATOL #710</ul>
                </ul>
            </div>
        </Layout>
    )
}