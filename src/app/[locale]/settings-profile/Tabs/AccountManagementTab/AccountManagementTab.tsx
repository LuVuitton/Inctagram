import React, { ChangeEvent, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { GetMyPayments, useLazyGetMyPaymentsQuery } from "../../../../../api/profile.api";
import { Loader } from "../../../../../components/Loader/Loader";
import style from "./AccountManagementTab.module.scss";
import { formatServerDate } from "../../../../../utils/formatServerDate";
import ReactPaginate from "react-paginate";

const stripePromise = loadStripe(
  "sk_test_51NctuwJ6UOT6foZoziOJwGc3PR7MZ3mHzIGXT8turcVW46Va6FWPykZweYeSVRjyBgSacmhdvoF5Y0HDwMCW6uu1003TPstc9p",
);

export const AccountManagementTab = () => {
  const [getMyPayments, { data, isLoading }] = useLazyGetMyPaymentsQuery();
  let tableData: GetMyPayments[] = [
    {
      dateOfPayment: "2023-08-13T12:22:18.985Z",
      endDateOfSubscription: "2023-08-13T12:22:18.985Z",
      price: 10,
      subscriptionType: "1 day",
      paymentType: "Stripe",
      userId: 0,
      subscriptionId: "0",
    },
    {
      dateOfPayment: "2023-08-13T12:22:18.985Z",
      endDateOfSubscription: "2023-08-13T12:22:18.985Z",
      price: 10,
      subscriptionType: "1 day",
      paymentType: "Stripe",
      userId: 0,
      subscriptionId: "0",
    },
    {
      dateOfPayment: "2023-08-13T12:22:18.985Z",
      endDateOfSubscription: "2023-08-13T12:22:18.985Z",
      price: 15,
      subscriptionType: "3 days",
      paymentType: "Stripe",
      userId: 0,
      subscriptionId: "0",
    },
    {
      dateOfPayment: "2023-08-13T12:22:18.985Z",
      endDateOfSubscription: "2023-08-13T12:22:18.985Z",
      price: 10,
      subscriptionType: "1 day",
      paymentType: "Stripe",
      userId: 0,
      subscriptionId: "0",
    },
    {
      dateOfPayment: "2023-08-13T12:22:18.985Z",
      endDateOfSubscription: "2023-08-13T12:22:18.985Z",
      price: 20,
      subscriptionType: "5 days",
      paymentType: "Stripe",
      userId: 0,
      subscriptionId: "0",
    },
    {
      dateOfPayment: "2023-08-13T12:22:18.985Z",
      endDateOfSubscription: "2023-08-13T12:22:18.985Z",
      price: 10,
      subscriptionType: "1 day",
      paymentType: "Stripe",
      userId: 0,
      subscriptionId: "0",
    },
    {
      dateOfPayment: "2023-08-13T12:22:18.985Z",
      endDateOfSubscription: "2023-08-13T12:22:18.985Z",
      price: 10,
      subscriptionType: "1 day",
      paymentType: "Stripe",
      userId: 0,
      subscriptionId: "0",
    },
    {
      dateOfPayment: "2023-08-13T12:22:18.985Z",
      endDateOfSubscription: "2023-08-13T12:22:18.985Z",
      price: 30,
      subscriptionType: "10 days",
      paymentType: "Stripe",
      userId: 0,
      subscriptionId: "0",
    },
    {
      dateOfPayment: "2023-08-13T12:22:18.985Z",
      endDateOfSubscription: "2023-08-13T12:22:18.985Z",
      price: 20,
      subscriptionType: "5 days",
      paymentType: "Stripe",
      userId: 0,
      subscriptionId: "0",
    },
  ];
  const [selectCount, setSelectCount] = useState(10);
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      console.log("Order canceled -- continue to shop around and checkout when you’re ready.");
    }
  }, []);
  useEffect(() => {
    getData().then();
  }, [data]);

  const getData = async () => {
    await getMyPayments();
    console.log(data);
  };
  if (data?.length) {
    tableData = data;
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th>Date of Payment</th>
            <th>End date of subscription</th>
            <th>Price</th>
            <th>Subscription Type</th>
            <th>Payment Type</th>
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {tableData.map((subscription: any, index: any) => {
            if (index >= selectCount) {
              return;
            }
            return (
              <tr key={index}>
                <td>{formatServerDate(subscription.dateOfPayment)}</td>
                <td>{formatServerDate(subscription.endDateOfSubscription)}</td>
                <td>{subscription.price}</td>
                <td>{subscription.subscriptionType}</td>
                <td>{subscription.paymentType}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        currentPage={1}
        onPageChange={() => {}}
        totalPages={5}
        onSelectChange={(value: number) => {
          setSelectCount(value);
        }}
      />
    </div>
  );
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onSelectChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  onSelectChange: (selected: number) => void;
}) => {
  const [count, setCount] = useState(25);

  const onSelected = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelectChange(+e.target.value);
  };
  return (
    <div className={"flex mt-2"}>
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={onPageChange}
        forcePage={currentPage}
        className={"flex"}
        pageClassName={"mr-3 ml-3"}
        activeClassName={"text-amber-500 "}
        nextLabel={">"}
        previousLabel={"<"}
      />
      <div className={"ml-3 mr-3"}>
        <span>show</span>
        <div
          style={{
            border: "rgba(255,255,255,0.4) solid 1px",
            zIndex: "10",
            display: "inline-block",
            borderRadius: "3px",
            margin: "0 5px",
          }}
        >
          <select
            name="pagesCountOnPage"
            id="pagesCountOnPage"
            className={"text-white rounded-md border-slate-500 bg-transparent"}
            onChange={onSelected}
          >
            <option value="10">10</option>
            <option value="5">5</option>
            <option value="2">2</option>
          </select>
        </div>

        <span>on page</span>
      </div>
    </div>
  );
};

export default Pagination;
