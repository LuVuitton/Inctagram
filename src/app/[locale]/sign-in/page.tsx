"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import SignIn from "./SignIn/SignIn";
import { useTranslations } from "next-intl";
import { CLIENT_ID_GITHUB } from "../../../api/gitHubOauth.api";
import { useSignInGitHubMutation } from "../../../api/auth.api";
import { useParamsCustomHook } from "../../../utils/useParamsCustomHook";

const SignInPage = () => {
  const t = useTranslations("SignInPage");
  const [oAuth, { data }] = useSignInGitHubMutation();
  const param = useParamsCustomHook(["code"]);
  useEffect(() => {
    console.log(param[0]);
    if (param) {
      oAuth({ code: param[0] });
      if (data) console.log(data);
    }
  }, []);
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
