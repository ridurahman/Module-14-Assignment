"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
//import { cookies } from "next/headers";

const Menu = () => {
  const activeRoute = usePathname();
  //const cookieStore = cookies();
  //const token = cookieStore.get("token");

  return (
    <div className="nav">
      <ul className="menu">
        <li>
          <Link
            className={activeRoute === "/" ? "active-link" : ""}
            href="/"
          >
            Home
          </Link>
        </li>
        {activeRoute !== "/pages/dashboard" && (
          <li>
            <Link
              className={
                activeRoute === "/pages/registration"
                  ? "active-link"
                  : ""
              }
              href="/pages/registration"
            >
              Registration
            </Link>
          </li>
        )}
        {activeRoute !== "/pages/dashboard" && (
          <li>
            <Link
              className={
                activeRoute === "/pages/login" ? "active-link" : ""
              }
              href="/pages/login"
            >
              Login
            </Link>
          </li>
        )}
        <li>
          <Link
            className={
              activeRoute === "/pages/dashboard"
                ? "active-link"
                : ""
            }
            href="/pages/dashboard"
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
