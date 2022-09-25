import React from "react";
import styles from './App.module.css'
import { AuthProvider } from "react-auth-kit";
import RoutesComponent from "./Routes";

function App() {
  return (
    <AuthProvider authName={"_auth"} authType={"cookie"}>
      <div className={styles['app']}>
         <RoutesComponent /> 
      </div>
    </AuthProvider>
  );
}

export default App;
