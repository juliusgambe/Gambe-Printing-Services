import React, { createContext } from "react";

/*
This context is used to determine whether to hide the navbar when an event happens down the component tree.


For example, when a modal appears, the variable setIsNavBarHidden is trigerre
*/


const NavBarHiddenContext = createContext({
    isNavBarHidden: false,
    setIsNavBarHidden: (hide) => {}
});
// will take in a state with its setState so that child consumers can change the state
export default NavBarHiddenContext;