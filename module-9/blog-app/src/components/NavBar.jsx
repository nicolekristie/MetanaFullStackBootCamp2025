import { React, useState } from "react";
import {
  NavbarContainer,
  LeftNavbarContainer,
  RightNavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  SearchImage,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar.style";


// from "../styles/Navbar.style";
import SearchImg from "../images/search.png";

function NavBar() {
  const [extendnavbar, setExtendnavBar] = useState(false); //represents the state of the button

  return (
    // <NavbarContainer extendnavbar=     {extendnavbar}>
     <NavbarContainer extendnavbar="false">
      <NavbarInnerContainer>
        <LeftNavbarContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink className="blog-list"to="/bloglist"> BlogList</NavbarLink>
            <NavbarLink to="/blogdetail"> BlogDetail</NavbarLink>
            <NavbarLink to="/admindashboard"> AdminDashboard</NavbarLink>
            <NavbarLink to="/login"> Login</NavbarLink>
            <OpenLinksButton onClick={()=> {
                            setExtendnavBar((curr)=> !curr);
                        }}> {extendnavbar ? <> &#10005;</> : <> &#10005;</>} </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftNavbarContainer>
        <RightNavbarContainer>
          <SearchImage src={SearchImg}></SearchImage>
        </RightNavbarContainer>
      </NavbarInnerContainer>
      {extendnavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/bloglist"> BlogList</NavbarLinkExtended>
          <NavbarLinkExtended to="/blogdetail"> BlogDetail</NavbarLinkExtended>
          <NavbarLinkExtended to="/admindashboard">
            {" "}
            AdminDashboard
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/login"> Login</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default NavBar;
