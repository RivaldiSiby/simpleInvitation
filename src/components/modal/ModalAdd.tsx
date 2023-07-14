import React from "react";

export default function ModalAdd({
  handler = false,
  closeHandler,
  setChange,
  val,
}: {
  handler: any;
  closeHandler: any;
  setChange: any;
  val: string;
}) {
  return (
    <div className="absolute z-20 bg-black bg-opacity-50 h-[100vh] w-full top-0 flex justify-center pt-10">
      <section className="bg-white sm:w-[70%] w-[90%] h-[200px]">
        <div className="flex flex-col justify-center w-full px-5 sm:px-10">
          <h1 className="text-gray-500 m-3 font-bold text-center mt-5">
            Tambah Tamu Undangan
          </h1>
          <input
            value={val}
            onChange={(e) => setChange(e.target.value)}
            type="text"
            className=" w-full border-[2px] h-[50px] border-gray-300 pl-5 mb-2 text-gray-600 outline-purple-500"
            placeholder="Nama Tamu"
          />
          <section>
            <button
              onClick={() => handler()}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-[100px] mt-2"
            >
              Submit
            </button>
            <button
              onClick={() => closeHandler()}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-[100px] mt-2 ml-4"
            >
              Batal
            </button>
          </section>
        </div>
      </section>
    </div>
  );
}
