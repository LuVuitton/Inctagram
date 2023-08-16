import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

import "./SubscriptionRadio.css";
import { SubscriptionType } from "../../../../../../api/subscriptions.api";

type Props = {
  subTypeValue: SubscriptionType;
  setSubTypeValue: (value: SubscriptionType) => void;
};

export const SubscriptionRadio: React.FC<Props> = ({ subTypeValue, setSubTypeValue }) => {
  return (
    <RadioGroup.Root
      className="RadioGroupRoot"
      defaultValue={subTypeValue}
      aria-label="View density"
      onValueChange={(value: "MONTHLY" | "SEMI_ANNUALLY" | "YEARLY") => setSubTypeValue(value)}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioGroup.Item className="RadioGroupItem" value="MONTHLY" id="r10">
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor="r10">
          $10 per 1 Month
        </label>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioGroup.Item className="RadioGroupItem" value="SEMI_ANNUALLY" id="r50">
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor="r50">
          $50 per Semiannually
        </label>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioGroup.Item className="RadioGroupItem" value="YEARLY" id="r100">
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor="r100">
          $100 per Year
        </label>
      </div>
    </RadioGroup.Root>
  );
};
