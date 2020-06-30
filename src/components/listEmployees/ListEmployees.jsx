import React from "react";
import "./ListEmployees.scss";
import CardEmployee from "../../components/cardEmployee/CardEmployee";
import { connect } from "react-redux";
import ModalSuccess from "../modal/Success/Success";
import { getEmployeesActionPage } from "../../redux/employeesDuck";

var currentPage = 1;
var pages;
const ListEmployees = ({ employees, getEmployeesActionPage }) => {
  let travels = employees.travels ? employees.travels : [];
  pages = employees.pages;
  

  function getNextTravel(){
    if( currentPage <= pages-1 )
    {
      currentPage++;
      getEmployeesActionPage(currentPage);
    }
  }

  const getPrevTravel= () => {
    if( currentPage > 1 )
    {
      currentPage--;
      getEmployeesActionPage(currentPage);
    }
  }

  

  const listEmployees = travels.map((employee) => {
    return <CardEmployee employee={employee} />;
  });

  // console.log(pagesList);

  return (
    <>
      {/* <div className="container-list-employees">
        <div className="container-list-employees--checkbox">
          <input type="checkbox" className="box"></input>
        </div>
        <p className="container-list-employees--title employee">Empleado</p>
        <p className="container-list-employees--title">Salario</p>
        <p className="container-list-employees--title">Estado</p>
        <p className="container-list-employees--title">Acciones</p>
      </div> */}
      <div>{listEmployees}</div>
      <div key="sectionPages">
        <p>Current Page: { currentPage } of {pages}</p>
        <button onClick={ getPrevTravel }> &lt; Prev Page</button>
        <button onClick={getNextTravel}> Next Page &gt;</button>
      </div>
      <ModalSuccess />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    employees: state.employees.data,
  };
};

export default connect(mapStateToProps, {getEmployeesActionPage})(ListEmployees);
