import { useState, useEffect } from "react";
import Header from "../components/header.component";

import { useQuery } from "@apollo/client";

import { GET_CALLS } from "../utils/GQL";
import type { CallType } from "../utils/types";
import { CONSTANTS } from "../utils/CONSTANTS";
import { capatalizeFirstLetter, colorBasedOnType, formatDate, secondsToMinutesInWords } from "../utils/helperFunctions";
import CallBar from "../components/call-bar.component";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [calls, setCalls] = useState<CallType[]>([]);

  const { loading, error } = useQuery(GET_CALLS, {
    variables: { offset, limit: CONSTANTS.limit },
    onCompleted: ({ paginatedCalls }) => {
      setCalls(paginatedCalls.nodes);
      console.log(calls);
    },
  });

  return (
    <>
      <Header />

      <div className='flex flex-col justify-center overflow-x-auto relative mx-16 my-10'>
        <h1 className='text-2xl mb-6'>Turing Technologies Frontend Test </h1>
        <table className='w-full text-sm text-gray-500 border-2 border-gray rounded-sm text-left'>
          <thead className='text-sm text-gray-700 uppercase bg-gray '>
            <th scope='col' className='py-3 px-6'>
              CALLTYPE
            </th>
            <th scope='col' className='py-3 px-6'>
              DIRECTION
            </th>
            <th scope='col' className='py-3 px-6'>
              DURATION
            </th>
            <th scope='col' className='py-3 px-6'>
              FROM
            </th>
            <th scope='col' className='py-3 px-6'>
              TO
            </th>
            <th scope='col' className='py-3 px-6'>
              VIA
            </th>
            <th scope='col' className='py-3 px-6'>
              CREATED AT
            </th>
            <th scope='col' className='py-3 px-6'>
              STATUS
            </th>
            <th scope='col' className='py-3 px-6'>
              ACTIONS
            </th>
          </thead>
          <tbody>
            {calls.map((obj, key) => (
              <CallBar call={obj} key={key} />
            ))}
          </tbody>
        </table>
        <button
          onClick={() => {
            setOffset(offset + 9);
          }}
        >
          NEXT PAGE
        </button>
      </div>
    </>
  );
};

export default Home;
