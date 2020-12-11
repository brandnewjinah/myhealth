import React, { useState, useEffect } from "react";
import axios from "axios";
// import {} from "../../services/api";

//import components
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const getData = async () => {};

  useEffect(() => {
    getData();
  }, []);

  return <HomePresenter />;
};

export default HomeContainer;
