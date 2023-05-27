import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  BrowserRouter
} from "react-router-dom";
import { useQuery } from "react-query";

import './App.css'
import {Map} from "./features/map/Map";
import {Rides} from "./pages/Rides";

import {get_hubs} from "./features/api/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rides />
  }
]);

function App() {
  useQuery('hubs', get_hubs)

  return (
    <div>
      <BrowserRouter>
        <Rides />
      </BrowserRouter>
      {/*<RouterProvider router={router} />*/}
    </div>
  )
}

export default App
