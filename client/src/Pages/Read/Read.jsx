import React from "react";
import {Table} from 'react-bootstrap'

function Read(){    
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
    </Table>);
}

export default Read;