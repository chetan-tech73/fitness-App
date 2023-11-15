import React from "react";
import { useParams, Link } from "react-router-dom";
import exerciseData from "./ExerciseData";
import ExerciseDetails from "./ExerciseDetails";

function CategoryPage() {
  const { category, exerciseId } = useParams();

  // Find the selected category based on the URL parameter
  const selectedCategory = exerciseData.find((cat) => cat.category === category);
  const selectedExercise = selectedCategory?.exercises.find(
    (exercise) => exercise.id === +exerciseId
  );

  if (!selectedCategory) {
    return <div>Category not found.</div>;
  }

  return (
    <div>
      <h2>{decodeURIComponent(category)} exercises</h2>
      {selectedExercise ? (
        <ExerciseDetails exercise={selectedExercise} />
      ) : (
        <ul>
          {selectedCategory.exercises.map((exercise) => (
            <li key={exercise.id}>
              <h3>
              <Link to={`/category/${category}/exercise/${exercise.id}`}>
                  {exercise.name}
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryPage;
