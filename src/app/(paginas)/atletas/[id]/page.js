"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function AtletasData({ params }) {
  const [atleta, setAtleta] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [imagem, setImagem] = useState(1);

  const changeImagem = () => {
    if (imagem == 1) {
      setImagem(2);
    } else if (imagem == 2) {
      setImagem(3);
    } else if (imagem == 3) {
      setImagem(1);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      changeImagem();
    }, 5000);
  });

  useEffect(() => {
    const fetchAtleta = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/atletas?id=${params.id}`
        );
        if (!res.ok) {
          throw new Error("Erro ao buscar dados");
        }
        const data = await res.json();

        setAtleta(data[0]);

        setLoading(false);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchAtleta();
  }, [params.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container align center h-screen mx-auto flex  items-center">
      <div className="grid lg:grid-cols-2 bg-gradient-to-tr  from-violet-600 to-indigo-900 border-2 border border-violet-600 w-full  rounded-md cols-1">
        
        <img
          src={`/imagens/atletas/${atleta?.id}/${imagem}.png`}
          className=" md:h-108 h-96 w-full   object-cover transition-opacity"
          alt="Banner"
        />
        <div className="poppins-bold text-violet-100 p-5 grid md:grid-cols-2 grid-cols-1 text-xl flex flex-col ">
          <ul className="text-lg">
            <h1 className="poppins-bold text-violet-100 md:text-4xl mb-6 flex  text-4xl">
              {atleta?.name || "Nome não disponível"}
            </h1>
            
            <img
              className="w-10"
              src={`https://flagsapi.com/${atleta.nationality.abbr}/flat/64.png`}
            />
            
            <li>
              <p>
                Gênero:
                <span>{" " + atleta?.gender || "Idade não disponível"}</span>
              </p>
            </li>
            <li>
              <p>
                Idade:<span>{" " + atleta?.age || "Idade não disponível"}</span>
              </p>
            </li>
            <li>
              Ranking Mundial: {atleta?.ranking || "Idade não disponível"}
            </li>

            <li className=" my-5">
              <Link
                className="poppins-bold md:text-sm text-sm text-slate-200  transition-all p-3 bg-gradient-to-r rounded-md  from-violet-500 to-purple-500 "
                href="/atletas"
              >
                Voltar
              </Link>
              
            </li>
            (alguns dados podem estar incorretos)
          </ul>
          <div className=" p-5 bg-violet-950 text-xl w-auto rounded-md flex flex-col">
            Medalhas Olímpicas
            <ul className="text-sm text-lg mt-2  mb-4 ">
              <li className="mt-2">
                Ouro:
                {" " + atleta?.medals.olympics.gold}
              </li>
              <li className="mt-4">
                Prata:
                {" " + atleta?.medals.olympics.silver}
              </li>
              <li className="mt-4">
                Bronze:
                {" " + atleta?.medals.olympics.bronze}
              </li>

              
            </ul>
            Medalhas em Mundiais
            <ul className="text-sm text-lg mt-2   ">
              <li className="mt-2">
                Ouro:
                {" " + atleta?.medals.world_championships.gold}
              </li>
              <li className="mt-4">
                Prata:
                {" " + atleta?.medals.world_championships.silver}
              </li>
              <li className="mt-4">
                Bronze:
                {" " + atleta?.medals.world_championships.bronze}
              </li>

              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
