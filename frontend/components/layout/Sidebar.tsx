import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo, useEffect } from "react";
import ArticleIcon from "../icons/ArticleIcon";
import CollapsIcon from "../icons/CollapsIcon";
import HomeIcon from "../icons/HomeIcon";
import LogoIcon from "../icons/Logo";
import LogoutIcon from "../icons/LogoutIcon";
import UsersIcon from "../icons/UsersIcon";
import VideosIcon from "../icons/VideosIcon";

const menuItems = [
  { id: 1, label: "Início", icon: HomeIcon, link: "/" },
  //{ id: 2, label: "Clientes Anuais", icon: ArticleIcon, link: "/clientes_anuais" },
  { id: 3, label: "Clientes Anuais 1", icon: UsersIcon, link: "/users" },
  { id: 4, label: "Clientes Anuais 2", icon: VideosIcon, link: "/tutorials" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 flex justify-between flex-col",
    {
      ["w-60"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu: any) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu?.id === menu.id,
      }
    );
  };

  useEffect(() => {
    const expand = document.getElementById("expand");
    const onMouseOver = () => {
      setIsCollapsible(!isCollapsible);
    };


    if (expand) {
      expand.addEventListener("mouseover", onMouseOver);
      expand.addEventListener("mouseleave", onMouseOver);

      return () => {
        expand.removeEventListener("mouseover", onMouseOver);
        expand.removeEventListener("mouseleave", onMouseOver);
      };
    }
  }, []);

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <>
      <div id="expand"
        className={wrapperClasses}
        style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
      >
        <div className=" flex flex-col bg-gray-800 ">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center pl-1 gap-4">
              <LogoIcon />
              <span
                className={classNames("mt-2 text-lg font-medium text-text", {
                  hidden: toggleCollapse,
                })}
              >
                Logo
              </span>
            </div>
            {isCollapsible && (
              <button id="toggle"
                className={collapseIconClasses}
                onClick={handleSidebarToggle}>
                <CollapsIcon />
              </button>
            )}
          </div>

          <div className="flex flex-col items-start mt-24">
            {menuItems.map(({ icon: Icon, ...menu }) => {
              const classes = getNavItemClasses(menu);
              return (
                <div key={menu.id} className={classes}>
                  <Link legacyBehavior href={menu.link}>
                    <a className="flex py-4 px-3 items-center w-full h-full">
                      <div style={{ width: "2.5rem" }}>
                        <Icon />
                      </div>
                      {!toggleCollapse && (
                        <span
                          className={classNames("text-md font-medium text-text-light")}>
                          {menu.label}
                        </span>
                      )}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`${getNavItemClasses({})} px-3 py-4`}>
          <div style={{ width: "2.5rem" }}>
            <LogoutIcon />
          </div>
          {!toggleCollapse && (
            <span className={classNames("text-md font-medium text-text-light")}>
              Logout
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
