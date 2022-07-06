import * as React from "react";
import Search from "../components/Search";
import ItemLoader from "../components/ItemLoader";
import NavBar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Search />
      <ItemLoader />
    </>
  );
}
