import React, { useState } from "react";

const ShowLessNames = ({ commaSepratedText, limit }) => {
  const [showMore, setShowMore] = useState(false);
  if (commaSepratedText?.split(",")?.length <= limit ?? 3) {
    return commaSepratedText;
  }
  return (
    <>
      {showMore ? commaSepratedText : `${commaSepratedText?.split(",").slice(0, limit ?? 3).map(ele => ele).join(",")}`}
      <span style={
        {
          display:"inline",
          textDecoration: "none",
          fontStyle: "italic",
          fontFamily: "monospace",
          fontWeight: "bold",
          cursor: "pointer",
          color:"#4787d6"
        }
      } onClick={() => setShowMore(!showMore)} tabIndex="0">
        {showMore ? " ...less" : " ...more"}
      </span>
    </>
  );
};

ShowLessNames.defaultProps = {
  data: {
    text: "No Data"
  }
}

export default ShowLessNames;
