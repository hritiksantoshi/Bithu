import React from "react";
import GlobalStyles from "./component/styles/GlobalStyle";
import { Header } from "./component/Header";
import { Main } from "./component/Main";
import CharacterSlider from "./component/characterSlider/CharacterSlider";
import HowToMint from "./component/howToMint/HowToMint";
import Team from "./component/team/Team";
import {Faq} from "./component/Faq"
import Footer from "./component/footer";
const App = () => {
  return <>
  <GlobalStyles/>
     <Header/> 
     <Main />
     <CharacterSlider/>
     <HowToMint/>
     <Team/>
     <Faq/>
     <Footer/>
  </>
}

export default App;
