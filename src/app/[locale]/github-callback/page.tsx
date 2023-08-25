"use client";
import React from "react";
import { useSignInGitHubMutation } from "../../../api/auth.api";
import { useParamsCustomHook } from "../../../utils/useParamsCustomHook";
import { useEffect } from "react";
import { Loader } from "../../../components/Loader/Loader";

//на стадии разработки
const GitHubCallBack = () => {
  const [oAuth, { data, isSuccess }] = useSignInGitHubMutation();
  const param = useParamsCustomHook(["code"]);
  useEffect(() => {
    console.log(param[0]);
    if (param) {
      oAuth({ code: param[0] });
      if (data) {
        sessionStorage.setItem("accessToken", data.accessToken);
      }
    }
  }, []);

  return (
    <div>
      <Loader />
    </div>
  );
};

export default GitHubCallBack;
