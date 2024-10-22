import { Poppins } from "next/font/google";
import Image from "next/image";

export default function History() {
  return (
    <div>
      <div className="w-full bg-violet-100 ">
        <img
          className="w-full  h-auto mh-56 xl:h-64 object-cover"
          src="/imagens/banners/banner-historia.jpg"
        ></img>
        <div className="container px-10 mt-6 mx-auto w-screen h-auto grid grid-rows-auto  grid-cols-1 ">
          <div className="py-10 w-100 grid columns-1 gap-3 justify-items-left justify-center">
            <h1 className="text-balance text-4xl sm:text-5xl  drop-shadow-sm mb-10 text-slate-100 poppins-extrabold  bg-gradient-to-r   from-fuchsia-600 to-indigo-500 bg-clip-text text-transparent inline-block">
              História do Tênis de Mesa
            </h1>

            <h2 className=" text-2xl drop-shadow-sm text-slate-100 poppins-extrabold  bg-gradient-to-r  from-violet-500 to-purple-500 bg-clip-text text-transparent inline-block">
              Onde e quando surgiu?
            </h2>
            <div className=" text-justify text-slate-600  sm:text-xl poppins-light max-w-100">
              O tênis de mesa surgiu na{" "}
              <line className="poppins-bold1">Inglaterra</line>, na segunda
              metade do <line className="poppins-bold1">século XIX</line>, como
              uma adaptação do tênis de campo para ser praticado em ambientes
              fechados. Originalmente, era um passatempo social popular no
              inverno, quando as condições climáticas dificultavam a prática de
              esportes ao ar livre. Estudantes e militares começaram a jogar
              versões improvisadas do esporte, utilizando livros como rede,
              bolas de cortiça ou borracha, e raquetes feitas de materiais
              variados como madeira, papelão ou couro.
            </div>

            <h2 className=" text-2xl drop-shadow-sm text-slate-100 poppins-extrabold  bg-gradient-to-r  from-violet-500 to-purple-500 bg-clip-text text-transparent inline-block">
              Porque Ping-Pong?
            </h2>
            <div className=" text-justify text-slate-600  sm:text-xl poppins-light max-w-100">
              No final do século XIX, James Gibb, um entusiasta inglês, trouxe
              dos Estados Unidos{" "}
              <line className="poppins-bold1">bolas de celuloide</line> que
              acabaram sendo adotadas para o jogo. O som gerado pelo impacto
              dessas bolas em raquetes ocas deu origem ao termo{" "}
              <line className="poppins-bold1">"pingue-pongue"</line>, nome
              posteriormente registrado pela empresa inglesa J. Jaques and Son
              e, mais tarde, pela Parker Brothers nos EUA.
            </div>

            <h2 className=" text-2xl drop-shadow-sm text-slate-100 poppins-extrabold  bg-gradient-to-r  from-violet-500 to-purple-500 bg-clip-text text-transparent inline-block">
              Primeiros Torneios
            </h2>
            <div className=" text-justify text-slate-600  sm:text-xl poppins-light max-w-100">
              Os primeiros torneios ocorreram em{" "}
              <line className="poppins-bold1">1901</line>, com grande
              participação. Em 1922, a "Ping-Pong Association" foi substituída
              pela "Table Tennis Association", e em 1926 foi fundada a
              International Table Tennis Federation (ITTF). Uma revolução no
              esporte ocorreu nos anos 1950, com a introdução das{" "}
              <line className="poppins-bold1">raquetes com esponja</line>, o que
              permitiu maior controle e efeito nos golpes.
            </div>

            <br />

            <div className=" text-justify text-slate-600  sm:text-xl poppins-light max-w-100">
              Ao longo do tempo, o tênis de mesa se popularizou globalmente,
              especialmente na Ásia, onde se consolidou como uma potência no
              esporte. A <line className="poppins-bold1">ITTF</line> continua
              regulando as normas para garantir o equilíbrio competitivo e a
              segurança dos jogadores.
            </div>

            <br />

            
          </div>
        </div>
      </div>

      <div className="container   px-10 mx-auto w-screen h-auto grid   grid-rows ">
        <div className=" grid md:grid-rows-auto py-10  gap-5 ">
          <h1 className="text-5xl text-violet-500 drop-shadow-md mb-8  poppins-extrabold">
            Regras
          </h1>
          <div className="text-left grid gap-10 text-balance lg:grid-cols-3 grid-cols-1">
            <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
              <img
                className="rounded-sm h-96 w-full object-cover"
                src="/imagens/banners/banner-objetivo.png"
              ></img>
              <div className="p-5 text-justify">
                <div className="flex flex-row text-balance mb-3  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 color-violet-100 "
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#c4b5fd"
                      d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                    />
                  </svg>
                  <h1 className="poppins-bold ml-5 text-balance text-violet-100 text-3xl ">
                    Objetivo do jogo
                  </h1>
                </div>
                O tênis de mesa, também conhecido como pingue-pongue, é jogado
                com o objetivo de fazer a bola tocar o lado do adversário da
                mesa de forma que ele não consiga devolvê-la. Os jogadores usam
                raquetes revestidas com borracha para bater na bola, buscando
                marcar pontos a cada troca de golpes.
              </div>
            </div>

            <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
              <img
                className="rounded-sm h-96 w-full object-cover"
                src="/imagens/banners/banner-equipamentos.png"
              ></img>
              <div className="p-5 text-justify">
                <div className="flex flex-row  mb-3  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 color-violet-100 "
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#c4b5fd"
                      d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                    />
                  </svg>
                  <h1 className="poppins-bold text-violet-100 ml-5 text-3xl ">
                    Equipamentos
                  </h1>
                </div>
                A mesa onde se joga tem 2,74 metros de comprimento, 1,525 metros
                de largura e é posicionada a 76 cm do chão. No centro da mesa,
                há uma rede com 15,25 cm de altura, dividindo-a em duas partes
                iguais. As raquetes podem variar em tamanho, formato e peso, mas
                a face usada para golpear a bola deve ser coberta com borracha.
                A bola, por sua vez, é leve, medindo 40 mm de diâmetro e pesando
                2,7 gramas. Obs: as barras de suporte são as peças que seguram a
                rede, e são consideradas como a rede.
              </div>
            </div>

            <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
              <img
                className="rounded-sm h-96 w-full object-cover"
                src="/imagens/banners/banner-duração.jpg"
              ></img>
              <div className="p-5 text-justify">
                <div className="flex flex-row  mb-3  ">
                  <svg
                    className="w-12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#c4b5fd"
                      d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0 0 34.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6L256 64l16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L224 0 176 0zm72 192l0 128c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-128c0-13.3 10.7-24 24-24s24 10.7 24 24z"
                    />
                  </svg>
                  <h1 className="text-violet-100 text-balance poppins-bold ml-5 text-3xl ">
                    Duração da partida
                  </h1>
                </div>
                A pontuação no tênis de mesa ocorre com sets disputados até 11
                pontos. Se houver empate em 10 a 10, o jogo continua até que um
                dos jogadores consiga uma vantagem de dois pontos. As partidas
                geralmente são disputadas em melhor de cinco ou sete sets,
                dependendo das regras da competição.
              </div>
            </div>

            <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
              <img
                className="rounded-sm h-96 w-full object-cover"
                src="/imagens/banners/banner-saque.png"
              ></img>
              <div className="p-5 text-justify">
                <div className="flex flex-row  mb-3  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 color-violet-100 "
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#c4b5fd"
                      d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                    />
                  </svg>
                  <h1 className="poppins-bold text-violet-100 ml-5 text-3xl ">
                    Saque
                  </h1>
                </div>
                Cada jogador tem direito a 2 saques por vez. A bolinha deve
                quicar no campo do sacador e depois ultrapassar a rede sem
                tocá-la. Se durante o saque a bola quicar na mesa do sacador,
                tocar a rede e depois cair na mesa do adversário, a jogada é
                considerada um "let" (bola queimada). Nesse caso, o saque deve
                ser repetido, sem que nenhum ponto seja concedido. O ponto é
                marcado quando o jogador errar o saque ou a resposta a ele,
                tocar na bola 2 vezes consecutivas, tocar na mesa com a mão
                livre ou bater com o lado de madeira da raquete na bola.
              </div>
            </div>

            <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
              <img
                className="rounded-sm h-96 w-full object-cover max-h-15"
                src="/imagens/banners/banner-ojogo.png"
              ></img>
              <div className="p-5 text-justify">
                <div className="flex flex-row  mb-3  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 color-violet-100 "
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#c4b5fd"
                      d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                    />
                  </svg>
                  <h1 className="poppins-bold ml-5 text-violet-100 text-3xl ">
                    Na partida
                  </h1>
                </div>
                No tênis de mesa, a bola deve tocar o lado da mesa do jogador
                antes de ser enviada para o lado do adversário. O ponto é
                perdido se a bola não for devolvida corretamente, tocar o corpo
                do jogador, for batida duas vezes seguidas ou acertar a mesa ou
                a rede sem ser devolvida adequadamente. O objetivo é fazer com
                que o adversário não consiga retornar a bola corretamente. Obs:
                caso a bola colida com as barras de suporte e caia na mesa do
                adversário, segue-se o jogo.
              </div>
            </div>

            <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
              <img
                className="rounded-sm h-96 w-full object-cover"
                src="/imagens/banners/banner-regras3.png"
              ></img>
              <div className="p-5 text-justify">
                <div className="flex flex-row  mb-3  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 color-violet-100 "
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#c4b5fd"
                      d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                    />
                  </svg>
                  <h1 className="poppins-bold ml-5 text-violet-100 text-3xl text-left">
                    Faltas e Penalidades
                  </h1>
                </div>
                No tênis de mesa, se o saque não for realizado corretamente, o
                adversário ganha o ponto. Também é considerado falta quando o
                jogador toca a mesa com a mão livre, comete toques duplos na
                bola ou quando a bola sai fora da mesa. Essas infrações resultam
                na perda do ponto e são aplicadas para garantir que o jogo
                mantenha suas regras básicas de precisão e controle.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*separação*/}

      <div className="w-full bg-violet-100">
        <div className="container   px-10 mx-auto w-screen h-auto grid     grid-rows ">
          <div className=" grid md:grid-rows-auto py-10  gap-5 ">
            <h1 className="text-balance text-4xl sm:text-5xl  drop-shadow-sm mb-10 text-slate-100 poppins-extrabold  bg-gradient-to-r   from-fuchsia-600 to-indigo-500 bg-clip-text text-transparent inline-block">
              Tecnicas
            </h1>
            <div className="text-left grid gap-10  lg:grid-cols-2">
              <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-200 bg-gradient-to-tr from-fuchsia-600 to-indigo-500 border-2 border border-violet-500   rounded-md  max-w-5xl ">
                <img
                  className="rounded-sm h-96 w-full object-cover"
                  src="/imagens/banners/banner-forehand.png"
                ></img>
                <div className="p-5 text-justify">
                  <div className="flex flex-row text-balance mb-3  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 color-violet-100 "
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#c4b5fd"
                        d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                      />
                    </svg>

                    <h1 className="poppins-bold ml-5 text-balance text-violet-100 text-3xl ">
                      Forehand Drive
                    </h1>
                  </div>
                  Um golpe básico e ofensivo que é realizado com a palma da mão
                  voltada para frente. É um golpe rápido e plano, geralmente
                  usado para controlar a bola e manter a pressão sobre o
                  oponente.
                </div>
              </div>

              <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
                <img
                  className="rounded-sm h-96 w-full object-cover"
                  src="/imagens/banners/banner-backhand.webp"
                ></img>
                <div className="p-5 text-justify">
                  <div className="flex flex-row  mb-3  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 color-violet-100 "
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#c4b5fd"
                        d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                      />
                    </svg>
                    <h1 className="poppins-bold text-violet-100 ml-5 text-3xl ">
                      Backhand Drive
                    </h1>
                  </div>
                  Similar ao forehand drive, mas executado com as costas da mão
                  voltadas para frente. É usado para manter a bola em jogo e
                  pressionar o adversário do lado oposto.
                </div>
              </div>

              <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
                <img
                  className="rounded-sm h-96 w-full object-cover"
                  src="/imagens/banners/banner-duração.jpg"
                ></img>
                <div className="p-5 text-justify">
                  <div className="flex flex-row  mb-3  ">
                    <svg
                      className="w-12"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#c4b5fd"
                        d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0 0 34.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6L256 64l16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L224 0 176 0zm72 192l0 128c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-128c0-13.3 10.7-24 24-24s24 10.7 24 24z"
                      />
                    </svg>
                    <h1 className="text-violet-100 text-balance poppins-bold ml-5 text-3xl ">
                      Forehand Loop
                    </h1>
                  </div>
                  Descrição: Uma variação mais avançada do forehand drive, onde
                  o jogador gera muito efeito topspin (rotação para frente) na
                  bola ao girar a raquete para cima durante o impacto. Uso:
                  Usado para ataques potentes, especialmente contra bolas de
                  backspin (efeito para trás).
                </div>
              </div>

              <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
                <img
                  className="rounded-sm h-96 w-full object-cover"
                  src="/imagens/banners/banner-saque.png"
                ></img>
                <div className="p-5 text-justify">
                  <div className="flex flex-row  mb-3  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 color-violet-100 "
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#c4b5fd"
                        d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                      />
                    </svg>
                    <h1 className="poppins-bold text-violet-100 ml-5 text-3xl ">
                      Backhand Loop
                    </h1>
                  </div>
                  Descrição: Similar ao forehand loop, mas realizado no lado de
                  backhand. Requer boa técnica para gerar efeito topspin e
                  potência. Uso: Usado para atacar bolas com backspin no lado de
                  backhand.
                </div>
              </div>

              <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
                <img
                  className="rounded-sm h-96 w-full object-cover max-h-15"
                  src="/imagens/banners/banner-ojogo.png"
                ></img>
                <div className="p-5 text-justify">
                  <div className="flex flex-row  mb-3  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 color-violet-100 "
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#c4b5fd"
                        d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                      />
                    </svg>
                    <h1 className="poppins-bold ml-5 text-violet-100 text-3xl ">
                      Push (Forehand e Backhand)
                    </h1>
                  </div>
                  Descrição: Um golpe defensivo usado para devolver bolas de
                  backspin. O jogador "empurra" a bola com um movimento curto e
                  controlado, geralmente com um toque suave. Uso: Usado para
                  manter a bola baixa e curta, dificultando o ataque do
                  adversário.
                </div>
              </div>

              <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
                <img
                  className="rounded-sm h-96 w-full object-cover"
                  src="/imagens/banners/banner-regras3.png"
                ></img>
                <div className="p-5 text-justify">
                  <div className="flex flex-row  mb-3  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 color-violet-100 "
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#c4b5fd"
                        d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                      />
                    </svg>
                    <h1 className="poppins-bold ml-5 text-violet-100 text-3xl text-left">
                      Block
                    </h1>
                  </div>
                  Descrição: Um golpe defensivo em que o jogador simplesmente
                  posiciona a raquete para interceptar e "bloquear" o ataque do
                  oponente, sem adicionar muita força. Uso: Muito eficaz contra
                  loops poderosos, onde o objetivo é redirecionar a velocidade e
                  efeito da bola.
                </div>
              </div>
              <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
                <img
                  className="rounded-sm h-96 w-full object-cover max-h-15"
                  src="/imagens/banners/banner-ojogo.png"
                ></img>
                <div className="p-5 text-justify">
                  <div className="flex flex-row  mb-3  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 color-violet-100 "
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#c4b5fd"
                        d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                      />
                    </svg>
                    <h1 className="poppins-bold ml-5 text-violet-100 text-3xl ">
                      Chop
                    </h1>
                  </div>
                  Descrição: Um golpe defensivo onde o jogador faz um movimento
                  descendente com a raquete, criando backspin (efeito para trás)
                  na bola. Uso: Usado por jogadores defensivos para devolver
                  bolas rápidas com muito backspin, dificultando o ataque do
                  oponente.
                </div>
              </div>
              <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
                <img
                  className="rounded-sm h-96 w-full object-cover max-h-15"
                  src="/imagens/banners/banner-ojogo.png"
                ></img>
                <div className="p-5 text-justify">
                  <div className="flex flex-row  mb-3  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 color-violet-100 "
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#c4b5fd"
                        d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                      />
                    </svg>
                    <h1 className="poppins-bold ml-5 text-violet-100 text-3xl ">
                      Smash
                    </h1>
                  </div>
                  Descrição: Um golpe ofensivo muito forte onde o jogador bate a
                  bola com força total, geralmente quando a bola está alta no
                  ar. Uso: Usado para finalizar pontos, quando a bola está em
                  posição favorável para um ataque direto.
                </div>
              </div>
              <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
                <img
                  className="rounded-sm h-96 w-full object-cover max-h-15"
                  src="/imagens/banners/banner-ojogo.png"
                ></img>
                <div className="p-5 text-justify">
                  <div className="flex flex-row  mb-3  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 color-violet-100 "
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#c4b5fd"
                        d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                      />
                    </svg>
                    <h1 className="poppins-bold ml-5 text-violet-100 text-3xl ">
                      Flick (Forehand e Backhand)
                    </h1>
                  </div>
                  Descrição: Um golpe curto e rápido usado para atacar bolas
                  curtas perto da rede. O jogador realiza um movimento rápido
                  com a raquete, "flickando" a bola sobre a rede com pouca
                  força, mas muita precisão. Uso: Usado para surpreender o
                  adversário e transformar uma bola curta em um ataque rápido.
                </div>
              </div>
              <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
                <img
                  className="rounded-sm h-96 w-full object-cover max-h-15"
                  src="/imagens/banners/banner-ojogo.png"
                ></img>
                <div className="p-5 text-justify">
                  <div className="flex flex-row  mb-3  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 color-violet-100 "
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#c4b5fd"
                        d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                      />
                    </svg>
                    <h1 className="poppins-bold ml-5 text-violet-100 text-3xl ">
                      Topspin
                    </h1>
                  </div>
                  Descrição: Um efeito onde a bola gira para frente, gerado por
                  golpes como o loop ou o drive. Uso: Essencial para controlar o
                  ataque e garantir que a bola desça rapidamente após atravessar
                  a rede.
                </div>
              </div>
              <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
                <img
                  className="rounded-sm h-96 w-full object-cover max-h-15"
                  src="/imagens/banners/banner-ojogo.png"
                ></img>
                <div className="p-5 text-justify">
                  <div className="flex flex-row  mb-3  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 color-violet-100 "
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#c4b5fd"
                        d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                      />
                    </svg>
                    <h1 className="poppins-bold ml-5 text-violet-100 text-3xl ">
                      Sidespin
                    </h1>
                  </div>
                  Descrição: Um efeito lateral dado à bola, onde ela gira para
                  um dos lados. Esse efeito é gerado ao bater na lateral da bola
                  com um movimento curvo da raquete. Uso: Usado em saques e
                  jogadas estratégicas para desestabilizar o oponente.
                </div>
              </div>
              <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
                <img
                  className="rounded-sm h-96 w-full object-cover max-h-15"
                  src="/imagens/banners/banner-ojogo.png"
                ></img>
                <div className="p-5 text-justify">
                  <div className="flex flex-row  mb-3  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 color-violet-100 "
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#c4b5fd"
                        d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                      />
                    </svg>
                    <h1 className="poppins-bold ml-5 text-violet-100 text-3xl ">
                      Backspin
                    </h1>
                  </div>
                  Descrição: Um efeito onde a bola gira para trás, tornando
                  difícil para o adversário atacar, já que a bola tende a perder
                  velocidade e "afundar" na mesa. Uso: Usado em saques,
                  empurrões (pushes) e chops para dificultar ataques
                  adversários.
                </div>
              </div>
              <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
                <img
                  className="rounded-sm h-96 w-full object-cover max-h-15"
                  src="/imagens/banners/banner-ojogo.png"
                ></img>
                <div className="p-5 text-justify">
                  <div className="flex flex-row  mb-3  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 color-violet-100 "
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#c4b5fd"
                        d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                      />
                    </svg>
                    <h1 className="poppins-bold ml-5 text-violet-100 text-3xl ">
                      Drop Shot
                    </h1>
                  </div>
                  Descrição: Um golpe onde o jogador toca suavemente a bola,
                  fazendo com que ela passe por cima da rede e caia logo após,
                  dificultando o alcance do adversário. Uso: Usado para
                  surpreender o oponente, especialmente em momentos de defesa.
                </div>
              </div>
              <div className="poppins-light h-auto   items-center grid-cols-2 text-violet-300 bg-gradient-to-tr from-violet-600 to-indigo-900 border-2 border border-violet-600   rounded-md  max-w-5xl ">
                <img
                  className="rounded-sm h-96 w-full object-cover max-h-15"
                  src="/imagens/banners/banner-ojogo.png"
                ></img>
                <div className="p-5 text-justify">
                  <div className="flex flex-row  mb-3  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 color-violet-100 "
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#c4b5fd"
                        d="M416 288c-50.1 0-93.6 28.8-114.6 70.8L68.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C471.8 297.6 445 288 416 288zM49.3 151.9L290.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3l-2.7 0c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L88.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32C3.1 464.3-.3 455.7 0 446.9s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8C45.5 285.5 32 252.9 32 219l0-2.7c0-22.8 6.1-44.9 17.3-64.3zM416 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                      />
                    </svg>
                    <h1 className="poppins-bold ml-5 text-violet-100 text-3xl ">
                      Flip
                    </h1>
                  </div>
                  Descrição: Um golpe rápido usado para transformar uma bola
                  curta em um ataque surpresa, com um movimento de flick na
                  parte superior da bola. Uso: Usado para atacar bolas curtas
                  próximas à rede com um topspin rápido.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
