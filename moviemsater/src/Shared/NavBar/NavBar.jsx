import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Movie M4ster</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li tabIndex={0}>
        <details>
          <summary>Movie</summary>
          <ul className="p-2 z-10">
            <li><a>Bangla</a></li>
            <li><a>Hindi</a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Anime</summary>
          <ul className="p-2 z-10">
            <li><a>Romantic</a></li>
            <li><a>For kid</a></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Others</summary>
          <ul className="p-2 z-10">
            <li><a>1</a></li>
            <li><a>2</a></li>
          </ul>
        </details>
      </li>
      <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    </div>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login' className="btn">Login</Link>
  </div>
</div>
        </div>
    );
};

export default NavBar;