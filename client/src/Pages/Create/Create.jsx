import React from "react";
import Axios from "axios";
import {Button,Form} from 'react-bootstrap';
import { useState } from "react";
import { useEffect } from "react";

function Create(){
    const [values, setValues] = useState();
    const [lista, setLista] = useState ();

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handleClickButton = () => {
        console.log(values);
    }

    useEffect(() => {
        Axios.get("http://localhost:3000/user").then((response) => {
            console.log(response);
        });
    }, []);

    return (
    <div class="container mt-3">  
        <Form>
            <div class="col-lg-6 mt-2">
                <Form.Label> CPF: </Form.Label>
                <Form.Control 
                type="text" 
                id="cpf" 
                class="form-control" 
                onChange={handleChangeValues} 
                name="cd_pessoa" 
                placeholder="123.456.789-00"/>
            </div>

            <div class="col-lg-6 mt-2">
                <Form.Label> Nome: </Form.Label>
                <Form.Control
                 type="text" 
                 class="form-control" 
                 onChange={handleChangeValues} 
                 name="nm_pessoa" 
                 placeholder="Nome"/>
            </div>

            <div class="col-lg-6 mt-2">
                <Form.Label> Sobrenome: </Form.Label>
                <Form.Control 
                type="text" 
                class="form-control" 
                onChange={handleChangeValues} 
                name="nm_sobrenome" 
                placeholder="Sobrenome"/>
            </div>

            <div class="col-lg-6 mt-2">
                <Form.Label> Numero De Telefone: </Form.Label>
                <Form.Control 
                type="text" 
                class="form-control" 
                onChange={handleChangeValues} 
                id="phone-mask" 
                name="nr_telefone" 
                for="typeNumber" 
                placeholder="(00) 0.0000-0000"/>
            </div>

            <div class="col-lg-6 mt-2">
                <Form.Label> Tipo Sanguineo: </Form.Label>
                <Form.Control 
                type="text" 
                class="form-control" 
                onChange={handleChangeValues} 
                name="tp_sangue" 
                placeholder="Tipo Sanguineo"/>
            </div>

            <div class="col-lg-6 mt-2">
                <Form.Label> Data de Nascimento: </Form.Label>
                <Form.Control 
                type="datetime-local" 
                class="form-control" 
                onChange={handleChangeValues}
                name="dt_nascimento" 
                placeholder="00/00/0000"/>
            </div>

            <div class="col-lg-4 mt-2">
                <Button 
                class="btn btn-primary btn-lg"
                onClick={() => handleClickButton()}
                >Criar</Button>
            </div>

            <div class="col-lg-4 mt-2">
                <Button class="btn btn-primary btn-lg">Editar</Button>
            </div>
        </Form>
    </div>);
}

export default Create;