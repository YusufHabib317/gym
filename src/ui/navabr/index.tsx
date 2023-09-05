import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "@/assets/Logo.png";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "../ActionButton";

interface NavbarProps {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { selectedPage, setSelectedPage, isTopOfPage } = props;

  const flexBetween = "flex items-center justify-between";

  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  const routes = [
    { page: "Home" },
    { page: "Benefits" },
    { page: "Our Classes" },
    { page: "Contact Us" },
  ];

  return (
    <nav>
      <div
        className={`
      ${navBackground}
      ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src={logo} alt="logo" />
            {/* right side */}
            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {routes.map((route, idx) => {
                    return (
                      <Link
                        key={idx}
                        page={route.page}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                    );
                  })}
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setMenuToggle((prev) => !prev)}
              >
                <Bars3Icon className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile menue */}
      {!isAboveMediumScreen && menuToggle && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-300 drop-shadow-md">
          {/* clsoe icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setMenuToggle((prev) => !prev)}>
              <XMarkIcon className="w-6 h-6 text-white" />
            </button>
          </div>

          <div
            className={`flex items-start  flex-col gap-8 text-xl px-16 py-11`}
          >
            {routes.map((route, idx) => {
              return (
                <Link
                  key={idx}
                  page={route.page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  toggleMenu
                />
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
