import { useState } from "react";
import { useMutation, useSubscription } from "@apollo/client";

import CallDetails from "./call-details.component";

import { CallType } from "../utils/types";
import { ARCHIVE_CALL_MUTATION, CALL_SUBSCRIPTION } from "../utils/GQL";
import { capatalizeFirstLetter, colorBasedOnType, formatDate, secondsToMinutesInWords } from "../utils/helperFunctions";

type CallBarProps = {
  call: CallType;
};
const CallBar = ({ call }: CallBarProps) => {
  const [showCallDetailModal, setShowCallDetailModal] = useState(false);

  const [archiveCall, { loading }] = useMutation(ARCHIVE_CALL_MUTATION, {
    variables: {
      id: call.id,
    },
  });

  const { data } = useSubscription(CALL_SUBSCRIPTION, {
    variables: { id: call.id },
  });

  return (
    <>
      {showCallDetailModal && <CallDetails callDetails={call} handleClose={() => setShowCallDetailModal(false)} />}
      <tr>
        <td className={`px-6 py-2 ${colorBasedOnType(call.call_type)}`}>{capatalizeFirstLetter(call.call_type)}</td>
        <td className='px-6'>{capatalizeFirstLetter(call.direction)}</td>
        <td className='px-6'>{secondsToMinutesInWords(call.duration)}</td>
        <td className='px-6'>{call.from}</td>
        <td className='px-6'>{call.to}</td>
        <td className='px-6'>{call.via}</td>
        <td className='px-6'>{formatDate(call.created_at)}</td>
        <td>
          <button
            className={`flex justify-center items-center mt-2 font-bold ${
              call.is_archived ? `text-teal bg-teal/10` : `text-gray bg-gray/10`
            }`}
            onClick={() => archiveCall()}
          >
            {loading ? `...` : call.is_archived ? "Archived" : "UnArchived"}
          </button>
        </td>
        <td>
          <button
            className='px-6 bg-secondary/20 text-secondary border-spacing-0  font-bold'
            onClick={() => setShowCallDetailModal(true)}
          >
            Add Notes
          </button>
        </td>
      </tr>
    </>
  );
};
export default CallBar;
