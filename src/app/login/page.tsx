"use client";
import { signIn } from "@/config/firebase/aut";
import { app } from "@/config/firebase/config";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  useEffect(() => {
    const user = getAuth(app).currentUser;
    if (user) {
      router.push("/das");
    }
  });
  const submit = () => {
    console.log("Login click");
    if (payload.email === "" || payload.password === "") {
      setErr("Email / Password muust be required");
      return;
    }

    signIn(payload)
      .then((res) => router.push("/das"))
      .catch((error) => setErr("Email / Password incorrect"));
  };
  return (
    <main className="bg-purple-500 w-full h-[100vh] flex justify-center items-center">
      <section className="w-[50%] h-[27.5%] bg-white rounded-sm shadow flex items-center">
        <section className="w-full">
          <h1 className="text-purple-500 text-center text-xl font-bold uppercase m-5">
            Login Page
          </h1>
          <section className="w-full flex flex-col p-10">
            <input
              onChange={(e) =>
                setPayload({ ...payload, email: e.target.value })
              }
              type="text"
              className="border-[2px] h-[50px] border-gray-300 pl-5 mb-5 text-gray-600 outline-purple-500"
              placeholder="Email / Username"
            />
            <input
              onChange={(e) =>
                setPayload({ ...payload, password: e.target.value })
              }
              type="password"
              className="border-[2px] h-[50px] border-gray-300 pl-5 text-gray-600 outline-purple-500"
              placeholder="Password"
            />
            <p className="text-red-500 text-[14px] text-center mt-2">{err}</p>
            <button
              onClick={() => submit()}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-4 rounded mt-5"
              type="submit"
            >
              Login
            </button>
          </section>
        </section>
      </section>
    </main>
  );
}
