// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   console.log("You clicked !");
// });

//-----------------------------------------------------------

// const btn = document.querySelector(".btn");
// const debounce = () => {
//   setTimeout(() => {
//     console.log("You clicked !");
//   }, 2000);
// };

// btn.addEventListener("click", debounce);

//-----------------------------------------------------------

// const btn = document.querySelector(".btn");
// const debounce = () => {
//   const timeoutId = setTimeout(() => {
//     console.log("You clicked !");
//   }, 2000);
//   console.log(timeoutId);
//   clearTimeout(timeoutId);
//   console.log("Time out! ");
// };

// btn.addEventListener("click", debounce);

//-----------------------------------------------------------

// const btn = document.querySelector(".btn");

// const debounce = () => {
//   let timeoutId;
//   return () => {
//     console.log("timeoutId = ", timeoutId);
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       console.log("You clicked !");
//     }, 2000);
//   };
// };

// btn.addEventListener("click", debounce());

//-----------------------------------------------------------

const btn = document.querySelector(".btn");

const debounce = (cb) => {
  let timeoutId;
  return () => {
    console.log("timeoutId = ", timeoutId);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cb();
    }, 2000);
  };
};

btn.addEventListener(
  "click",
  debounce(() => console.log("You clicked !")),
);

//-----------------------------------------------------------

// delay logic

// so it to runs 2s after last click
// setTimeout return id, which pass into clearTimeout
