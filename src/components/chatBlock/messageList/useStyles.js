import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  return {
    messagesBlock: {
      height: "70vh",
      padding: "12px",
      background: "#001329",
      color: "#cbcbcb",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0px 0px 2px 1px rgba(71, 77, 83, 0.444)",
      boxSizing: "border-box",
    },
    conversation: {
      height: "93%",
      overflow: "scroll",
      display: "flex",
      flexDirection: "column",
      justifyContent: "end",
    },
    input: {
      background: "#002047",
      padding: "10px 15px",
      borderRadius: "15px 15px 0 0",
      fontSize: "15px",
      color: "#9a9fa1",
    },
    icon: {
      color: "#2b5278",
      cursor: "pointer",
    },
  };
});
