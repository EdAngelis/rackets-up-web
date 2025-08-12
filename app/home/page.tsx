"use client";
import React, { useRef } from "react";
import { NextPage } from "next";
import Image from "next/image";
import style from "./page.module.css";
import { PlayStoreButton, AppleStoreButton } from "@/components";

const Page: NextPage = () => {
  const userEmail = useRef<string>("");

  return (
    <>
      <div className={style.container}>
        <div className={style.firstSession}>
          {/* <div className={style.logoContainer}>
            <Image
              src="/images/logo2.png"
              alt="Rackets Up Logo"
              width={40}
              height={40}
              priority
            />
          </div> */}
          <h1 className={style.title}>Rackets Up</h1>
          <div className={style.buttonsWrapper}>
            <div className={style.storeButtons}>
              <AppleStoreButton />
              <PlayStoreButton />
              <div className={style.smartwatch}>
                <div className={style.smartwatchImageWrapper}>
                  <Image
                    src="/images/smartwatch.png"
                    alt="Smartwatch with Rackets Up features"
                    width={100}
                    height={150}
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.features}>
            <ul className={style.featureList}>
              <li>Manage score in real time</li>
              <li>Get Statistics from your match</li>
              <li>Create tournaments and rankigs</li>
              <li>keep a complete historic from your matches</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
