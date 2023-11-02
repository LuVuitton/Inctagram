import React from 'react';
import s from '@/app/[locale]/home/HomePagePost/HomePagePost.module.scss';

export const HomePostIcons = () => {
    return (
        <div className={s.post__icons}>
            <div className={s.post__icons__wrapper}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={s.post__icon}
                >
                    <g clipPath="url(#clip0_310_6969)">
                        <path
                            d="M11.9994 21C11.8678 21.0008 11.7373 20.9756 11.6155 20.9258C11.4936 20.876 11.3828 20.8027 11.2894 20.71L3.51938 12.93C2.54475 11.9452 1.99805 10.6156 1.99805 9.23002C1.99805 7.84445 2.54475 6.51484 3.51938 5.53002C4.50165 4.55053 5.83221 4.00049 7.21938 4.00049C8.60655 4.00049 9.93712 4.55053 10.9194 5.53002L11.9994 6.61002L13.0794 5.53002C14.0616 4.55053 15.3922 4.00049 16.7794 4.00049C18.1666 4.00049 19.4971 4.55053 20.4794 5.53002C21.454 6.51484 22.0007 7.84445 22.0007 9.23002C22.0007 10.6156 21.454 11.9452 20.4794 12.93L12.7094 20.71C12.6159 20.8027 12.5051 20.876 12.3833 20.9258C12.2615 20.9756 12.131 21.0008 11.9994 21ZM7.21938 6.00002C6.79606 5.9981 6.37656 6.0802 5.98519 6.24155C5.59382 6.40291 5.23836 6.64031 4.93938 6.94002C4.33544 7.54714 3.99642 8.36866 3.99642 9.22502C3.99642 10.0814 4.33544 10.9029 4.93938 11.51L11.9994 18.58L19.0594 11.51C19.6633 10.9029 20.0023 10.0814 20.0023 9.22502C20.0023 8.36866 19.6633 7.54714 19.0594 6.94002C18.443 6.35773 17.6273 6.03331 16.7794 6.03331C15.9315 6.03331 15.1157 6.35773 14.4994 6.94002L12.7094 8.74002C12.6164 8.83375 12.5058 8.90814 12.384 8.95891C12.2621 9.00968 12.1314 9.03581 11.9994 9.03581C11.8674 9.03581 11.7367 9.00968 11.6148 8.95891C11.4929 8.90814 11.3823 8.83375 11.2894 8.74002L9.49938 6.94002C9.20041 6.64031 8.84495 6.40291 8.45358 6.24155C8.0622 6.0802 7.64271 5.9981 7.21938 6.00002Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_310_6969">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={s.post__icon}
                >
                    <g clipPath="url(#clip0_310_6970)">
                        <path
                            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                            fill="white"
                        />
                        <path
                            d="M16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
                            fill="white"
                        />
                        <path
                            d="M8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z"
                            fill="white"
                        />
                        <path
                            d="M19.0706 4.93002C17.4298 3.27852 15.2642 2.25124 12.9472 2.02526C10.6302 1.79929 8.30696 2.3888 6.37799 3.69215C4.44903 4.99551 3.03524 6.93103 2.38037 9.16503C1.7255 11.399 1.87058 13.7915 2.79061 15.93C2.8865 16.1288 2.91796 16.3525 2.88061 16.57L2.00061 20.8C1.9667 20.9622 1.97363 21.1303 2.02075 21.2891C2.06788 21.4479 2.15374 21.5926 2.27061 21.71C2.36641 21.8051 2.48048 21.8799 2.60594 21.9297C2.7314 21.9795 2.86565 22.0035 3.00061 22H3.20061L7.48061 21.14C7.69814 21.1139 7.91873 21.1449 8.12061 21.23C10.2591 22.15 12.6516 22.2951 14.8856 21.6403C17.1196 20.9854 19.0551 19.5716 20.3585 17.6426C21.6618 15.7137 22.2513 13.3904 22.0254 11.0734C21.7994 8.75638 20.7721 6.59081 19.1206 4.95002L19.0706 4.93002ZM19.9006 13.29C19.7051 14.484 19.2413 15.6181 18.5442 16.6069C17.847 17.5958 16.9347 18.4136 15.8758 18.9989C14.8169 19.5842 13.639 19.9216 12.4308 19.9859C11.2227 20.0502 10.0156 19.8396 8.90061 19.37C8.50515 19.2018 8.08034 19.1135 7.65061 19.11C7.46289 19.1113 7.27559 19.1281 7.09061 19.16L4.27061 19.73L4.84061 16.91C4.95413 16.2993 4.88095 15.6685 4.63061 15.1C4.161 13.985 3.95041 12.778 4.0147 11.5698C4.07899 10.3616 4.41647 9.18377 5.00175 8.12487C5.58703 7.06598 6.40486 6.15362 7.3937 5.45647C8.38254 4.75932 9.51663 4.29554 10.7106 4.10002C11.9639 3.89434 13.2481 3.99 14.4571 4.37908C15.6661 4.76817 16.765 5.43951 17.6631 6.33756C18.5611 7.23561 19.2325 8.33457 19.6215 9.54354C20.0106 10.7525 20.1063 12.0367 19.9006 13.29Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_310_6970">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={s.post__icon}
                >
                    <g clipPath="url(#clip0_310_6971)">
                        <path
                            d="M20.9995 4.00002C20.9891 3.90816 20.9689 3.81765 20.9395 3.73002V3.64002C20.8915 3.52873 20.8238 3.42708 20.7395 3.34002C20.6546 3.26029 20.5565 3.19599 20.4495 3.15002H20.3595C20.2673 3.07963 20.1619 3.02861 20.0495 3.00002H19.9995C19.9 2.98494 19.7989 2.98494 19.6995 3.00002L1.69947 9.00002C1.4994 9.06578 1.3252 9.19303 1.2017 9.36361C1.07821 9.5342 1.01172 9.73942 1.01172 9.95002C1.01172 10.1606 1.07821 10.3658 1.2017 10.5364C1.3252 10.707 1.4994 10.8343 1.69947 10.9L10.2295 13.74L13.0695 22.27C13.1352 22.4701 13.2625 22.6443 13.4331 22.7678C13.6036 22.8913 13.8089 22.9578 14.0195 22.9578C14.2301 22.9578 14.4353 22.8913 14.6059 22.7678C14.7765 22.6443 14.9037 22.4701 14.9695 22.27L20.9695 4.27002C20.9917 4.18181 21.0018 4.09097 20.9995 4.00002ZM16.2995 6.29002L10.7295 11.86L5.15947 10L16.2995 6.29002ZM13.9995 18.84L12.1395 13.27L17.7095 7.70002L13.9995 18.84Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_310_6971">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={s.post__icon}
            >
                <g clipPath="url(#clip0_310_6972)">
                    <path
                        d="M6.08935 21.06C5.82413 21.06 5.56978 20.9546 5.38224 20.7671C5.1947 20.5796 5.08935 20.3252 5.08935 20.06L4.93935 5.4C4.92731 5.10234 4.97423 4.80525 5.07742 4.52579C5.18061 4.24633 5.33803 3.99004 5.54063 3.77164C5.74323 3.55324 5.98701 3.37705 6.25794 3.25321C6.52888 3.12936 6.82163 3.0603 7.11935 3.05L16.7093 3C17.0075 3.00521 17.3016 3.06909 17.575 3.18801C17.8485 3.30692 18.0958 3.47854 18.3029 3.69305C18.51 3.90756 18.6727 4.16077 18.782 4.43821C18.8912 4.71565 18.9446 5.01189 18.9393 5.31L19.0793 19.97C19.0811 20.1452 19.0367 20.3178 18.9507 20.4705C18.8647 20.6232 18.7401 20.7506 18.5893 20.84C18.4373 20.9278 18.2649 20.974 18.0893 20.974C17.9138 20.974 17.7414 20.9278 17.5893 20.84L11.8893 17.68L6.59935 20.91C6.4427 20.9975 6.26842 21.0488 6.08935 21.06ZM11.8493 15.51C12.0231 15.5103 12.1944 15.5514 12.3493 15.63L17.0593 18.24L16.9393 5.29C16.9393 5.09 16.8093 4.95 16.7293 4.96L7.12935 5.05C7.04935 5.05 6.93935 5.18 6.93935 5.38L7.05935 18.28L11.3393 15.65C11.4948 15.561 11.6702 15.5128 11.8493 15.51Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_310_6972">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};
