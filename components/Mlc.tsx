/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import QRCode from "qrcode";
import Image from "next/image";

type Props = {};

const Mlc = (props: Props) => {
  const mlcId = Math.random().toString(36).substring(7);
  const [data, setData] = useState({
    mlcId: mlcId,
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    propertyName: "",
    propertySize: "",
    propertyType: "",
    propertyAddress: "",
  });

  const [qrCode, setQrCode] = useState("");
  const generateMlc = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // save data to local storage
    localStorage.setItem("mlcData", JSON.stringify(data));
    // generate qr code
    QRCode.toDataURL(`${process.env.WEB_URL}/mlc/${data.mlcId}`).then(
      setQrCode
    );
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <h1 className="text-center font-bold text-3xl">MLC generate feature</h1>
        <Image
          src={qrCode}
          alt="generated qr code items-center"
          width={300}
          height={300}
        />
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={generateMlc}
          >
            <div>
              <label
                htmlFor="ownerName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Owner's Name
              </label>
              <div className="mt-2">
                <input
                  id="ownerName"
                  name="ownerName"
                  type="text"
                  autoComplete="ownerName"
                  value={data.ownerName}
                  onChange={(e) =>
                    setData({ ...data, ownerName: e.target.value })
                  }
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="ownerEmail"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Owner's Email
              </label>
              <div className="mt-2">
                <input
                  id="ownerEmail"
                  name="ownerEmail"
                  type="email"
                  autoComplete="ownerEmail"
                  value={data.ownerEmail}
                  onChange={(e) =>
                    setData({ ...data, ownerEmail: e.target.value })
                  }
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className="text-sm text-orange-500 animate-pulse">
                  Disclaimer enter the above field if you desire for it to be
                  displayed
                </p>
              </div>
            </div>
            <div>
              <label
                htmlFor="ownerPhone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Owner's Phone
              </label>
              <div className="mt-2">
                <input
                  id="ownerPhone"
                  name="ownerPhone"
                  type="tel"
                  autoComplete="ownerPhone"
                  value={data.ownerPhone}
                  onChange={(e) =>
                    setData({ ...data, ownerPhone: e.target.value })
                  }
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className="text-sm text-orange-500 animate-pulse">
                  Disclaimer enter the above field if you desire for it to be
                  displayed
                </p>
              </div>
            </div>
            <div>
              <label
                htmlFor="propertyName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Property Name
              </label>
              <div className="mt-2">
                <input
                  id="propertyName"
                  name="propertyName"
                  type="text"
                  autoComplete="propertyName"
                  value={data.propertyName}
                  onChange={(e) =>
                    setData({ ...data, propertyName: e.target.value })
                  }
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="propertySize"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Property Size
              </label>

              <div className="mt-2">
                <input
                  id="propertySize"
                  name="propertySize"
                  type="text"
                  autoComplete="propertySize"
                  value={data.propertySize}
                  onChange={(e) =>
                    setData({ ...data, propertySize: e.target.value })
                  }
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="propertyType"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Property Type
              </label>
              <div className="mt-2">
                <input
                  id="propertyType"
                  name="propertyType"
                  type="text"
                  autoComplete="propertyType"
                  value={data.propertyType}
                  onChange={(e) =>
                    setData({ ...data, propertyType: e.target.value })
                  }
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="propertyAddress"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Property Address
              </label>
              <div className="mt-2">
                <input
                  id="propertyAddress"
                  name="propertyAddress"
                  type="text"
                  autoComplete="propertyAddress"
                  value={data.propertyAddress}
                  onChange={(e) =>
                    setData({ ...data, propertyAddress: e.target.value })
                  }
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-md font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white"
              >
                Generate MLC
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Mlc;
