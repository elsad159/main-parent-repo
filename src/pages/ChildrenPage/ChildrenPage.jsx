import React from "react";
import Root from "../../routes/root";
import "./ChildrenPage.css";

const childrenData = [
  {
    id: 1,
    name: "Nazrin Ismailova",
    age: 10,
    hobbies: ["Programming"],
  },
  {
    id: 2,
    name: "Akber Ismayilov",
    age: 8,
    hobbies: ["Sports"],
  },
  {
    id: 3,
    name: "Tural Ismayilov",
    age: 6,
    hobbies: ["Programming"],
  },
];

const ChildrenPage = () => {
  return (
    <div className="children-page">
      <Root />
      <div className="children-content">
        <h1 className="page-title">Uşaqlar</h1>
        <div className="accordion-container">
          {childrenData.map((child) => (
            <div key={child.id} className="accordion">
              <input type="checkbox" id={`child-${child.id}`} />
              <label htmlFor={`child-${child.id}`} className="accordion-label">
                {child.name}
              </label>
              <div className="accordion-content">
                <p>Age: {child.age}</p>
                <p>Hobbies: {child.hobbies.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChildrenPage;
