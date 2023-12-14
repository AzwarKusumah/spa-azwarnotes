import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div className="navbar bg-base-100 px-16 sticky top-0 z-50">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
            <p>RyukoNotes</p>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/archive" className="relative">
                <span className="absolute top-2 right-3 mt-1 ml-1 h-9 w-[90px] bg-secondary"></span>
                <span className="relative inline-block h-full w-full border-2 border-neutral bg-neutral px-3 py-1 text-base text-base-100 transition duration-100 hover:text-yellow-500">
                  Archive
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navigation;
