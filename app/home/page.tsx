"use client";
import React, { useRef } from "react";
import { NextPage } from "next";
import Image from "next/image";
import style from "./page.module.css";

const Page: NextPage = () => {
  const userEmail = useRef<string>("");

  return (
    <>
      <div className={style.container}>
        <div className={style.logoContainer}>
          <Image
            src="/images/racketsUp_logo.png"
            alt="Rackets Up Logo"
            width={200}
            height={200}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Page;
