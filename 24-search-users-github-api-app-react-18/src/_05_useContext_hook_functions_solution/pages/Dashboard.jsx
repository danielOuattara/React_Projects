import { UserInfoTop, Repos, User, Search, Navbar } from "./../components";
import loadingImage from "./../../images/preloader.gif";
import { useGitHubContext } from "./../context";

export default function Dashboard() {
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
