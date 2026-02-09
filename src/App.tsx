import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from 'zod'

export function App() {
  const regrasFormulario = z.object({
    nome: z.string().min(1, 'Campo obrigatório.').max(20, 'Máximo 20 caracteres.'),
    email: z.email('Campo obrigatório.'),
    cep: z.string().min(1, 'Campo obrigatório.'),
    rua: z.string().min(1, 'Campo obrigatório.'),
    numero: z.string().min(1, 'Campo obrigatório.'),
    bairro: z.string().min(1, 'Campo obrigatório.'),
    cidade: z.string().min(1, 'Campo obrigatório.'),
    uf: z.string().min(1, 'Campo obrigatório.').max(2, 'Utilizar sigla.')
  })

  type FormType = z.infer<typeof regrasFormulario>

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm<FormType>({
    // defaultValues: {
    //   nome: 'Hugo',
    //   email: 'hugolagrimante@gmail.com'
    // },
    resolver: zodResolver(regrasFormulario)
  })

  console.log(errors)
  function enviaFormulario(data: FormType) {
    console.log(data)
  }

  return (
    <>
      <div className="">
        <h1>Cadastro de Cliente</h1>
        <form onSubmit={handleSubmit(enviaFormulario)} noValidate className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 flex flex-col">
              <label htmlFor="nome" className="text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                {...register('nome')}
              />
              {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
            </div>

            <div className="col-span-12 flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="email"
                {...register('email')}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col">
              <label htmlFor="cep" className="text-sm font-medium text-gray-700 mb-1">CEP</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                {...register('cep')}
              />
              {errors.cep && <p className="text-red-500 text-xs mt-1">{errors.cep.message}</p>}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col">
              <label htmlFor="rua" className="text-sm font-medium text-gray-700 mb-1">Rua</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                {...register('rua')}
              />
              {errors.rua && <p className="text-red-500 text-xs mt-1">{errors.rua.message}</p>}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col">
              <label htmlFor="numero" className="text-sm font-medium text-gray-700 mb-1">Número</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                {...register('numero')}
              />
              {errors.numero && <p className="text-red-500 text-xs mt-1">{errors.numero.message}</p>}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col">
              <label htmlFor="bairro" className="text-sm font-medium text-gray-700 mb-1">Bairro</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                {...register('bairro')}
              />
              {errors.bairro && <p className="text-red-500 text-xs mt-1">{errors.bairro.message}</p>}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col">
              <label htmlFor="cidade" className="text-sm font-medium text-gray-700 mb-1">Cidade</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                {...register('cidade')}
              />
              {errors.cidade && <p className="text-red-500 text-xs mt-1">{errors.cidade.message}</p>}
            </div>

            <div className="col-span-12 md:col-span-6 flex flex-col">
              <label htmlFor="uf" className="text-sm font-medium text-gray-700 mb-1">UF</label>
              <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                type="text"
                {...register('uf')}
              />
              {errors.uf && <p className="text-red-500 text-xs mt-1">{errors.uf.message}</p>}
            </div>
          </div>

          <div className="flex gap-4 mt-6 justify-end">
            <button
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition font-medium"
              type="reset"
            >
              Limpar
            </button>
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}