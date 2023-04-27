import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <main>
      <Outlet />;
    </main>
  );
}

// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// export default function RootLayout() {
//   const { isAuthenticated } = useAuth0();
//   if (!isAuthenticated) {
//     return <Navigate to={"login"} />;
//   } else {
//     return (
//       <main>
//         <Outlet />
//       </main>
//     );
//   }
// }
