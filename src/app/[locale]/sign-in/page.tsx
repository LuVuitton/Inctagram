"use client";
import React from "react";
import Image from "next/image";
import SignIn from "./SignIn/SignIn";
import { useTranslations } from "next-intl";
const CLIENT_ID_GITHUB = "dba93fb3a5299659f092";

const SignInPage = () => {
  const t = useTranslations("SignInPage");

  const loginWithGitHub = () => {
    window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID_GITHUB);
  };

  return (
    <div id={"sign-in"} className={"bg-[#171717] rounded-md m-auto mt-[36px] max-w-[378px] text-center"}>
      <p className={"pt-[23px]"}>{t("title")}</p>
      <div className={"flex gap-[60px] justify-center mt-[13px]"}>
        <Image src={"/img/google.svg"} alt={"google-icon"} width={36} height={36} />
        <Image src={"/img/github.svg"} alt={"github-icon"} width={36} height={36} onClick={loginWithGitHub} />
      </div>
      <SignIn translate={t} />
    </div>
  );
};

export default SignInPage;
