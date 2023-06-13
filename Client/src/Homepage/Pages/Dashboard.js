import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
const Dashboard = () => {
  const url = "https://openlibrary.org/search.json?title=the+lord+of+the+rings";

  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard page!</p>
    </div>
  );
};

export default Dashboard;
