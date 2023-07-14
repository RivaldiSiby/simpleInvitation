import Main from "@/components/invit/Main";
import { getVisitor } from "@/config/firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const getData = async (param: string) => {
  try {
    const res = await getVisitor(param);
    return res;
  } catch (error) {}
};

export default async function Invit({ params }: { params: { name: string } }) {
  const data: any = await getData(params.name);
  return (
    <main className="bg-white w-full min-h-[100vh] flex flex-col items-center">
      <Image
        className="  h-[800px] w-full max-w-[600px] absolute z-10"
        alt="bg"
        src={require("../../../assets/img/bg.jpeg")}
      />
      <main className=" h-[800px] w-full max-w-[600px] z-20 bg-black bg-opacity-50 flex items-center justify-center">
        <section>
          <Image
            className="w-[200px] h-[200px] rounded-full mx-auto"
            alt="bg"
            src={require("../../../assets/img/img2.jpeg")}
          />
          <h1 className=" text-yellow-100 font-extrabold font-sans text-[20px] text-center mt-5">
            Syukuran Wisuda
          </h1>
          <h1 className="text-white font-extrabold font-serif text-[30px] text-center">
            Devyati Maloringang, S.Pd.
          </h1>
          <p className="text-yellow-100 text-center m-5">Kepada Yth</p>
          <h1 className="text-white font-extrabold font-serif text-[30px] text-center">
            {data.nama}
          </h1>
        </section>
      </main>
      <Main />
    </main>
  );
}
