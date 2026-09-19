import axios from "axios";
import config from "../config/config.js";

// const payViaKhalti = async (data) => {
//   const body = {
//     return_url: `${config.khalti.returnUrl}/${data.id}`,
//     website_url: config.appUrl,
//     amount: data.amount,
//     purchase_order_id: data.purchaseOrderId,
//     purchase_order_name: data.purchaseOrderName,
//     customer_info: data.customerInfo,
//   };

//   const response = await axios.post(config.khalti.apiUrl, body, {
//     headers: {
//       Authorization: `Key ${config.khalti.secretKey}`,
//     },
//   });

//   return response.data;
// };

const payViaKhalti = async (data) => {
  
  const body = {
    return_url: `${config.khalti.returnUrl}/${data.id}`,
    website_url: config.appUrl,
    amount: data.amount,
    purchase_order_id: data.purchaseOrderId,
    purchase_order_name: data.purchaseOrderName,
    customer_info: data.customerInfo,
  };

  try {
    console.log("Calling Khalti...");
    console.log("Khalti URL:", config.khalti.apiUrl);

    const response = await axios.post(config.khalti.apiUrl, body, {
      headers: {
        Authorization: `Key ${config.khalti.secretKey}`,
        "Content-Type": "application/json",
      },
      timeout: 15000,
    });

    console.log("Khalti response:", response.data);

    return response.data;
  } catch (error) {
    console.error("KHALTI ERROR");
    console.error("Message:", error.message);
    console.error("Code:", error.code);
    console.error("Response:", error.response?.data);
    console.error("Status:", error.response?.status);

    throw error;
  }
};

export { payViaKhalti };