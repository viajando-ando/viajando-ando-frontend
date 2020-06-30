import React from "react";
import "./CardCategories.scss";
import Icons from "../../utils/icons/svgIcons";
import { connect } from "react-redux";

const CardCategories = ({ categories }) => {
console.log("=====>", categories);

  const listCategories = categories.map((categorie) => (
    <p key={categorie} className="category">
      <p>{categorie._id.name}: {categorie.count}</p>
    </p>
  ));

  return (
    <div className="container-card-categories">
      <div className="container-card-categories--header">
        <Icons name="success" fill="#cd7cf2" /> <p>Travels by city</p>
      </div>
      <p className="container-card-categories--description">Cities</p>
     
      {listCategories}
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.data,
});

export default connect(mapStateToProps)(CardCategories);
