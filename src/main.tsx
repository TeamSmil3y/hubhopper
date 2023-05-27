import React from 'react'
import ReactDOM from 'react-dom/client'
import 'leaflet/dist/leaflet.css';
import {
  RecoilRoot,
} from 'recoil';
import RecoilNexus from "recoil-nexus";

import App from './App.tsx'
import './index.css'

import { QueryClientProvider } from 'react-query'

import { queryClient } from "./state";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RecoilNexus />
        <App />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
)
