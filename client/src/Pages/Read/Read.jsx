import './Read.css';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import {Table, Button} from 'react-bootstrap'


function Read(){
    let navigate  = useNavigate();
    
    const [values, setValues] = useState();

    async function EditEvent(e) {
        navigate(`/create/${e.cd_pessoa}`, { cd_pessoa: e.cd_pessoa});
    }
    
    useEffect(() => {
        Axios.get("http://localhost:3000/user").then((response) => {
            setValues(response.data.data.rows);
        });
    }, []);

    const handleDeleteClick = (e) => {
        Axios.delete(`http://localhost:3000/user/${e.cd_pessoa}`);
        const newList = values.filter((item) => item.cd_pessoa !== e.cd_pessoa);
        setValues(newList);
    }

    return (
    <Table striped bordered hover>
        <thead>
          <tr>
          <th class="zeropadding" scope="col"><button type="button" class="btn fw-bold sortresp">#</button></th>
            <th class="zeropadding" scope="col">
                <button  type="button" onclick="sortTable(0, 'svg01')" class="btn fw-bold sortresp">
                  <div class="d-flex justify-content-between">
                    CPF&nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-arrow-down-up " viewBox="0 0 16 16">
                        <path fill="#8080808C" fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                      </svg>
                  </div>
                </button>
            </th>
            <th class="zeropadding" scope="col">
              <button type="button" onclick="sortTable(1)" class="btn fw-bold sortresp">
                <div class="d-flex justify-content-between">
                Nome&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                    <path fill="#8080808C" fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </div>
              </button>
            </th>
            <th class="zeropadding" scope="col">
              <button type="button" onclick="sortTable(2)" class="btn fw-bold sortresp">
                <div class="d-flex justify-content-between">
                  Sobrenome&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                      <path fill="#8080808C" fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </div>
              </button>
            </th>
            <th class="zeropadding" scope="col">
              <button type="button" onclick="sortTable(3)" class="btn fw-bold sortresp">
                <div class="d-flex justify-content-between">
                  Telefone&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                      <path fill="#8080808C" fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </div>
              </button>
            </th>
            <th class="zeropadding" scope="col">
              <button style={{ whiteSpace: 'nowrap' }} onmouseleave="popUpOut()"  type="button" onclick="sortTable(4)" class="btn fw-bold sortresp">
                <label id="label_sangue" >T.S.</label> 
                <label><svg id="svg_info" onmouseover="popUpShow()" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>&nbsp;</label>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                    <path fill="#8080808C" fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </button>
              </th>
              <th class="zeropadding" scope="col">
              <button style={{ whiteSpace: 'nowrap' }}  type="button" onclick="sortTable(5)" class="btn fw-bold sortresp">
                <div class="d-flex justify-content-between">
                  Dt. Nasc.&nbsp; 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                      <path fill="#8080808C" fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </div>
              </button>
              
            </th>
          </tr>
        </thead>
        <tbody>
            {typeof values!== "undefined" && values.map((values) => (
            <tr>
                <td>{1}</td>
                <td>{values.cd_pessoa}</td>
                <td>{values.nm_pessoa}</td>
                <td>{values.nm_sobrenome}</td>
                <td>{values.nr_telefone}</td>
                <td>{values.tp_sangue}</td>
                <td>{values.dt_nascimento.slice(8, -14) + '/' + values.dt_nascimento.slice(5, -17) + '/' + values.dt_nascimento.slice(0, -20)}</td>
                <td id="nopaddingtupla">
                <div class="d-flex justify-content-between">
                    
                    <Button 
                        onClick = {() => EditEvent(values)}
                        id="btnEditar" 
                        variant="success">Editar
                    </Button>
                    <Button 
                        onClick = {() => handleDeleteClick(values)}
                        id="btnRemove" 
                        variant="danger">Remover</Button>
                </div>
                </td>
            </tr>
            ))}
        </tbody>
    </Table>);
}

export default Read;