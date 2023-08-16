"use client";

import React from "react";
import { Navigation } from "../../../my-profile/Navigation/Navigation";
import { usePathname } from "next-intl/client";

import s from "./Edit.module.scss";
import { useParams, useSearchParams } from "next/navigation";

const Edit = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const success = searchParams.get("success");

  return (
    <>
      <div className={s.container}>
        <div className={s.wrapper} id={"wrapper"}>
          <Navigation pathname={pathname} paidAccount={false} />
          <div style={{ gridArea: "profile", paddingTop: "10%", fontSize: "25px" }}>
            {success === "true" ? (
              <p>
                Congratulations! Your payment was successful <span className={"text-4xl"}>🥳</span>
              </p>
            ) : (
              <p>
                Payment has not been made. Repeat one more time <span className={"text-4xl"}>😞</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
