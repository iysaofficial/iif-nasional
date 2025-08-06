// Import CSS

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("hidden-scrolling");
  };

  const collapseSubMenu = () => {
    const activeSubMenu = document.querySelector(
      ".menu-item-has-children.active .sub-menu"
    );
    activeSubMenu.removeAttribute("style");
    activeSubMenu.parentElement.classList.remove("active");
  };

  const resizeFix = () => {
    if (isOpen) {
      toggleNav();
    }
    if (document.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  };

  useEffect(() => {
    const mediaSize = 991;

    const handleToggleNav = () => {
      const navMenu = document.querySelector(".nav-menu");
      const menuOverlay = document.querySelector(".menu-overlay");
      navMenu.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      toggleNav();
    };

    const handleMenuClick = (event) => {
      if (
        event.target.hasAttribute("data-toggle") &&
        window.innerWidth <= mediaSize
      ) {
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        if (menuItemHasChildren.classList.contains("active")) {
          collapseSubMenu();
        } else {
          if (document.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
          }
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > mediaSize) {
        resizeFix();
      }
    };

    document
      .querySelector(".open-nav-menu")
      .addEventListener("click", handleToggleNav);
    document
      .querySelector(".close-nav-menu")
      .addEventListener("click", handleToggleNav);
    document
      .querySelector(".menu-overlay")
      .addEventListener("click", handleToggleNav);
    document
      .querySelector(".nav-menu")
      .addEventListener("click", handleMenuClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document
        .querySelector(".open-nav-menu")
        .removeEventListener("click", handleToggleNav);
      document
        .querySelector(".close-nav-menu")
        .removeEventListener("click", handleToggleNav);
      document
        .querySelector(".menu-overlay")
        .removeEventListener("click", handleToggleNav);
      document
        .querySelector(".nav-menu")
        .removeEventListener("click", handleMenuClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="header-main">
        <div className="logo">
          <img src="./assets/logo/iif.WebP" alt="" />
        </div>
        <div className="open-nav-menu">
          <span></span>
        </div>
        <div className="menu-overlay"></div>
        <nav className="nav-menu ">
          <div className="close-nav-menu">
            {/* <img
                src="./assets/images/logo/icons8-close.svg"
                alt="close"
              /> */}
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <ul className="menu">
            <li className="menu-item mt-0">
              <a href="/">Utama</a>
            </li>
            <li className="menu-item">
              <a href="/#about">Tetang</a>
            </li>
            {/* <li className="menu-item menu-item-has-children">
              <a href="" data-toggle="sub-menu">
                Curation
              </a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a href="/CurationOSPC">Curation OSPC</a>
                </li>
                <li className="menu-item">
                  <a href="/CurationLKTIN">Curation LKTIN</a>
                </li>
              </ul>
            </li> */}
            <li className="menu-item menu-item-has-children">
              <a href="/lowtahun" data-toggle="sub-menu">
                Daftar Pemenang
              </a>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="" data-toggle="sub-menu">
                Kurasi
              </a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/u/0/folders/1SyFTOmgLJHpYxHnnsSFntJhZdMTWqoN4?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kurasi 2025
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1K2ZmLBiRhm2NByXjy3WikeARYimR0DY_?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kurasi 2024
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1OV_ezBzC8nIE5iWQ_h96jwmQN2Otl66s?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kurasi 2023
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="" data-toggle="sub-menu">
                Liputan Media
              </a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a
                    href="https://docs.google.com/document/d/1ezesJ_6t1-_r-XvQBY1dhonXeDEK2qK6Oyqfyc0OBng/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Press Release 2025
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/file/d/11i9_zuCRNPiDdsVmQM_--YbQEOgRvlKl/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Press Release 2024
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className="menu-item">
              <a href="/NewsletterPage">Guide Book</a>
            </li> */}
            {/* <li className="menu-item">
              <a href="/NewsletterPage">Newsletter</a>
            </li> */}
            <li className="menu-item menu-item-has-children">
              <a href="" data-toggle="sub-menu">
                Gallery
              </a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1tWerDv4ZyIWdBsumxA3pdcYArdOobaKY?usp=sharing"
                    target="_blank"
                  >
                    2025
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a
                href="https://drive.google.com/drive/folders/1VvCQzxdZkr5j15nAN17PHyTeeTes15Qj?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Sertifikat Supervisor
              </a>
            </li>
            <li className="menu-item">
              <a href="/faq">FAQ</a>
            </li>
            <li className="menu-item">
              <a href="/#contact">Kontak</a>
            </li>
            {/* <button type="button" class="btn btn-outline-primary">Registration</button> */}
            {/* <button type="button" class="btn btn-outline-secondary">
              <a href="https://drive.google.com/file/d/1_znDEnS9LyvnZ5422OPDdAcS3Jyh6-V9/view?usp=sharing" rel="noreferrer noopener" target="_blank"
              rel="noreferrer">
                Buku Panduan
              </a>
            </button> */}
          </ul>
        </nav>
      </div>
      {/* </div> */}
    </header>
  );
};
export default Header;
