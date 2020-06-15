import Link from 'next/link'




export default function NavMenu() {
  const toggleMenu = (e) => {
    e.preventDefault()
    //let hamburger = document.getElementById('hamburgerbtn');
  
    let mobileMenu = document.getElementById('mainmenu');
  
    
    mobileMenu.classList.toggle('hidden');
    
  }
    return (
        <>
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 bg-opacity-75">
  <div id="hamburgerbtn" className="block lg:hidden">
    <button  onClick={toggleMenu}  className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div id="mainmenu" className="hidden md:visable w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="lg:flex-grow">
      <Link href="/" >
      <a className="block lg:inline-block text-white hover:text-white p-4" >
        Home
      </a>
      </Link>
      <a href="/station" className="block lg:inline-block text-white hover:text-white m-4">
        Radio
      </a>
      <a href="/logs" className="block lg:inline-block text-white hover:text-white m-4">
        Logs
      </a>
      <a href="/pictures" className="block lg:inline-block text-white hover:text-white m-4">
        Pictures
      </a>
      <a href="/dx" className="block lg:inline-block text-white hover:text-white m-4">
        DX
      </a> 
      <a href="/about" className="block lg:inline-block text-white hover:text-white m-4">
        About
      </a>
      <a href="/words" className="block lg:inline-block text-white hover:text-white m-4">
        Words
      </a>
    </div>
  </div>
</nav>
        </>

    )
}