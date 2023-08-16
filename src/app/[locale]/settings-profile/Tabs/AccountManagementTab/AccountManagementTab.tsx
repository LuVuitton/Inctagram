import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";

import s from "./AccountManagementTab.module.scss";
import { AccountTypeRadio } from "./AccountTypeRadio/AccountTypeRadio";
import { SubscriptionRadio } from "./SubscriptionRadio/SubscriptionRadio";
import { Subscription } from "./Subscription/Subscription";
import { Stripe } from "../../../../../components/Stripe/Stripe";
import { PayPal } from "../../../../../components/PayPal/PayPal";
import Image from "next/image";
import {
  SubscriptionType,
  useCreateSubscriptionMutation,
  useGetPaymentsQuery,
} from "../../../../../api/subscriptions.api";
import { Loader } from "../../../../../components/Loader/Loader";

const baseUrl = "https://inctagram.vercel.app/";

export const AccountManagementTab = () => {
  const [accountTypeValue, setAccountTypeValue] = useState("personal");
  const [subTypeValue, setSubTypeValue] = useState<SubscriptionType>("MONTHLY");

  const { data: dataPayments } = useGetPaymentsQuery();
  const [createSubscription, { data, isLoading }] = useCreateSubscriptionMutation();
  console.log(dataPayments);

  const onCreateStripeSubscription = () => {
    createSubscription({ paymentType: "STRIPE", amount: 1, typeSubscription: subTypeValue, baseUrl })
      .unwrap()
      .then((res) => {
        window.location.href = res.url;
      })
      .catch((err) => console.log(err));
  };

  return (
    <Tabs.Content className={s.TabsContent} value="accountManagement">
      <div className={s.tab}>
        <Subscription />

        <p className={s.tab__name}>Account type:</p>
        <div className={s.tab__wrapper}>
          <AccountTypeRadio radioValue={accountTypeValue} setRadioValue={setAccountTypeValue} />
        </div>
        {accountTypeValue === "business" && (
          <>
            <p className={s.tab__name}>Your subscription costs:</p>
            <div className={s.tab__wrapper}>
              <SubscriptionRadio subTypeValue={subTypeValue} setSubTypeValue={setSubTypeValue} />
            </div>
            <div className={s.tab__container}>
              <PayPal price={subTypeValue} />
              {/*<div className={s.tab__img__wrapper}>
                <Image className={s.tab__img} src={"/img/paypal.png"} alt={"paypal"} width={70} height={47} />
              </div>*/}
              <p>or</p>
              <div
                className={`${s.wrapper} ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={onCreateStripeSubscription}
              >
                <Image className={s.img} src={"/img/stripe.png"} alt={"stripe"} width={70} height={30} />
              </div>
              {/*<Stripe subTypeValue={subTypeValue} />*/}
            </div>
          </>
        )}
      </div>
      {isLoading && <Loader />}
    </Tabs.Content>
  );
};
