import { UserInfoTop, Repos, User, Search, Navbar } from "./../components";
import loadingImage from "./../../images/preloader.gif";
import { useGitHubContext } from "./../context";

export default function Dashboard() {
  const { isLoading } = useGitHubContext();

  if (isLoading) {
    return (
      <>
        <Navbar />
        <Search />
        <img src={loadingImage} alt="loading" className="loading-img" />
      </>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <UserInfoTop />
      <User />
      <Repos />
    </main>
  );
}
