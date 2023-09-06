import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import RecipeList from "../pages/RecipeList";
import NewRecipe from "../pages/NewRecipe";
import { useAutoLoginQuery } from '../app/services/userApi'

function App() {
  
  const { 
    data: user=null, 
    error,
    isLoading,
    isFetching,
    isUninitialized,
    isSuccess,
    isError,
    refetch
  } = useAutoLoginQuery()
  console.log("🚀 ~ file: App.jsx:31 ~ App ~ isLoading:", isLoading)
  console.log("🚀 ~ file: App.jsx:22 ~ App ~ isFetching:", isFetching)
  console.log("🚀 ~ file: App.jsx:31 ~ App ~ isUninitialized:", isUninitialized)
  console.log("🚀 ~ file: App.jsx:31 ~ App ~ isSuccess:", isSuccess)
  console.log("🚀 ~ file: App.jsx:31 ~ App ~ isError:", isError)
  console.log("🚀 ~ file: App.jsx:22 ~ App ~ error:", error)
  console.log("🚀 ~ file: App.jsx:22 ~ App ~ user:", user)

  if (!user) return <Login />;

  return (
    <>
      <NavBar />
      <main>
        <Switch>
          <Route path="/new">
            <NewRecipe user={user} />
          </Route>
          <Route path="/">
            <RecipeList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
