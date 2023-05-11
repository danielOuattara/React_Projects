// import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
// import { StarsWrapper } from "./styleWrappers";

// export default function Stars(props) {
//   return (
//     <StarsWrapper>
//       <div className="stars">
//         {/* stars */}
//         <span>
//           {props.stars >= 1 ? (
//             <BsStarFill />
//           ) : props.stars >= 0.5 ? (
//             <BsStarHalf />
//           ) : (
//             <BsStar />
//           )}
//         </span>
//         {/* end of stars */}
//         {/* stars */}
//         <span>
//           {props.stars >= 2 ? (
//             <BsStarFill />
//           ) : props.stars >= 1.5 ? (
//             <BsStarHalf />
//           ) : (
//             <BsStar />
//           )}
//         </span>
//         {/* end of stars */}
//         {/* stars */}
//         <span>
//           {props.stars >= 3 ? (
//             <BsStarFill />
//           ) : props.stars >= 2.5 ? (
//             <BsStarHalf />
//           ) : (
//             <BsStar />
//           )}
//         </span>
//         {/* end of stars */}
//         {/* stars */}
//         <span>
//           {props.stars >= 4 ? (
//             <BsStarFill />
//           ) : props.stars >= 3.5 ? (
//             <BsStarHalf />
//           ) : (
//             <BsStar />
//           )}
//         </span>
//         {/* end of stars */}
//         {/* stars */}
//         <span>
//           {props.stars >= 5 ? (
//             <BsStarFill />
//           ) : props.stars >= 4.5 ? (
//             <BsStarHalf />
//           ) : (
//             <BsStar />
//           )}
//         </span>
//         {/* end of stars */}
//       </div>
//       <p className="reviews">({props.reviews} customer reviews)</p>
//     </StarsWrapper>
//   );
// }

//------------------------------------------------------------------------

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { StarsWrapper } from "./styleWrappers";

export default function Stars(props) {
  const starsArray = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span>
        {props.stars >= index + 1 ? (
          <BsStarFill />
        ) : props.stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <StarsWrapper>
      <div className="stars">{starsArray}</div>
      <p className="reviews">({props.reviews} customer reviews)</p>
    </StarsWrapper>
  );
}

// ----------------------------------------------- my very quick method

// TODO

// import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
// import { StarsWrapper } from "./styleWrappers";

// export default function Stars(props) {
//   function starsDisplayer() {
//     let stars = props.stars;
//     let starsArray = [];
//     do {
//       console.log(("stars = ", stars));
//       console.log("starsArray = ", starsArray);
//       if (stars >= 1) {
//         starsArray.push(<BsStarFill />);
//         stars -= 1;
//         continue;
//       } else if (stars >= 0.5) {
//         starsArray.push(<BsStarHalf />);
//         stars -= 0.5;
//         continue;
//       } else if (0 < stars && stars < 0.5) {
//         starsArray.push(<BsStar />);
//         stars = 0;
//         break;
//       }
//     } while (stars > 0);
//     // starsArray.pop();
//     return starsArray;
//   }

//   return (
//     <StarsWrapper>
//       <div className="stars">
//         {/* stars */}
//         <span>{starsDisplayer()}</span>

//         {/* end of stars */}
//       </div>
//       <p className="reviews">({props.reviews} customer reviews)</p>
//     </StarsWrapper>
//   );
// }
