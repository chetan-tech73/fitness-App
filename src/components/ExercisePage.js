import React from 'react';
import { Link } from 'react-router-dom';

const ExercisePage = ({ exerciseData }) => {
  return (
    <div>
      <h1>Exercise Categories</h1>
      <div className="exercise-categories">
        {exerciseData.map((category) => (
          <div key={category.category}>
            <h2>{category.category}</h2>
            <ul>
              {category.exercises.map((exercise) => (
                <li key={exercise.id}>
                  <Link to={`/exercise/${exercise.id}`}>{exercise.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExercisePage;
