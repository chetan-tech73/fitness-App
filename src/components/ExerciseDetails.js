import React from "react";
import { useParams, Link } from "react-router-dom";
import exerciseData from "./ExerciseData";

const ExerciseDetails = () => {
    const { category, exerciseId } = useParams();

    //find the selected category based on the URL parameter
    const selectedCategory = exerciseData.find((cat) => cat.category === category);
    const selectedExercise = selectedCategory?.exercises.find( (exercise) => exercise.id === +exerciseId);

    if (!selectedCategory) { 
        return <div>Category not found.</div>
    }

        return(
            <div>
                <h2>{decodeURIComponent(category)}exercises</h2>

                {selectedExercise ? (
                    <div>
                        <h2>{selectedExercise.name}</h2>
                        <h3>Instructions</h3>
                        <p>{selectedExercise.instructions}</p>
                        <h3>Video</h3>
                        <p>
                            <a href={selectedExercise.videoUrl} target="_blank" rel="noopener noreferrer">Watch Video</a>
                        </p>
                        </div>
                ) : (
                    <div>
                        <ul>
                            {selectedCategory.excercises.map((exercise) => (
                                <li key={exercise.id}>
                                    <h3>
                                        <Link to={`/category/${category}/exercise/${exercise.id}`}>{exercise.name}</Link>
                                    </h3>
                                </li>
                            ))}
                        </ul>
                        </div>
                )}
            </div>
        );
    
}

export default ExerciseDetails;