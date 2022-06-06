import React, { useContext } from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";

const Dashboard = () => {
  const { isLoading } = useContext(GithubContext);

  return (
    <main>
      { isLoading &&<Navbar /> }
      { isLoading &&<img src={loadingImage} className="loading-img"/> }
      {!isLoading && <Search />}
      {!isLoading && <Info />}
      {!isLoading && <User />}
      {!isLoading && <Repos />}

    </main>
  );
};

export default Dashboard;
