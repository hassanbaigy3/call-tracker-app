import { CallType } from "../utils/types";
import { capatalizeFirstLetter, colorBasedOnType, formatDate, secondsToMinutesInWords } from "../utils/helperFunctions";

type CallBarProps = {
  call: CallType;
};
const CallBar = ({ call }: CallBarProps) => {
  return (
    <tr>
      <td className={`px-6 py-2 ${colorBasedOnType(call.call_type)}`}>{capatalizeFirstLetter(call.call_type)}</td>
      <td className='px-6'>{capatalizeFirstLetter(call.direction)}</td>
      <td className='px-6'>{secondsToMinutesInWords(call.duration)}</td>
      <td className='px-6'>{call.from}</td>
      <td className='px-6'>{call.to}</td>
      <td className='px-6'>{call.via}</td>
      <td className='px-6'>{formatDate(call.created_at)}</td>
      <td className='px-6'>{call.is_archived ? "Archived" : "UnArchived"}</td>
      <td className='px-6'>{"ASdasd"}</td>
    </tr>
  );
};
export default CallBar;
