import React,{ useEffect, useState } from "react";

function ComparativoCredito(){
  const [medicamentos,setMedicamentos] = useState([]);

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

const medicamentos2020 = medicamentos.filter(medicamento => medicamento.COMERCIALIZACAO_2020 === "Sim");

const positivo = medicamentos2020.filter(medicamento => medicamento.LISTA_DE_CONCESSAO_DE_CREDITO_TRIBUTARIO_PIS_COFINS_ === "Positiva");

const negativo = medicamentos2020.filter(medicamento => medicamento.LISTA_DE_CONCESSAO_DE_CREDITO_TRIBUTARIO_PIS_COFINS_ === "Negativa");

const neutra = medicamentos2020.filter(medicamento => medicamento.LISTA_DE_CONCESSAO_DE_CREDITO_TRIBUTARIO_PIS_COFINS_ === "Neutra");

const porcentagemPositiva = ((positivo.length * 100) / medicamentos2020.length).toFixed(2);
const porcentagemNegativa = ((negativo.length * 100) / medicamentos2020.length).toFixed(2);
const porcentagemNeutra = ((neutra.length * 100) / medicamentos2020.length).toFixed(2);

function imprimeGrafico(porcentagem){
    let i =0;
    let retorno =''
    for (i;i<porcentagem;i++){
      retorno += '*'
    }
    return retorno;
}
return(

  <div>
    <table border="1">
      <thead><tr><th>CLASSIFICACAO</th><th>PERCENTUAL</th><th>GRAFICO</th></tr></thead>
      <tbody>
      <tr>
        <td>Negativa</td><td>{porcentagemNegativa}%</td><td>{imprimeGrafico(porcentagemNegativa)}   </td>
      </tr>
      <tr>
        <td>Neutra</td><td>{porcentagemNeutra}%</td><td>{imprimeGrafico(porcentagemNeutra)}</td>
      </tr>
      <tr>
        <td>Positiva</td><td>{porcentagemPositiva}%</td><td>{imprimeGrafico(porcentagemPositiva)}</td>
      </tr>
      </tbody>
    </table>
  </div>
)
}
export default ComparativoCredito;