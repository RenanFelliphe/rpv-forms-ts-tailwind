interface IQuadrado {
    ehArredondado: boolean
    width: string
    height: string
}

export function Quadrado({ ehArredondado, width = `w-25`, height = `h-25`}: IQuadrado) {
    return (
        <>
            <div className={`
            ${ehArredondado === true ? 'rounded-2xl' : ''}
            ${width}
            ${height}
            text-zinc-50 bg-black`}>Teste</div>
        </>
    )
}