require("dotenv").config();

exports.handler = async (event, context, cb) => {
  return {
    statusCode: 200,
    body: "single product",
  };
};
/* 
const fetchSingleProduct = async (url) => {
  try {
    dispatchProducts({ type: GET_SINGLE_PRODUCT_BEGIN });
    const response = await axios(url);
    const singleProduct = response.data;
    dispatchProducts({
      type: GET_SINGLE_PRODUCT_SUCCESS,
      payload: singleProduct,
    });
  } catch (error) {
    dispatchProducts({ type: GET_SINGLE_PRODUCT_ERROR });
  }
};
 */
