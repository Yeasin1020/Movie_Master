import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { CgProfile } from 'react-icons/cg';
import { Dropdown } from 'flowbite-react';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Movie M4ster
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary>Movie</summary>
                <ul className="p-2 z-10">
                  <li>
                    <a>Bangla</a>
                  </li>
                  <li>
                    <a>Hindi</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Anime</summary>
                <ul className="p-2 z-10">
                  <li>
                    <a>Romantic</a>
                  </li>
                  <li>
                    <a>For kid</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Others</summary>
                <ul className="p-2 z-10">
                  <li>
                    <a>1</a>
                  </li>
                  <li>
                    <a>2</a>
                  </li>
                </ul>
              </details>
            </li>
            <div class="form-control">
              <input
                type="text"
                placeholder="Search"
                class="input input-bordered w-24 md:w-auto"
              />
            </div>
          </ul>
        </div>
        <div className="navbar-end h-10 bg-white ">
          <Dropdown className="" label={user ? <img className="h-7 w-8 rounded-full" src="data:image/jpeg;base64,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"></img> : <CgProfile className="h-7 w-8"></CgProfile>}>
            <Dropdown.Item onClick={() => alert('Dashboard!')}>Dashboard</Dropdown.Item>
            <Dropdown.Item onClick={() => alert('Settings!')}>Settings</Dropdown.Item>
            <Dropdown.Item onClick={() => alert('Earnings!')}>Earnings</Dropdown.Item>
            <Dropdown.Item onClick={() => { user ? handleLogOut() : <Link to="/login"></Link> }}>{user ? "Sign Out" : "Sign In"}</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
