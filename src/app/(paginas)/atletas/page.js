"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Atletas() {
  const [atleta, setAtleta] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAtleta = async () => {
      try {
        const res = await fetch(`http://localhost:3001/atletas`);
        if (!res.ok) {
          throw new Error("Erro ao buscar dados");
        }
        const data = await res.json();

        setAtleta(data);

        setLoading(false);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchAtleta();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="relative overflow-x-auto container mx-auto max-w-100 items-center flex-cols  justify-center md:p-0 ">
      <h1 className="poppins-bold md:text-5xl text-violet-100 mt-28  text-xl text-center">Ranking dos Atletas Mundias</h1>
      <table className="w-full mt-10 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full  ">
        <thead className="text-xs text-violet-700 uppercase bg-violet-50 dark:bg-violet-700 dark:text-gray-400">
          <tr className=" ">
            <th className="poppins-bold   px-6 py-3">Posição</th>
            <th className="poppins-bold  px-6 py-3">Nome</th>
            <th className="poppins-bold px-6 py-3">Pais</th>
          </tr>{" "}
        </thead>
        {atleta.map((atleta) => {
          return (
            <tr className="border border-violet-500 p-3">
              <th scope="col" className="poppins-medium px-6 py-3 ">
                <Link href={`/atletas/${atleta.id}`}>
                  {atleta.ranking + "  "}
                </Link>
              </th>

              <th scope="col" className="poppins-medium px-6 py-3 ">
                <Link href={`/atletas/${atleta.id}`}>{atleta.name + "  "}</Link>
              </th>
              <th scope="col" className="poppins-medium px-6 py-3 ">
                <Link href={`/atletas/${atleta.id}`}>
                  <img
                    className="w-10"
                    src={`https://flagsapi.com/${atleta.nationality.abbr}/flat/64.png`}
                  />
                </Link>
              </th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
