"use client";

import React, { useState } from "react";

import s from "./MyProfile.module.scss";
import Image from "next/image";
import { usePathname } from "next-intl/client";
import { SubscribersModal } from "./SubscribersModal/SubscribersModal";
import { Navigation } from "./Navigation/Navigation";
import { SubscriptionsModal } from "./SubscriptionsModal/SubscriptionsModal";
import { useGetProfileQuery } from "../../../api/profile.api";
import Link from "next/link";
import { useGetAuthMeQuery } from "../../../api/auth.api";
import { redirect } from "next/navigation";

const MyProfile = () => {
  const [paidAccount] = useState(true);
  const [showSubscribersModal, setShowSubscribersModal] = useState(false);
  const [showSubscriptionsModal, setShowSubscriptionsModal] = useState(false);
  const pathname = usePathname();
  const { isError } = useGetAuthMeQuery();
  const { data } = useGetProfileQuery();

  if (isError) redirect("/sign-in");

  return (
    <>
      <div className={s.container}>
        <div className={s.wrapper}>
          <Navigation pathname={pathname} paidAccount={paidAccount} />
          <div className={s.profile}>
            <div>
              <Image
                src={`${data?.avatars[0]?.url ? data.avatars[0].url : "/img/profile/avatar.png"}`}
                alt={"avatar"}
                width={204}
                height={204}
                className={s.profile__avatar}
              />
            </div>
            <div className={s.profile__wrapper}>
              <div className={s.profile__title}>
                <div className={s.profile__title__wrapper}>
                  <p>{data?.userName ?? "User Name"}</p>
                  {paidAccount && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.3654 0.521155C11.7342 0.218242 12.2658 0.218242 12.6346 0.521155L14.7751 2.27886C14.9697 2.43869 15.2175 2.5192 15.4689 2.50429L18.2337 2.34039C18.7101 2.31215 19.1402 2.62457 19.2605 3.08645L19.959 5.76657C20.0225 6.01028 20.1757 6.22105 20.3878 6.35676L22.7209 7.84927C23.123 8.10648 23.2872 8.61199 23.1131 9.05641L22.1029 11.6352C22.011 11.8697 22.011 12.1303 22.1029 12.3648L23.1131 14.9436C23.2872 15.388 23.123 15.8935 22.7209 16.1507L20.3878 17.6432C20.1757 17.779 20.0225 17.9897 19.959 18.2334L19.2605 20.9136C19.1402 21.3754 18.7101 21.6879 18.2337 21.6596L15.4689 21.4957C15.2175 21.4808 14.9697 21.5613 14.7751 21.7211L12.6346 23.4788C12.2658 23.7818 11.7342 23.7818 11.3654 23.4788L9.22494 21.7211C9.03031 21.5613 8.78254 21.4808 8.53113 21.4957L5.76633 21.6596C5.28986 21.6879 4.85985 21.3754 4.73948 20.9136L4.04099 18.2334C3.97747 17.9897 3.82434 17.779 3.61219 17.6432L1.27908 16.1507C0.877008 15.8935 0.712758 15.388 0.886858 14.9436L1.89711 12.3648C1.98897 12.1303 1.98897 11.8697 1.89711 11.6352L0.886858 9.05641C0.712757 8.61199 0.877008 8.10648 1.27908 7.84927L3.61219 6.35676C3.82434 6.22105 3.97747 6.01028 4.04099 5.76657L4.73948 3.08645C4.85985 2.62457 5.28986 2.31215 5.76633 2.34039L8.53113 2.50429C8.78254 2.5192 9.03031 2.43869 9.22494 2.27886L11.3654 0.521155Z"
                        fill="#397DF6"
                      />
                      <g>
                        <path
                          d="M15.0801 8.14001C15.0111 8.08537 14.9319 8.04494 14.8472 8.02105C14.7625 7.99716 14.6739 7.99029 14.5865 8.00083C14.4991 8.01136 14.4146 8.0391 14.338 8.08244C14.2614 8.12578 14.1941 8.18387 14.1401 8.25334L9.47341 14.2533L7.18674 11.4667C7.13311 11.3953 7.06567 11.3354 6.98844 11.2906C6.91122 11.2457 6.82577 11.2169 6.73717 11.2057C6.64857 11.1945 6.55863 11.2012 6.47269 11.2255C6.38674 11.2497 6.30655 11.291 6.23686 11.3468C6.16717 11.4027 6.10941 11.472 6.06701 11.5505C6.02461 11.6291 5.99843 11.7154 5.99002 11.8044C5.98162 11.8933 5.99116 11.9829 6.01808 12.0681C6.045 12.1532 6.08876 12.2321 6.14674 12.3L8.92674 15.7533C8.98949 15.8307 9.06877 15.893 9.15875 15.9357C9.24874 15.9784 9.34715 16.0003 9.44674 16C9.55246 16.0047 9.65778 15.9842 9.754 15.9402C9.85022 15.8961 9.93457 15.8298 10.0001 15.7467L15.2201 9.08001C15.2733 9.00936 15.3119 8.92883 15.3337 8.8431C15.3555 8.75738 15.36 8.66817 15.347 8.58069C15.3339 8.4932 15.3036 8.40918 15.2578 8.33352C15.212 8.25787 15.1516 8.19209 15.0801 8.14001Z"
                          fill="white"
                        />
                        <path
                          d="M18.4134 8.14001C18.3444 8.08537 18.2652 8.04494 18.1805 8.02105C18.0958 7.99716 18.0072 7.99029 17.9198 8.00083C17.8324 8.01136 17.7479 8.0391 17.6713 8.08244C17.5947 8.12578 17.5274 8.18387 17.4734 8.25334L12.8067 14.2533L12.4001 13.7533L11.5601 14.8333L12.2934 15.7467C12.3561 15.824 12.4354 15.8863 12.5254 15.929C12.6154 15.9717 12.7138 15.9937 12.8134 15.9933C12.9135 15.9929 13.0123 15.9699 13.1023 15.926C13.1923 15.8822 13.2713 15.8186 13.3334 15.74L18.5534 9.07334C18.6056 9.0029 18.6433 8.92286 18.6645 8.8378C18.6858 8.75274 18.69 8.66433 18.677 8.57764C18.664 8.49095 18.634 8.40767 18.5888 8.33258C18.5435 8.25748 18.4839 8.19204 18.4134 8.14001Z"
                          fill="white"
                        />
                        <path
                          d="M9.80663 12.7067L10.6666 11.6267L10.5333 11.4667C10.4807 11.3938 10.4138 11.3322 10.3368 11.2858C10.2598 11.2394 10.1741 11.2091 10.0851 11.1966C9.99601 11.1842 9.90535 11.1898 9.81854 11.2133C9.73174 11.2368 9.65058 11.2777 9.57996 11.3333C9.51148 11.3884 9.45454 11.4564 9.41243 11.5335C9.37031 11.6105 9.34384 11.6952 9.33455 11.7826C9.32526 11.8699 9.33332 11.9582 9.35828 12.0425C9.38323 12.1267 9.42458 12.2051 9.47996 12.2733L9.80663 12.7067Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4700_12136">
                          <rect width="16" height="16" fill="white" transform="translate(4 4)" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </div>
                <Link href={"/settings-profile"} className={s.profile__btn}>
                  Profile Settings
                </Link>
              </div>
              <div className={s.profile__info}>
                <div className={s.profile__info__subscriptions} onClick={() => setShowSubscriptionsModal(true)}>
                  <p>2 218</p>
                  <p>Subscriptions</p>
                </div>
                <div className={s.profile__info__subscribers} onClick={() => setShowSubscribersModal(true)}>
                  <p>2 358</p>
                  <p>Subscribers</p>
                </div>
                <div className={s.profile__info__publications}>
                  <p>2 764</p>
                  <p>Publications</p>
                </div>
              </div>
              <p className={s.profile__desc}>
                {data?.aboutMe ??
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
              </p>
            </div>
          </div>
          <div className={s.profile__posts}>
            <Image src={"/img/profile/posts/post1.png"} alt={"post1"} width={234} height={228} />
            <Image src={"/img/profile/posts/post2.png"} alt={"post1"} width={234} height={228} />
            <Image src={"/img/profile/posts/post3.png"} alt={"post1"} width={234} height={228} />
            <Image src={"/img/profile/posts/post4.png"} alt={"post1"} width={234} height={228} />
            <Image src={"/img/profile/posts/post5.png"} alt={"post1"} width={234} height={228} />
            <Image src={"/img/profile/posts/post6.png"} alt={"post1"} width={234} height={228} />
            <Image src={"/img/profile/posts/post7.png"} alt={"post1"} width={234} height={228} />
            <Image src={"/img/profile/posts/post8.png"} alt={"post1"} width={234} height={228} />
          </div>
        </div>
      </div>
      {showSubscribersModal && <SubscribersModal setShowSubscribersModal={setShowSubscribersModal} />}
      {showSubscriptionsModal && <SubscriptionsModal setShowSubscriptionsModal={setShowSubscriptionsModal} />}
    </>
  );
};

export default MyProfile;
