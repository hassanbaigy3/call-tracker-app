import { useState } from "react";
import { useQuery } from "@apollo/client";

import Header from "../components/header.component";
import CallBar from "../components/call-bar.component";

import { GET_CALLS } from "../utils/GQL";
import type { CallType } from "../utils/types";
import { CONSTANTS } from "../utils/CONSTANTS";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [calls, setCalls] = useState<CallType[]>([]);

  const { loading, data } = useQuery(GET_CALLS, {
    variables: { offset, limit: CONSTANTS.limit },
    onCompleted: ({ paginatedCalls }) => {
      setCalls(paginatedCalls.nodes);
    },
  });

  const totalCount = data?.paginatedCalls.totalCount;

  return (
    <>
      <Header />

      {loading ? (
        <span className='flex justify-center items-center text-xl'>loading...</span>
      ) : (
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
          <div className='flex justify-center mt-2'>{`showing ${
            offset >= totalCount - 9 ? totalCount : offset + 9
          } out of ${totalCount} results`}</div>
          <div className='flex justify-center gap-8 mt-2'>
            <button
              disabled={offset <= 0}
              className='flex justify-center items-center font-roman text-primary bg-secondary rounded-md text-md w-28 h-8'
              onClick={() => {
                setOffset(offset - 9);
              }}
            >
              PREV
            </button>
            <button
              className='flex justify-center items-center font-roman text-primary bg-secondary rounded-md text-md w-28 h-8'
              onClick={() => {
                setOffset(offset + 9);
              }}
            >
              NEXT
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
