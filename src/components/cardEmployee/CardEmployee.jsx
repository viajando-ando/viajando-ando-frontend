import React from "react";
import Icons from "../../utils/icons/svgIcons";
import ModalDelete from "../modal/Delete/Delete";
import ModalEditEmployee from "../modal/FormEditEmployee/FormEditEmployee";
import "./CardEmployee.scss";

class CardEmployee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      openEditModal: false,
    };
  }

  actionModal = () => {
    this.setState({
      openModal: !this.state.openModal,
    });
  };

  actionEditModal = () => {
    this.setState({
      openEditModal: !this.state.openEditModal,
    });
  };

  render() {
    const { employee } = this.props;
    // console.log("-->", employee);
    return (
      <div key={employee._id} className="card-employee">
        {/* <div>
          <div className="container-list-employees--checkbox">
            <input type="checkbox" className="box"></input>
          </div>
        </div> */}
        { employee.passenger ? 
        <div className="align">
          <p className="title-list">{employee.passenger.first_name} {employee.passenger.last_name}</p>
          <p className="sub-title-list">Passenger</p>
        </div>
        :
        ""
        }
        <div className="align">
          <p className="title-list">{employee.driver.first_name} {employee.driver.last_name}</p>
          <p className="sub-title-list">Lat: {employee.driver_location.coordinates[0]}</p>
          <p className="sub-title-list">Long: {employee.driver_location.coordinates[1]}</p>
          <p className="sub-title-list">Driver</p>
        </div>
        <div className="align">
          <p className="title-list">{employee.start.pickup_address}</p>
          <p className="sub-title-list">Lat: {employee.start.pickup_location.coordinates[0]}</p>
          <p className="sub-title-list">Long: {employee.start.pickup_location.coordinates[1]}</p>
          <p className="sub-title-list">Start</p>
        </div>
        <div className="align">
          <p className="title-list">{employee.end.pickup_address}</p>
          <p className="sub-title-list">Lat: {employee.end.pickup_location.coordinates[0]}</p>
          <p className="sub-title-list">Long: {employee.end.pickup_location.coordinates[1]}</p>
          <p className="sub-title-list">Destination</p>
        </div>
        <div className="align">
          <p className="title-list">{employee.country.name}</p>
          <p className="sub-title-list">{employee.city.name}</p>
          <p className="sub-title-list">Check code: {employee.check_code}</p>
        </div>
        <div className="align">
          <p className="title-list">{employee.price}</p>
          <p className="sub-title-list">Price</p>
        </div>
        <div className="align">
          <p className="title-list">{employee.status}</p>
          <p className="sub-title-list">Statu</p>
        </div>
        <div className="card-employee--buttons">
          <div onClick={this.actionEditModal}>
            <Icons name="edit" className="actions" />
          </div>
          {/* <div onClick={this.actionModal}>
            <Icons name="delete" className="actions" />
          </div> */}
          <ModalDelete
            openModal={this.state.openModal}
            actionModal={this.actionModal}
            employee={employee}
          />
          <ModalEditEmployee
            openModal={this.state.openEditModal}
            actionModal={this.actionEditModal}
            employee={employee}
          />
        </div>
      </div>
    );
  }
}

export default CardEmployee;
