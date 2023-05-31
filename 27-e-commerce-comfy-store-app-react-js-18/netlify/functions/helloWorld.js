// domain/.netlify/functions/helloWorld

exports.handler = async function (event, context) {
  // console.log("event = ", event);
  // console.log("context = ", context);
  return {
    statusCode: 200,
    body: "Hello world",
  };
};

//-------------------------------------------------------
