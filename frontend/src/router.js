import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
//import Main from './containers/Main'

import BuscaCodigo from './components/buscaCodigoBarra/BuscaCodigo';
import ComparativoCredito from './components/comparativo/ComparativoCredito';
import ListaMedicamentoAno from './components/listaAno/ListaMedicamentoAno';
import NavBar from './components/Menu/NavBar';
import Home from './pages/Home';
import { Component } from 'react';

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/ListaMedicamentoAno" element={<ListaMedicamentoAno/>}/>
        <Route path="/BuscaCodigo" element={<BuscaCodigo/>}/>
        <Route path="/ComparativoCredito" element={<ComparativoCredito/>}/>
      </Routes>
   </BrowserRouter>
  );
}