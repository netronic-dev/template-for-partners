import React, { useContext, useState } from "react";
import { createContext } from "react";

const ModalsContext = createContext();

export const useModals = () => {
  return useContext(ModalsContext);
};

export default function ModalsProvider(props) {
  const [region, setRegion] = useState(false);
  const [userName, setUsername] = useState(null);
  const [callFormVisibility, setCallFormVisibility] = useState(false);

  function turnOnScroll() {
    document.body.className = "";
  }

  function turnOffScroll() {
    document.body.className = "modal_opened";
  }

  const setUserName = (name) => {
    setUsername(name);
  };

  const setRegionName = (name) => {
    setRegion(name);
  };

  function formCallChangeVisibility() {
    setCallFormVisibility(!callFormVisibility);
    if (callFormVisibility) {
      turnOnScroll();
    } else {
      turnOffScroll();
    }
  }

  const closeModal = () => {
    turnOnScroll();
  };

  return (
    <ModalsContext.Provider
      value={{
        setRegionName,
        region,

        setUserName,
        userName,

        callFormVisibility,
        formCallChangeVisibility,

        closeModal,
      }}
    >
      {props.children}
    </ModalsContext.Provider>
  );
}
