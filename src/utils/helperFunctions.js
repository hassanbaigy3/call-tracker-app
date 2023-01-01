export const secondsToMinutesInWords = (seconds) => {
  return `${Math.floor(seconds / 60)} minutes ${seconds % 60} seconds`;
};

export const formatDate = (date) => {
  const finalDate = date.split("T")[0];
  const [year, month, day] = finalDate.split("-");
  return `${day}-${month}-${year}`;
};

export const colorBasedOnType = (callType) => {
  switch (callType) {
    case "answered":
      return "text-teal";
    case "missed":
      return "text-red";
    default:
      return "text-secondary";
  }
};

export const capatalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
