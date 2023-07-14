import Image from "next/image";
import React from "react";
import Location from "./Location";

export default function Main() {
  return (
    <main className=" min-h-[800px] w-full max-w-[600px] z-20 bg-purple-700 flexs justify-center">
      <section>
        {/* <Image
          className="w-[300px] h-[350px] rounded-full mx-auto absolute mt-[100px] z-20"
          alt="bg"
          src={require("../../assets/img/wisuda.png")}
        /> */}
        <h1 className=" text-yellow-100 uppercase font-extrabold font-serif text-[25px] text-center m-10">
          Syukuran Wisuda
        </h1>
        <section className="w-[220px] h-[220px] bg-yellow-100 bg-opacity-50 rounded-full mx-auto z-30 drop-shadow-lg items-center justify-center flex shadow-xl">
          <Image
            className="w-[200px] h-[200px] rounded-full mx-auto z-30 shadow-yellows-lg"
            alt="bg"
            src={require("../../assets/img/img2.jpeg")}
          />
        </section>{" "}
        <hr className="mx-40 mt-10" />
        <h1 className="text-yellow-100 font-extrabold font-serif text-[20px] text-center mt-2 mb-2">
          Devyati Maloringang, S.Pd.
        </h1>
        <hr className="mx-20" />
        <p className="text-center mt-5 mx-10">
          Dengan rasa syukur yang mendalam kepada Tuhan Allah, kami keluarga
        </p>
        <hr className="mx-40 mt-10" />
        <h1 className="text-yellow-100 font-extrabold font-serif text-[20px] text-center mt-2 mb-2">
          Maloringang - Londo
        </h1>
        <hr className="mx-40" />
        <p className="text-center mt-5 mx-10">
          mengundang Anda untuk ikut serta dalam acara syukuran wisuda yang akan
          diadakan:
        </p>
        <section className="mx-auto w-[70%]  mt-5 bg-yellow-100 p-2 flex justify-center rounded-lg shadow-lg">
          <h4 className="text-purple-500 focus-within:">SABTU, 15 JULY 2023</h4>
        </section>
        <h5 className="text-center my-2 font-serif">JAM 4 SORE</h5>
      </section>
      <Location />
    </main>
  );
}
