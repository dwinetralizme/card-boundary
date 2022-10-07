import React, { useEffect, useState } from "react";
import {
  ArrowSmallDownIcon as ArrowDownIcon,
  ArrowSmallUpIcon as ArrowUpIcon,
} from "@heroicons/react/24/solid";

const Stats = ({ logo, endpoint }) => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    fetch("api/btc")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="flex items-center w-full border-2 solid">
      <div className="shrink-0">
        <img src={logo} alt="btcicon" className="w-14 h-14" />
      </div>

      <div className="pl-5">
        <p className="text-sm uppercase font-medium truncate text-slate-500">
          btc
        </p>
        <div className="flex items-baseline ">
          <p className="text-2xl font-semibold text-slate-900">$122</p>
          <p className="ml-2 flex items-baseline text-sm font-semibold">
            $500
            <ArrowDownIcon className="h-5 w-5 text-green-500 self-center " />
            <ArrowUpIcon className="h-5 w-5 text-red-500 self-center " />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
