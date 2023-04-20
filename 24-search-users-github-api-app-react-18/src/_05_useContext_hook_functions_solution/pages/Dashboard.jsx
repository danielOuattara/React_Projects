import { Info, Repos, User, Search, Navbar } from "./../components";
import loadingImage from "./../../images/preloader.gif";
import { useGitHubContext } from "./../context";

export default function Dashboard() {
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
}
