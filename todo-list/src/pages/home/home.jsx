import React from "react";
import Gallery from "react-photo-gallery";
import "./style.css";
function Home() {
  const photos = [
    {
      src:
        "https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      width: 4,
      height: 2,
    },
    {
      src:
        "https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      width: 4,
      height: 2,
    },
    {
      src:
        "https://images.pexels.com/photos/159886/pexels-photo-159886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      width: 4,
      height: 3,
    },
    {
      src:
        "https://images.pexels.com/photos/68763/pexels-photo-68763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      width: 4,
      height: 3,
    },
    {
      src:
        "https://images.pexels.com/photos/5668471/pexels-photo-5668471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      width: 4,
      height: 2,
    },
    {
      src:
        "https://images.pexels.com/photos/442574/pexels-photo-442574.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      width: 4,
      height: 2,
    },
    {
      src:
        "https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      width: 4,
      height: 2,
    },
  ];
  return (
    <div id="home">
      <h1>Welcome To Todoey</h1>
      <Gallery photos={photos} />
    </div>
  );
}

export default Home;
