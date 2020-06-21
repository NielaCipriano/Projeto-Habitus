import React, { useState, useMemo } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Curso({ history }){
    const [titulo, setTitulo] = useState('');
    const [inicio, setInicio] = useState('');
    const [final, setFinal] = useState('');
    

    async function handleSubmit(event){
        event.preventDefault();

        /**
         * Aqui foi um exemplo de como obter as informações do servidor, nes caso eu estou pegando apenas o 
         * id para cadastrar um curso. 
         */
        const perfil_id = api.get('perfil').then(resp => {
          if (resp.data.length > 0) {
            return resp.data[0].id
          }
        }).catch(console.log(`Error: ${console.error}`));
        
       /**
        * Aqui estou montando o payload que a API node irá recber, 
        */
        const cursos = { titulo_curso: titulo, data_inicio_curso: inicio, data_fim_curso: final, perfil_id }

        /**
         * Aqui eu gero o POST montando a url e passando o payload do curso para ser salvo no banco de dados
         * e retorno o registro que foi salvo.
         */
        const cusro = api.post(`perfil/${perfil_id}/cursos`, cursos).then( resp => {
          return resp.data;
        }).catch(console.log(`Error: ${console.error}`));

        history.push('/inicial');

  }



    return (
        <>
        <p>
          <strong>Cadastrar Curso</strong>
        </p>
      
      <form onSubmit = {handleSubmit}> 
        <label htmlFor="titulo">Título*</label>
        <input 
          id="titulo" 
          type="titulo" 
          placeholder=""
          value = {titulo}
          onChange={ event => setTitulo(event.target.value) }
        />

      <form onSubmit = {handleSubmit}> 
        <label htmlFor="inicio ">Data de Inicio*</label>
        <input 
          id="inicio" 
          type="inicio" 
          placeholder=""
          value = {inicio}
          onChange={ event => setInicio(event.target.value) }
        />

      </form>

      <form onSubmit = {handleSubmit}> 
        <label htmlFor="final">Data Final*</label>
        <input 
          id="final" 
          type="final" 
          placeholder=""
          value = {final}
          onChange={ event => setFinal(event.target.value) }
        />

      </form>

      <Link to="/cadastroavaliados">
         <button className="btn" type="submit">Cadastrar Avaliados</button>                       
      </Link>

      <Link to="/cadastroavaliadores">
            <button className="btn" type="submit">Cadastrar Avaliadores</button>
      </Link>
     
       <button className="btn" type="submit">Cancelar</button>
       <button className="btn" type="submit">Salvar</button>
      

      </form>
      
      </>
    )
}
        
        
        
    
 