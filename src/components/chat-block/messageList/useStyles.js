import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  return {
    chatBlock: {
      height: "900px",
      width: "100%",
      padding: "12px",
      background: "#001329",
      color: "#cbcbcb",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0px 0px 2px 1px rgba(71, 77, 83, 0.444)",
    },
    messagesBlock: {
      height: "93%",
      overflow: "scroll",
      // display: "flex",
      // flexDirection: "column",
      // justifyContent: "end",
    },
    input: {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: "15px",
    },
    icon: {
      color: "#2b5278",
      cursor: "pointer",
    },
  };
});
