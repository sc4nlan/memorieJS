import Checkbox from "../components/form/Checkbox"
import Input from "../components/form/Input"
import Select from "../components/form/Select"
import Textarea from "../components/form/Textarea"

import { useState } from "react"

export default function NewResearch(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        linkedin: '',
        lattes: '',
        biografia: '',
        pass1: '',
        pass2: '',
        type: '',
        status: ''
      });

    let options = [
        {id:1, name:"Ativo"},
        {id:2, name:"Inativo"},
        {id:3, name:"Bloqueado"},
        {id:4, name:"Excluido"}
    ]

    let checks = [
        {id:1, name:"Gestor"},
        {id:2, name:"Admin"},
        {id:3, name:"Pesquisador"},
        {id:4, name:"Padrão"},
    ]
    
    const submit = (e) => {
        e.preventDefault()

        if (e.target.pass1.value != e.target.pass2.value){
            alert("Senhas diferentes")
        }
        else{
            //logica envio dados:
            console.log(formData);
        }
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function handleStatus(e){
        console.log("a");
    }

    function handleType(e){
        console.log(e.target.value);
    }

    return(
        <>
            <form 
                className="px-4 sm:px-0"
                onSubmit={submit}
            >

                <h1 className="block uppercase text-gray-700 text-2xl pb-8 pt-4 font-bold">Cadastro novo pesquisador</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-3">
                    {/* 3 colunas, 6 entradas*/}
                    <Input
                        name="name" 
                        text="nome"
                        type="text" 
                        placeholder="Digite seu nome"
                        handleOnChange={handleChange}
                    />

                    <Input 
                        name="email" 
                        type="mail" 
                        placeholder="Digite seu email"
                        handleOnChange={handleChange}
                    />

                    <Checkbox
                        name="type" 
                        text="tipo"
                        checks={checks}
                        handleOnChange={handleChange}
                    />

                    <Input name="linkedin" type="url" placeholder="Ex: https://www.linkedin.com/usuario" handleOnChange={handleChange}         
                    />

                    <Input name="lattes" type="url" placeholder="Ex: https://www.lattes.com.br/usuario" handleOnChange={handleChange}/>
                    
                    <Select /* Selecionar  Ativo, inativo, etc*/
                        name="status"
                        options={options}
                        handleOnChange={handleStatus}
                    />

                </div>

                <div className="mt-2">
                    {/* 1 colunas, 1 entrada*/}
                    <Textarea 
                        name="biografia"
                        handleOnChange={handleChange}            
                    />

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {/* 2 colunas, 2 entrada*/}
                    <Input name="pass1" text="Digite uma senha" type="password" placeholder="Digite uma senha" handleOnChange={handleChange}/>

                    <Input name="pass2" type="password" placeholder="Confirme a senha" handleOnChange={handleChange} text="Confirme a senha"/>
                </div>

                <div className="pb-4 font-bold flex justify-end text-base">
                    <button
                        className="mr-3 mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 border border-blue-700 rounded"
                        >GRAVAR
                    </button>
                </div>
            </form>

        </>
    )
}