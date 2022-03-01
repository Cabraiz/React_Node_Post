import React from "react";
import {Button,Form} from 'react-bootstrap'

function Create(){
    return (
    <div class="container mt-3">  
        <Form>
            <div class="col-lg-6 mt-2">
                <Form.Label> CPF: </Form.Label>
                <Form.Control type="text" class="form-control" id="cpf" formControlName="cd_pessoa" placeholder="123.456.789-00"/>
            </div>

            <div class="col-lg-6 mt-2">
                <Form.Label> Nome: </Form.Label>
                <Form.Control type="text" class="form-control" formControlName="nm_pessoa" placeholder="Nome"/>
            </div>

            <div class="col-lg-6 mt-2">
                <Form.Label> Sobrenome: </Form.Label>
                <Form.Control type="text" class="form-control" formControlName="nm_sobrenome" placeholder="Sobrenome"/>
            </div>

            <div class="col-lg-6 mt-2">
                <Form.Label> Numero De Telefone: </Form.Label>
                <Form.Control type="text" class="form-control" id="phone-mask" formControlName="nr_telefone" for="typeNumber" placeholder="(00) 0.0000-0000"/>
            </div>

            <div class="col-lg-6 mt-2">
                <Form.Label> Tipo Sanguineo: </Form.Label>
                <Form.Control type="text" class="form-control " formControlName="tp_sangue" placeholder="Tipo Sanguineo"/>
            </div>

            <div class="col-lg-6 mt-2">
                <Form.Label> Data de Nascimento: </Form.Label>
                <Form.Control type="datetime-local" class="form-control" formControlName="dt_nascimento" placeholder="00/00/0000"/>
            </div>

            <div class="col-lg-4 mt-2">
                <Button class="btn btn-primary btn-lg">Criar</Button>
            </div>

            <div class="col-lg-4 mt-2">
                <Button class="btn btn-primary btn-lg">Editar</Button>
            </div>
        </Form>
    </div>);
}

export default Create;