import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import exerciseData from "./ExerciseData";
import ExerciseDetails from "./ExerciseDetails";
import '../App.css';

function MainDashboard() {
const [selectedCategory, setSelectedCategory] = useState(null);

 const navigate = useNavigate();
const handleCategoryClick = (category) => {
    navigate(`/category/${encodeURIComponent(category.category)}`);
    setSelectedCategory(category);
};
return (
    <div>
        <h1>Exercise Categories</h1>
        <ul className="category-list">
            {exerciseData.map((category) => (
                <li key={category.category} className="category-item">
                    <div className="category-button" onClick={() => handleCategoryClick(category)}>
                        <img 
                        src={category.imageSrc} alt={category.category} />
                        <div className="category-info">
                            <h2 className="category-name">{category.category}</h2>
                            <p className="category-description">{category.description}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        {selectedCategory && (
            <div> 
                <h2>Selected Category: {selectedCategory.category}</h2>
                <ExerciseDetails exercises={selectedCategory.exercises} />
                </div>
        )}
    </div>
);
}
export default MainDashboard;