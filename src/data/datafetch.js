import React, { useEffect, useState } from "react";

export const Datafetch = () => {
  const [gitData, setGitData] = useState(null || "Pavan");
  console.log(gitData.name);

  const { avatar_url } = gitData;

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.github.com/users/PAVAN8618")
        .then((res) => res.json())
        .then((data) => setGitData(data));
    };
    fetchData();
  }, []);

  return (
    <img src={avatar_url} alt="img" className="w-28 h-28 rounded-full "></img>
  );
};
