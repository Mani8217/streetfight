import { Outlet , Link } from "react-router-dom";

function Layout(){
    return (
       <>
        
        
         
         <nav className="layout">
           <ul>
             <li>
                <Link to="/" className="link">Home</Link>
             </li>
             <li>
                <Link to="/blogs" className="link">Blogs</Link>
             </li>
             <li>
                <Link to="/trailers" className="link">Trailers</Link>

             </li>
             <li>
                <Link to="/story" className="link">Story</Link>
             </li>
            </ul>
          </nav>
        <Outlet />
       </>
    )
}
export default Layout;