import React, { useEffect, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";

import s from "./AccountManagementTab.module.scss";
import { AccountTypeRadio } from "./AccountTypeRadio/AccountTypeRadio";
import { SubscriptionRadio } from "./SubscriptionRadio/SubscriptionRadio";
import { Subscription } from "./Subscription/Subscription";
import { PayPal } from "../../../../../components/PayPal/PayPal";
import Image from "next/image";
import {
  GetCurrentSubscription,
  SubscriptionType,
  useCreateSubscriptionMutation,
  useGetCurrentSubscriptionQuery,
  useGetPaymentsQuery,
} from "../../../../../api/subscriptions.api";
import { Loader } from "../../../../../components/Loader/Loader";

export const AccountManagementTab = () => {
  const [userSubInfo, setUserSubInfo] = useState<GetCurrentSubscription>({
    data: [
      {
        dateOfPayment: "",
        endDateOfSubscription: "",
        autoRenewal: false,
        subscriptionId: "",
        userId: 0,
      },
    ],
    hasAutoRenewal: false,
  });
  const [accountTypeValue, setAccountTypeValue] = useState("personal");
  const [subTypeValue, setSubTypeValue] = useState<SubscriptionType>("MONTHLY");
  const [baseUrl, setBaseUrl] = useState<any>("");

  const { data: dataPayments } = useGetPaymentsQuery();
  const { data: currentSubData, isLoading: isLoadingSub } = useGetCurrentSubscriptionQuery();

  console.log(currentSubData);

  const [createSubscription, { data, isLoading }] = useCreateSubscriptionMutation();

  useEffect(() => {
    if (currentSubData?.data[0]?.subscriptionId.length! > 0) {
      setAccountTypeValue("business");
    }

    setBaseUrl(window.location);
    setUserSubInfo(currentSubData!);
  }, [currentSubData]);

  const onCreateStripeSubscription = () => {
    createSubscription({ paymentType: "STRIPE", amount: 1, typeSubscription: subTypeValue, baseUrl: baseUrl.origin })
      .unwrap()
      .then((res) => {
        window.location.href = res.url;
      })
      .catch((err) => console.log(err));
  };

  return (
    <Tabs.Content className={s.TabsContent} value="accountManagement">
      <div className={s.tab}>
        {userSubInfo?.data[0]?.subscriptionId && (
          <Subscription
            dateOfPayment={userSubInfo?.data[0]?.dateOfPayment}
            expireAt={userSubInfo?.data[0]?.endDateOfSubscription}
            autoRenewal={userSubInfo?.hasAutoRenewal}
          />
        )}

        <p className={s.tab__name}>Account type:</p>
        <div className={s.tab__wrapper}>
          <AccountTypeRadio radioValue={accountTypeValue} setRadioValue={setAccountTypeValue} />
        </div>
        {accountTypeValue === "business" && (
          <>
            {userSubInfo?.data[0]?.subscriptionId.length > 0 ? (
              <p className={s.tab__name}>Change your subscription:</p>
            ) : (
              <p className={s.tab__name}>Your subscription costs:</p>
            )}
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
      {isLoadingSub && <Loader />}
    </Tabs.Content>
  );
};
