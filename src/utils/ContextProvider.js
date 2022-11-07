import { useState } from "react";
import { ModalContext } from "./ModelContext";
import {
  connectWallet,
  connectWalletLocaly,
  isWalletConnected,
  disconnectWallet,
} from "../config";

const ContextProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [walletModalvisibility, setModalvisibility] = useState(false);
  const [shareModalVisibility, setShareModalvisibility] = useState(false);
  const [metamaskModalVisibility, setMetamaskModalVisibility] = useState(false);
  const [connectWalletModal, setConnectWalletModal] = useState(false);
  const [loading,setloading] = useState(false);
  const [account, setAccount] = useState("");
  const [remaining, setRemaining] = useState();
  

 
  const loader = () => {
    setloading(!loading);
  }
  
  const mintModalHandle = () => {
    setVisibility(!visibility);
  };
  const walletModalHandle = () => {
    setModalvisibility(!walletModalvisibility);
  };
  const shareModalHandle = (e) => {
    e.preventDefault();
    setShareModalvisibility(!shareModalVisibility);
  };

  const metamaskModalHandle = () => {
    setMetamaskModalVisibility(!metamaskModalVisibility);
  };

  const connectWalletModalHanlde = () => {
    if (!isWalletConnected()) {
      setConnectWalletModal(!connectWalletModal);
    }
  };

  const connectWalletHandle = async () => {
    const accounts = await connectWallet();
    setAccount(accounts);
    if (!isWalletConnected()) {
      connectWalletLocaly();
    }
    setModalvisibility(!walletModalvisibility);
  };

  const isWalletAlreadyConnected = async () => {
    if (isWalletConnected()) {
      const accounts = await connectWallet();
      setAccount(accounts);
    }
  };

  const disconnectWalletFromApp = () => {
    disconnectWallet();
    setAccount("");
  };

  return (
    <ModalContext.Provider
      value={{
        visibility,
        mintModalHandle,
        walletModalHandle,
        walletModalvisibility,
        shareModalVisibility,
        shareModalHandle,
        metamaskModalVisibility,
        metamaskModalHandle,
        account,
        connectWalletHandle,
        isWalletAlreadyConnected,
        disconnectWalletFromApp,
        connectWalletModalHanlde,
        connectWalletModal,
        remaining,
        setRemaining,
        loader,
        loading,
        setloading
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;
