import React, { useRef, useState, useCallback, SyntheticEvent } from 'react';
import { useGetStudentsQuery, useGetKlassesQuery } from "./homeSlice";
import type { StudentRecord, KlassRecord, Found } from "./services";
import useSessionStorage from "./../../app/hooks/useSessionStorage";


const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useSessionStorage('isLoggedIn', false);
    const [current, setCurrent] = useSessionStorage('user', {});
    const [error, setError] = useState("");
    const { data: klasses } = useGetKlassesQuery();
    const { data: students } = useGetStudentsQuery();
    const textRef = useRef<HTMLInputElement>(null);

    const foundStudents: Found = {};

    const  getStudent = (studentId: string) => students?.records.filter((student: StudentRecord) => student.id === studentId)[0];
    const  getklass = (klassId: string) => klasses?.records.filter((klass: KlassRecord) => klass.id === klassId)[0];

    /*
    search for a student

    check if student  id exist in foundStudent
        if yes
            retrieve student name
        if no
            search for student in students
                if found
                    add student (id and name) to found students
                    use the student name
    */

    // memorize students for efficiency
    const findStudentName = (studentId: string) => {
        // check if studentId foundStudents
        if(foundStudents.hasOwnProperty(studentId)){
            // Return Student name
            return foundStudents[studentId];             
        } else {
            // search for the Student Name
            const studentName = getStudent(studentId)?.fields.Name;
            // add Student Name to foundStudents
            foundStudents[studentId] = studentName;
            return studentName
        }
    }

    // get all students details function
    const getKlassStudentsDetails = (klassId: string) => {
        const tempKlassFields = getklass(klassId)?.fields;
        return {
            "klassId":klassId,
        "name" : tempKlassFields?.Name,
            "students" : tempKlassFields?.Students.map((studentId: string) => findStudentName(studentId))  
        }
    };

    const handleLogin = useCallback(
        () => {
            const  studentExist = () => students?.records.filter((student: StudentRecord) => student.fields.Name.toLowerCase() === textRef.current!.value.toLowerCase())[0];
            if (studentExist()!==undefined) {
                setIsLoggedIn(true);
                setCurrent(studentExist());
                textRef.current!.value = "";
            }else {
                setTimeout(() => setError("Invaild Credentials!"), 2000);
            }
        }, [students?.records, setIsLoggedIn, setCurrent]
    );

    const handleLogout = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoggedIn(false);
        setCurrent({});
    }

    return (
        <div className="container">
            {!isLoggedIn ? (
                <div className="row">
                    <p className="error-text">{error}</p>
                    <input className="textbox" type="text" placeholder="Name" id="login-input" ref={ textRef } />
                    <button className="button" onClick={ handleLogin }>Login</button>
                </div>
                ) :
                (
                <div className="row col">
                    <button className="button logout" onClick={ handleLogout }>Logout</button>
                    <div className="row">
                        <div className="card-container">
                            {current.fields.Classes.map((item: string, index: any) => (
                                <div className="card-body" key={index}>                                    
                                    <h3 className="heading">Class</h3>
                                    <p className="text klass-name">{getKlassStudentsDetails(item).name}</p>
                                    <hr />
                                    <h3 className="heading">Students</h3>
                                    <div className="student-names">
                                        {getKlassStudentsDetails(item).students?.map(
                                            (student: string | undefined, xindex: any) => (
                                                <p className="text student-name" key={xindex}>{student}</p>
                                                )
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
}

export default Home;
