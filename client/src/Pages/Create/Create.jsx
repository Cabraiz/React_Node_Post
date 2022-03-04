import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import Axios from "axios";
import {Button,Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";

function Create(){
    const { register, reset } = useForm();

    const [values, setValues] = useState();
    const [editvalues, setEditValues] = useState({
        cd_pessoa: '',
        nm_pessoa: '',
        nm_sobrenome: '',
        nr_telefone: '',
        tp_sangue: '',
        dt_nascimento: '',
    });
    let {id} = useParams();

    
    useEffect(() => {
        if (typeof id !== "undefined" && id.length) {
            Axios.get("http://localhost:3000/user/" + id).then((response) => {
                console.log(response.data.data.rows[0]);
                setEditValues({
                    cd_pessoa: response.data.data.rows[0].cd_pessoa, 
                    nm_pessoa: response.data.data.rows[0].nm_pessoa,
                    nm_sobrenome: response.data.data.rows[0].nm_sobrenome,
                    nr_telefone: response.data.data.rows[0].nr_telefone,
                    tp_sangue: response.data.data.rows[0].tp_sangue,
                    dt_nascimento: response.data.data.rows[0].dt_nascimento
                }) 
            });
            console.log(editvalues.cd_pessoa);
        }
    }, []);

    useEffect(() => {
        reset(editvalues);
    }, [editvalues]);

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

    const handleEditButton = (e) => {
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
                    {...register('cd_pessoa')}
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
                    {...register('nm_pessoa')}
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
                    {...register('nm_sobrenome')}
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
                    {...register('nr_telefone')}
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
                    {...register('tp_sangue')}
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
                    {...register('dt_nascimento')}
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