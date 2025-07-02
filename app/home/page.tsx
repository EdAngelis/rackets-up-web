"use client";
import React, { useRef } from "react";
import { NextPage } from "next";
import style from "./page.module.css";

const Page: NextPage = () => {
  const userEmail = useRef<string>("");

  return (
    <>
      <div className={style.container}></div>
    </>
  );
};

export default Page;
