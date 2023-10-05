import { NavLink } from "react-router-dom";
import userDefaultPic from '../../../public/assets/user.png'
import AllContext from "../allContext/AllContext";

const Navbar = () => {

const {user,logOut} = AllContext();


const handlelogOut =()=>{


  logOut()
  .then(()=>{console.log('Sign-out successful.')})
  .catch((error)=>{console.log(error)})

}



const links =<>
    
<li> <NavLink to='/'>Home</NavLink> </li>
<li> <NavLink to='/about'>About</NavLink> </li>
<li> <NavLink to='/career'>Career</NavLink> </li>


{ user?
<>

<button   onClick={handlelogOut} className="bg-[#403F3F] text-white px-6 py-1  ">LogOut</button>
</>
:
<li> <NavLink to='/login'>Login</NavLink> </li>


}
<li> <NavLink to='/register'>Register</NavLink> </li>
</>
console.log('our',user?.photoURL)
const userImage = user?.photoURL;

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
  
   {links}

      </ul>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">


  {links}
   

    </ul>
  </div>
  <div className="navbar-end">
<div className="flex items-center">
 <div>
 <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {/* <img src={user? user.photoURL:userDefaultPic} /> */}
       
         <img src={userImage} alt="" />
       
        </div>
      </label>
 </div>
 <div>


{ user?
   <button   onClick={handlelogOut} className="bg-[#403F3F] text-white px-6 py-1  ">LogOut</button>
 :
 <button className="bg-[#403F3F] text-white px-6 py-1  ">Login</button>


}
 </div>

</div>
  </div>
</div>
    );
};

export default Navbar;