import Layout from '../components/layout';
import { NextSeo } from 'next-seo';


const Station = () => {
    return (
        <Layout>
            <NextSeo
        title="N8VW | Station"
        description="Station Description of Amateur Radio Station N8VW"
        canonical="//www.n8vw.com/station"
        openGraph={{
          url: '//www.n8vw.com/station',
          title: "N8VW | Station",
          description: 'Amateur Radio Station N8VW',
          site_name: 'N8VW',
        }}
        twitter={{
          handle: '@radiosport',
          site: '@radiosport',
          cardType: 'summary_large_image',
        }}
        />
            <article className="text-white p-4">
                <h3 className="text-4xl">Radios</h3>
                <ul>
                    <li>Elecraft K3 with K3SYNA boards</li>
                    <li>Electraft K2 this one has worked the world on 160m qrp</li>
                    <li>Icom IC-706MKIIG for future VHF/UHF rover contesting</li>
                </ul>
                <h3 className="text-4xl">Other Equipment</h3>
                <ul>
                    <li>Commander HF-1250</li>
                    <li>Palstar ATK-2</li>
                </ul>
                <h3 className="text-4xl">Antennas</h3>
                <ul>
                    <li>90' ladder-line fed dipole @45'</li>
                    <li>5el 6m LFA</li>
                    <li>3el 6m</li>
                    <li>6m Moxon (pvc tubing and copperweld wire)</li>
                    <li>6m halo</li>
                    <li>Cushcraft 13b2 (2m)</li>
                </ul>
            </article>
        </Layout>
    )
};

export default Station;