interface FilmesProps {
    filmes: any[]
    voltar: () => void
}

export default function Filmes(props: FilmesProps) {
    return (
        <div className="flex flex-col gap-5 items-center w-full">
            <button className="button" onClick={() => props.voltar()}>
                Voltar
            </button>
            <table className="w-3/5 bg-zinc-900 rounded-md overflow-hidden opacity-80">
                <thead className="bg-zinc-800">
                    <tr>
                        <th>Título</th>
                        <th>Episódio</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {props.filmes.map((p: any, i: number) => (
                        <tr key={p.title} className={`
                        ${i % 2 === 0 ? "bg-zinc-600" : "bg-zinc-700"}
                    `}>
                            <td className="py-1">{p.title}</td>
                            <td className="py-1">{p.episode_id}</td>
                            <td className="py-1">{new Date(p.release_date).toLocaleDateString('pt-BR')}</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    )
}