import React from "react";

import User from "./User/UserContext";
import RenderDataHome from "./RenderDataScreens/RenderDataHome";

import { combineComponents } from "./combineComponents";

interface AppContextProviderProps {
  children: React.ReactNode;
}

const providers = [
  User,
  RenderDataHome
];

export const AppContextProvider: React.FC<AppContextProviderProps> = combineComponents(...providers);