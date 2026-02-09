import { useState } from "react"

export function App(){
    return (
        <>
            <div>
                <h1> Cadastro de Cliente</h1>
                <form>
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" id="nome"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email"/>
                    </div>
                    <div>
                        <label htmlFor="cep">Cep</label>
                        <input type="text" name="cep" id="cep"/>
                    </div>
                    <div>
                        <label htmlFor="rua">Rua</label>
                        <input type="text" name="rua" id="rua"/>
                    </div>
                    <div>
                        <label htmlFor="numero">Número</label>
                        <input type="text" name="numero" id="numero"/>
                    </div>
                    <div>
                        <label htmlFor="cidade">Cidade</label>
                        <input type="text" name="cidade" id="cidade"/>
                    </div>
                    <div>
                        <label htmlFor="bairro">Bairro</label>
                        <input type="text" name="bairro" id="bairro"/>
                    </div>
                    <div>
                        <label htmlFor="uf">UF</label>
                        <input type="text" name="uf" id="uf"/>
                    </div>
                    <div>
                        <button type="reset">Limpar</button>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    )
}