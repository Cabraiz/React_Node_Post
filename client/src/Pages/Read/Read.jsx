import React, { useState, useEffect } from "react";
import Axios from "axios";
import {Table} from 'react-bootstrap'

function Read(){
    const [values, setValues] = useState();

    
    useEffect(() => {
        Axios.get("http://localhost:3000/user").then((response) => {
            setValues(response.data.data.rows);
        });
    }, []);

    return (
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>CPF</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Telefone</th>
            <th>T.S.</th>
            <th>Dt.Nasc.</th>
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
                <td>{values.dt_nascimento}</td>
            </tr>
            ))}
        </tbody>
    </Table>);
}

export default Read;