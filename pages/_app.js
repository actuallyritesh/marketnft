import '../styles/globals.css'
import LINK from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-black h-full">
      <nav className="p-6">
      <p className="absolute top-10 right-0 h-16 w-16 ..."></p>
      <p className="text-4xl font-bold dark:text-white">NFT Marketplace</p>
      <div className="flex mt-4">
        <LINK href="/">
          <a className="mr-6 text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Home</a>
        </LINK>

        <LINK href="/create-item">
          <a className="mr-6 text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Create Assest</a>
        </LINK>
    
        <LINK href="/my-assets">
          <a className="mr-6 text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">My Assests</a>
        </LINK>
        
        <LINK href="/creator-dasboard">
          <a className="mr-6 text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Creator Dashboard</a>
        </LINK>
      </div>
      </nav>
      <Component{...pageProps} />
    </div>
  )
}

export default MyApp
