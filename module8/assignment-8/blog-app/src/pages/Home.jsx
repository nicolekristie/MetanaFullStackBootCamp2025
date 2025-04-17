import Header from "../components/Header";
import food from "../../src/images/food.jpeg";
import { StyledButton } from "../styles/Button.style";
import { GlobalStyles } from "../styles/GlobalStyles.style";
import { Image } from "../components/Image";
import img1 from '../images/chicken.jpg'
import img2 from '../images/pasta.jpg'
import img3 from '../images/sideDishes.jpg'
import { MyForm } from "../components/Form";
import { StyledForm } from "../styles/Form.style";


export default function HomePage() {


  return (
    <>
      <Header />
      <h2>*******************TRENDING CATAGORIES**********************</h2><br/><br/><br/>
         <div className="container">
          <Image image={img1}/>
          <Image image={img2}/>
          <Image image={img3}/>      
         </div>
        <h3 className="subscribe-text">SUBSCRIBE TO GET FREE RECIPES SENT TO YOUR INBOX!</h3>
      <GlobalStyles />   
      <StyledForm>
        <MyForm/>
        </StyledForm> 
    
      {/* <StyledButton
        buttonLabel="Click to Subscribe"
        backgroundColor="green"
      ></StyledButton> */}
      

    </>
  );
}
