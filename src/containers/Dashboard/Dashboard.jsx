import React from "react";
import "./Dashboard.scss";
import ListEmployees from "../../components/listEmployees/ListEmployees";
import SubHeader from "../../components/subHeader/SubHeader";
import CardCategories from "../../components/cardCategories/CardCategories";

const Dashboard = () => {
  return (
    <div className="container-dashboard">
      <div className="sub-header">
        <SubHeader />
      </div>
      <div className="card-categories">
        <CardCategories />
      </div>
      <div className="list-employees">
        <ListEmployees />
      </div>
    </div>
  );
};

export default Dashboard;
