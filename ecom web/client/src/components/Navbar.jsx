
const Navbar = () => {
  return (
    <>
     <nav className=" text-green-500 w-full flex justify-between ">
        <div className="">logo</div>
        <ul className=" flex justify-around ">
            <li><a className="m-2" href="/">Home</a></li>
            <li><a className="m-2" href="./about">About</a></li>
            <li><a className="m-2" href="./contact">Contact</a></li>
        </ul>
     </nav>

    </>
  )
}

export default Navbar