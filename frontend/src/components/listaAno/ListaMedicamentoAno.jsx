import { useEffect, useState } from "react";
import api from "../../api";

export default function ListaMedicamentoAno(){
  const[medicamentos, setMedicamentos]=useState([]);
  const[listaMedicamentos, setListaMedicamentos]=useState([]);

  useEffect(() => {
    api.get("/").then(({data}) => {
      setMedicamentos(data);
    });
  }, []);

  const handleChange = ({target}) => {
    if(!target.value){
      setListaMedicamentos([]);
      return;
    }
    const filterRepo = medicamentos.filter(({PRODUTO, COMERCIALIZACAO_2020}) => (PRODUTO.includes(target.value.toUpperCase())&&COMERCIALIZACAO_2020==="Sim"));
    setListaMedicamentos(filterRepo);
  }

  return (
      <div>
        <div className="container-input">
          <h1> Listar Medicamentos comercializados em 2020</h1>
          <input key={medicamentos.ID} class="form-control" list="datalistOptions" size={30} id="inputMedicamento" placeholder="Digite o nome do medicamento" onChange={handleChange}/>
        </div>
        <div>
          <ul>
           {listaMedicamentos.map((medicamento) =>(
            <>
              <li>
                Nome: {medicamento.PRODUTO}
              <br></br>
                Produto: {medicamento.SUBSTANCIA}
              <br></br>
                Apresentação: {medicamento.APRESENTACAO}
              <br></br>
                Valor sem impostos: R${medicamento.PF_Sem_Impostos}
              </li>
              <br></br>
            </>
           ))}

          </ul>
        </div>
  
      </div>
    )
};