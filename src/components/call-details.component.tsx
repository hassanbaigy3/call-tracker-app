import { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_NOTE_MUTATION } from "../utils/GQL";

import { CallType } from "../utils/types";
import { capatalizeFirstLetter, colorBasedOnType, secondsToMinutesInWords } from "../utils/helperFunctions";

type CallDetailsProps = {
  callDetails: CallType | null;
  handleClose: () => void;
};

const CallDetails = ({ callDetails, handleClose }: CallDetailsProps) => {
  const [content, setContent] = useState("");

  const [addNote, { error, loading }] = useMutation(ADD_NOTE_MUTATION, {
    variables: { activityId: callDetails?.id, content },
    onCompleted: () => {
      setContent("");
    },
  });

  return (
    <div className='fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex justify-center items-center bg-black/50'>
      <div className='relative w-full h-full max-w-lg md:h-auto'>
        <div className='relative bg-primary rounded-lg shadow'>
          <div className='flex items-start justify-between  p-4 border-b rounded-t'>
            <div className='flex flex-col'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>Add Notes</h3>
              <p className='text-secondary font-bold'>Call ID:{callDetails?.id}</p>
            </div>
            <button
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-toggle='defaultModal'
              onClick={handleClose}
            >
              <svg
                aria-hidden='true'
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>

          <div className='p-6 space-y-2'>
            <div className='flex justify-between '>
              <p className='font-bold'>Call Type</p>
              <p className={`${colorBasedOnType(callDetails?.call_type)}`}>
                {capatalizeFirstLetter(callDetails?.call_type)}
              </p>
            </div>
            <div className='flex justify-between '>
              <p className='font-bold'>Duration</p>
              <p>{secondsToMinutesInWords(callDetails?.duration)}</p>
            </div>
            <div className='flex justify-between '>
              <p className='font-bold'>From</p>
              <p>{callDetails?.from}</p>
            </div>
            <div className='flex justify-between '>
              <p className='font-bold'>To</p>
              <p>{callDetails?.to}</p>
            </div>
            <div className='flex justify-between '>
              <p className='font-bold'>Via</p>
              <p>{callDetails?.via}</p>
            </div>
            <div className='flex justify-between '>
              <p className='font-bold'>Notes</p>
              <p>
                {callDetails?.notes.map((note) => (
                  <p>{note.content}</p>
                ))}
              </p>
            </div>
          </div>
          <div className='px-6 pb-2'>
            <p className='font-roman mb-2'>Notes</p>
            <textarea
              id='content'
              name='content'
              value={content}
              className='w-full border-2 border-gray h-16 p-2 font-roman'
              placeholder='Add Notes'
              onChange={(e) => {
                e.preventDefault();
                setContent(e.target.value);
              }}
            />
          </div>

          <div className='flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
            <button
              className='flex justify-center items-center font-roman text-primary bg-secondary rounded-md text-md w-full h-8'
              onClick={() => {
                addNote();
              }}
            >
              {loading ? `...` : `Save`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallDetails;
