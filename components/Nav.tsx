"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";

import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

import Logo from "../public/assets/images/logo.svg";

function Nav() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setProviders();
  }, []);

  const signOut = () => {};
  const handleToggle = () => {
    setToggleDropdown((prev) => !prev);
  };

  return (
    <nav className="w-full flex flex-row items-center justify-between mb-16 pt-3">
      <Link href={"/"} className="flex items-center gap-2">
        {/* Logo */}
        <Image
          className="object-contain"
          width={30}
          height={30}
          src={Logo}
          alt="LOGO"
        />
        <p className="logo_text">Promptopia</p>
      </Link>
      {/* desktop nav */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5 items-center">
            <Link href={"/create-prompt"} className="black_btn">
              Create Post
            </Link>
            <button className="outine_btn" type="button" onClick={signOut}>
              Sign out
            </button>
            <Link href={"/profile"}>
              <FaUserCircle size="2rem" />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      {/* mobile nav */}
      <div className="sm:hidden flex relative ">
        {isUserLoggedIn ? (
          <div className="flex" onClick={handleToggle}>
            <AiOutlineMenu size="2rem" />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href={"/profile"}
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href={"/profile"}
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  className="black_btn mt-5 w-full"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
