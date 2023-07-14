"use client";
import ModalAdd from "@/components/modal/ModalAdd";
import ModalEdit from "@/components/modal/ModalEdit";
import { app } from "@/config/firebase/config";
import {
  addVisitor,
  getVisitors,
  updateVisitor,
} from "@/config/firebase/firestore";
import { getAuth } from "firebase/auth";
import { query } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Das() {
  const router = useRouter();
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [selectId, setSelectId] = useState("");
  useEffect(() => {
    const user = getAuth(app).currentUser;
    if (!user) {
      router.push("/");
    }
  });

  const getDocs = async () => {
    try {
      const res = await getVisitors();
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDocs()
      .then((res) => console.log("getted"))
      .catch((err) => console.log("error"));
  }, []);
  console.log(data);

  const addData = () => {
    const payload = { nama: name };
    addVisitor(payload)
      .then((res) => {
        getDocs();
        setModal1(false);
        setName("");
      })
      .catch((err) => console.log(err));
  };
  const editData = (id: string) => {
    const payload = { nama: name };
    updateVisitor(payload, id)
      .then((res) => {
        getDocs();
        setModal2(false);
        setName("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <main className="bg-white w-full h-[100vh] flex">
      {modal1 ? (
        <ModalAdd
          val={name}
          setChange={setName}
          handler={() => addData()}
          closeHandler={() => setModal1(false)}
        />
      ) : (
        ""
      )}
      {modal2 ? (
        <ModalEdit
          val={name}
          setChange={setName}
          handler={() => editData(selectId)}
          closeHandler={() => setModal2(false)}
        />
      ) : (
        ""
      )}
      <section className="flex-1 p-5 flex flex-col">
        <button
          onClick={() => setModal1(true)}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-5 w-[30%]"
          type="submit"
        >
          Tambah
        </button>
        <h3 className="text-gray-600 text-center font-semibold mt-5 mb-2">
          {" "}
          List Tamu Undangan
        </h3>
        <hr />
        <section className="flex-1">
          {/* list tamu */}
          {data.map((data: any, i) => (
            <section key={i} className="flex text-gray-500 my-2 items-center ">
              <p className="flex-1">{data.data.nama}</p>
              <button
                onClick={() => {
                  setSelectId(data.id);
                  setName(data.data.nama);
                  setModal2(true);
                }}
                className="text-white bg-purple-500 text-[10px] rounded py-2 px-3"
              >
                Edit
              </button>
              <Link
                href={{
                  pathname: `/invit/${data.id}`,
                  query: { data: data.data.nama },
                }}
                className="text-white bg-purple-500 text-[10px] rounded py-2 px-3 ml-2"
              >
                Link
              </Link>
            </section>
          ))}
        </section>
      </section>
    </main>
  );
}
