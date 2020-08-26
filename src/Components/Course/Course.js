import React, { useState } from 'react';
import courseData from '../../courseData/courseData';
import './Course.css';
import CourseField from '../CourseField/CourseField';
import Order from '../Order/Order';


const Course = () => {
    const [courses, setCourses] = useState(courseData);
    const [item, setItem] = useState([]);
    const handleAddCourse = (course)=> {
        const newItem = [...item,course];
        setItem(newItem);
    }
    return (
        <div className="course-container">
            <div className="course-details">
                {
                    courses.map(course => <CourseField course={course} handleAddCourse={handleAddCourse} ></CourseField>)
                }
            </div>
            
            <div>
                <Order item={item}></Order>
            </div>
        </div>
    );
};

export default Course;