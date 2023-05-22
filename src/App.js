import React, { useEffect, useState } from "react";

// Import the "useState" and "useEffect" hooks from React
// Soo jiido "useState" iyo "useEffect"

// Import the "MyProfile" component
// Soo jiido "MyProfile" component-ka

// Import the "axios" library
// Soo jiido "axios" hoos

import "./App.css";
import MyProfile from "./components/MyProfile";
import axios from "axios";


function App() {

  // Create 3 states, "profile", "followers", and "following"
  const [profile,setProfile] = useState({});
  console.log("jawaab",profile)
  const [followers,setFollowers] = useState({});
  const [following,setFollowing] = useState({});
  // Samee 3 state, "profile", "followers", iyo "following"


  // API For Profile = https://api.github.com/users/<your-github-username>
  // API for Followers = https://api.github.com/users/<your-github-username>/followers
  // API for Following = https://api.github.com/users/<your-github-username>/following
  useEffect(() => {
    axios.get("https://api.github.com/users/abdishakuur366").then((res) => {
      console.log("jawaab", res)
      setProfile(res.data);
      console.log(res)
    });

  }, []);

  useEffect(() => {
    axios.get("https://api.github.com/users/abdishakuur366/followers").then((res) => {
      setFollowers(res.data);
    });

  }, []);


  useEffect(() => {
    axios.get("https://api.github.com/users/abdishakuur366/following").then((res) => {
      setFollowing(res.data);
    });

  }, []);


  // Use axios to fetch data from the API using the useEffect hook
  // Halkaan isticmaal axios adigoo kasoo jiidanaayo waxaa u baahantahay API, useEffect hook-na isticmaal
    
  return (
    <div className="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
      <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <MyProfile profile={profile} followers={followers} following={following}/>
      {/* Show "MyProfile" component here and give it 3 props, "profile", "followers", and "following" */}
      {/* Halkaan soo gali "MyProfile", 3 props-na sii, "profile", "followers", iyo "following" */}

    </div>
  );
}

export default App;
