import React, {useState} from "react";
import Axios from "axios";
import {Button,Form} from 'react-bootstrap';

function Create(){
    const [values, setValues] = useState();

    const handleClickButton = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3000/user",  {
            cd_pessoa: values.cd_pessoa,
            nm_pessoa: values.nm_pessoa,
            nm_sobrenome: values.nm_sobrenome,
            nr_telefone: values.nr_telefone,
            tp_sangue: values.tp_sangue,
            dt_nascimento: values.dt_nascimento,
        }).then((response) => {
            console.log(response);
        });
    }

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };
    
    const handleSubmit = (e) => {
        console.log(e);
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        setValues(true);
    }


    return (
    <div class="container mt-3">  
        <Form noValidate validated={values} onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label> CPF: </Form.Label>
                <Form.Control 
                    required
                    type="text" 
                    id="cpf" 
                    class="form-control" 
                    onChange={handleChangeValues} 
                    name="cd_pessoa" 
                    placeholder="123.456.789-00"
                    required
                    validation='Looks good!'
                />
            </Form.Group>

            <Form.Group>
                <Form.Label> Nome: </Form.Label>
                <Form.Control
                    required
                    type="text" 
                    class="form-control" 
                    onChange={handleChangeValues} 
                    name="nm_pessoa" 
                    placeholder="Nome"
                />
            </Form.Group>

            <Form.Group>
                <Form.Label> Sobrenome: </Form.Label>
                <Form.Control
                    type="text" 
                    class="form-control" 
                    onChange={handleChangeValues} 
                    name="nm_sobrenome" 
                    placeholder="Sobrenome"
                />
            </Form.Group>

            <Form.Group>
                <Form.Label> Numero De Telefone: </Form.Label>
                <Form.Control
                    type="text" 
                    class="form-control" 
                    onChange={handleChangeValues} 
                    id="phone-mask" 
                    name="nr_telefone" 
                    for="typeNumber" 
                    placeholder="(00) 0.0000-0000"
                />
            </Form.Group>

            <Form.Group>
                <Form.Label> Tipo Sanguineo: </Form.Label>
                <Form.Control
                    type="text" 
                    class="form-control" 
                    onChange={handleChangeValues} 
                    name="tp_sangue" 
                    placeholder="Tipo Sanguineo"
                />
            </Form.Group>

            <Form.Group>
                <Form.Label> Data de Nascimento: </Form.Label>
                <Form.Control
                    required
                    type="datetime-local" 
                    class="form-control" 
                    onChange={handleChangeValues}
                    name="dt_nascimento" 
                    placeholder="00/00/0000"
                />
            </Form.Group>
            
            <Button 
                class="btn btn-primary btn-lg"
                type="submit"
                onClick={(e) => handleClickButton(e)}
                >Criar
            </Button>

            <Button 
                class="btn btn-primary btn-lg">Editar
            </Button>
            
        </Form>
    </div>);
}

export default Create;