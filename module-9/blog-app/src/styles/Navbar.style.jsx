import styled from "styled-components";
import { Link } from "react-router";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) =>
    props.extendNavBar
      ? "110vh"
      : "80px"}; //grab all the props being passed to the component
  background-color: green;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

//left side of Navbar

export const LeftNavbarContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  /* background-color: pink;     */
`;

//right side of Navbar   (search bar)

export const RightNavbarContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  /* background-color: salmon;    */
`;

//dividing divs to make it responsive
//after clicking div>a div will appear after clicking the button to represent the inner container

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;
//styling for each link
export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  //don't display the links
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const SearchImage = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const ChickenImage = styled.img`
  margin: 10px;
  max-width: px;
  height: auto;
`;

//give unicorn to get ...
export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  //whenever width is above 700px>don't display it (hide button)
  @media (min-width: 700px) {
    display: none;
  }
`;
//need a div to represent the Navbar that is not extended
//phone>when you click on navbar>create extended container >

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
