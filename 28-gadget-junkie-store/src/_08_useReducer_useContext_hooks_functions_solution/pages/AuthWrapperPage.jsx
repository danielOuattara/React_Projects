import { useAuth0 } from "@auth0/auth0-react";
import { AuthWrapperPageWrapper } from "./styleWrappers";

export default function AuthWrapperPage(props) {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <AuthWrapperPageWrapper>
        <h1>Loading...</h1>
      </AuthWrapperPageWrapper>
    );
  }

  if (error) {
    return (
      <AuthWrapperPageWrapper>
        <h1>{error.message}</h1>
      </AuthWrapperPageWrapper>
    );
  }
  return <AuthWrapperPageWrapper>{props.children}</AuthWrapperPageWrapper>;
}
