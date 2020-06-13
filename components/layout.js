import Head from 'next/head'
import Link from 'next/link'
import NavMenu from '../components/navmenu'

export default function Layout({children, pageTitle}) {
    
    return (
        <div className="content-center">
            <Head>
                <link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Fredericka+the+Great:regular&amp;subset=latin" media="all"></link>
            </Head>
            {/* navmenu */}
            
            <div className="w-full">
                <NavMenu />
            </div>
            <main className="flex bg-opacity-75 bg-blue-500">
                {children}
            </main>
                    
                
            
           {/* footer  */}
           
          
        </div>
    )

}
