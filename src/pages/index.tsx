import Background from "@/components/Background/Background";
import Filmes from "@/components/Filmes/Filmes";
import Personagens from "@/components/personagens/Personagens";
import useStarWars from "@/data/hooks/useStarWars";

export default function Home() {

  const { personagens, processando, filmes, voltar, selecionarPersonagens } = useStarWars()

  return (
    <div className={`
        flex justify-center items-center h-screen
        text-white flex-col text-center gap-2 relative
    `}>
      <Background/>
      {
        processando ? (
          <div>
            Carregando...
          </div>
        ) : filmes.length > 0 ? (
            <Filmes filmes={filmes} voltar={voltar}/>
        ) : personagens.length > 0 ? (
          <Personagens personagens={personagens} selecionar={selecionarPersonagens}/>
        ) : (
          <div>
            Nenhum personagem encontrado
          </div>
        )
      }
    </div >
  )
}
