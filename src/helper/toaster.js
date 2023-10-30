import toast from "react-hot-toast";

export default function showToast(text, type) {
  switch (type) {
    case "ERROR":
      toast.error(text, {
        style: {
          boxShadow: "0px 0px 10px rgb(0,0,0, 0.1)",
          fontWeight: "500",
          padding: "16px",
          color: "rgb(247,0,0)",
        },
        iconTheme: {
          primary: "rgb(247,0,0)",
          secondary: "rgb(255,255,255)",
        },
      });
      break;
    case "SUCCESS":
      toast.success(text, {
        style: {
          boxShadow: "0px 0px 10px rgb(0,0,0, 0.1)",
          fontWeight: "500",
          padding: "16px",
          color: "rgb(0,132,0)",
        },
        iconTheme: {
          primary: "rgb(0,132,0)",
          secondary: "rgb(255,255,255)",
        },
      });
      break;
    case "WARNING":
      toast.error(text, {
        style: {
          boxShadow: "0px 0px 10px rgb(0,0,0, 0.1)",
          //   border: "1px solid rgb(237,81,14)",
          fontWeight: "500",
          padding: "16px",
          color: "rgb(235,79,12)",
        },
        iconTheme: {
          primary: "rgb(235,79,12)",
          secondary: "white",
        },
      });
      break;
    default:
      toast.error(text, {
        style: {
          boxShadow: "0px 0px 10px rgb(0,0,0, 0.1)",
          fontWeight: "500",
          //   border: "1px solid rgb(237,81,14)",
          padding: "16px",
          color: "rgb(237,81,14)",
        },
        iconTheme: {
          primary: "rgb(237,81,14)",
          secondary: "white",
        },
      });
  }
}
