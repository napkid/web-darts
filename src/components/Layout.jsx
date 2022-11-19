import BackGround from "./Background.jsx"

const Layout = props => {

  const {children} = props

  return <div className="relative h-screen">
    <div className="absolute top-0 left-0 w-full h-full overflow-scroll">
        <header className="z-50 fixed top-0 w-full py-4">
          <a href="/home">
            <button className="px-4 py-2 font-semibold rounded-full border border-gray-500 bg-emerald-600 text-white absolute top-0 left-0 mx-2 my-2" onClick={(e) => handleNav(e, 'home')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>


            </button>
          </a>
            <h1 className="text-center font-bold text-2xl text-white">
              DartsWeb
            </h1>

          <div className="fixed right-0 p-4 top-0">
            {/* <LocaleSelector /> */}
          </div>
        </header>
        <main className="container max-w-md mx-auto pt-12 h-full">
          {children}
        </main>

    </div>
    <BackGround />
  </div>
}

export default Layout