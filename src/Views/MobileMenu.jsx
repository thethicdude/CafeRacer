import {useEffect, useRef} from "react";
import Navbar from "./Navbar";

const MobileMenu = ({onHomeClick, user}) => {
  const drawer = useRef(null);

  const closeMenu = () => {
    drawer.current?.close();
  };

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 761px)");

    const handleResize = () => {
      if (desktop.matches) drawer.current?.close();
    };

    desktop.addEventListener("change", handleResize);
    return () => desktop.removeEventListener("change", handleResize);
  }, []);

  const handleHome = () => {
    closeMenu();
    onHomeClick();
  };

  const name = user?.displayName || "Guest";

  return (
    <>
      <button
        type="button"
        className="cr-menu-toggle"
        aria-label="Open navigation"
        aria-haspopup="dialog"
        aria-controls="cr-mobile-menu"
        onClick={() => drawer.current?.showModal()}
      >
        <span aria-hidden="true">☰</span>
      </button>

      <dialog
        ref={drawer}
        id="cr-mobile-menu"
        className="cr-drawer"
        aria-label="Main menu"
        onClick={(event) => {
          if (event.target === drawer.current) closeMenu();
        }}
      >
        <div className="cr-drawer-panel">
          <div className="cr-drawer-head">
            <div className="cr-profile">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="" />
              ) : (
                <span className="cr-avatar" aria-hidden="true">
                  {name.charAt(0).toUpperCase()}
                </span>
              )}
              <strong>{name}</strong>
            </div>

            <button
              type="button"
              className="cr-menu-close"
              aria-label="Close navigation"
              onClick={closeMenu}
            >
              ×
            </button>
          </div>

          <Navbar onHomeClick={handleHome} />
        </div>
      </dialog>
    </>
  );
};

export default MobileMenu;