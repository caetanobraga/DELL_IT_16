import React,{ useEffect, useState } from "react";

function BuscaCodigo(){
  const [medicamentos,setMedicamentos]= useState([]);
  const [codigoBarras, setCodigoBarras]= useState([]);
  const [listaMedicamentos, setListaMedicamentos]= useState([]);



  useEffect(() => {
    const fetchMedicamentos = async () =>{
      try {
        const response = await fetch("http://localhost:8080");
        const data = await response.json();
        setMedicamentos(data);
      }catch(error){
          console.log(error);
      };  
    }
    fetchMedicamentos();
  },[]);

  function buscaCodigoBarras() {
    const filterCodigo = medicamentos.filter((medicamento) => medicamento.EAN_1 === codigoBarras)
      setListaMedicamentos(filterCodigo);
    if (filterCodigo.length === 0) window.alert('Código não localizado')
  }
    
  return(
    <>
      <h1>Busca por Código de Barras</h1>
      <input  type="number" 
              value={codigoBarras}
              onChange={(ev) => setCodigoBarras(ev.target.value)}
              name="campoPesquisa"  
              placeholder="Digite o código para fazer a busca"/>
      <button onClick={buscaCodigoBarras}>BUSCA</button>
      <div className="container-list">
        <ul>
          {listaMedicamentos.map((medicamento) =>(
            
          <li key={medicamento}>
              Código: {medicamento.EAN_1}<br></br>
              Nome medicamento: {medicamento.PRODUTO}<br></br>
              R$ {medicamento.PF_0}
          </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default BuscaCodigo;