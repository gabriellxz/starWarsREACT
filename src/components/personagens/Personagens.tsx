import { IconCheck } from "@tabler/icons-react"

interface PersonagensProps {
    personagens: any[]
    selecionar: (personagem: any) => void
}

export default function Personagens(props: PersonagensProps) {
    return (
        <table className="w-3/5 bg-zinc-900 rounded-md overflow-hidden opacity-80">
            <thead className="bg-zinc-800">
                <tr>
                    <th>Nome</th>
                    <th>Altura</th>
                    <th>Peso</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {props.personagens.map((p: any, i: number) => (
                    <tr key={p.name} className={`
                        ${i % 2 === 0 ? "bg-zinc-600" : "bg-zinc-700"}
                    `}>
                        <td className="py-1">{p.name}</td>
                        <td className="py-1">{p.height}</td>
                        <td className="py-1">{p.mass}</td>
                        <td className="py-1">
                            <button className="button" onClick={() => props.selecionar(p)}>
                                <IconCheck/> 
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}