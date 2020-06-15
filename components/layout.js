import Head from 'next/head'
import Link from 'next/link'
import NavMenu from '../components/navmenu'

export default function Layout({children, pageTitle}) {
    
    return (
        <div className="content-center">
            
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
