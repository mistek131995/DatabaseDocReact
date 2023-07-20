import React from 'react';
import './App.css';
import {Routes} from "./routing/Routes";
import {RecoilRoot} from "recoil";

export const App = () => {

  return <RecoilRoot>
    <Routes/>
  </RecoilRoot>
}