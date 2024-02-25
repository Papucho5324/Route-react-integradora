
const Navbar = () => {
    const routes = [
        {
            path:"/",
            name:"Home"
        },
        {
            path:"/#/paquetes",
            name:"Paquetes"
        },
        {
            path:"/#/registrarse",
            name:"Registrarse"
        },
    ]

  return (
    <nav className="border-b border-gray-300">
        <div className="py-4 px-10 flex justify-between items-center">
            <a className="font-bold text-2xl tracking-widest text-blue-700" href="/"> <span>Xpectra</span> </a>
            <ul className='flex space-x-5'>
                {
                    routes.map((route)=> (
                        <li key={route.name}>
                            <a className='hover:text-blue-700' href={route.path}>{route.name}</a>
                        </li> 
                    ))}
            </ul>
        </div>
    </nav>
    
  )
}

export default Navbar;