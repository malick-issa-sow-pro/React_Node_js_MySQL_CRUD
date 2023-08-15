import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("http://localhost:8081/read/" + id)
            .then(res => {
                console.log(res);
                setValues({
                    ...value,
                    name: res.data[0].name,
                    email: res.data[0].email
                });
            })
            .catch(err => console.log(err));
    });
    const [value, setValues] = useState({
        name: "",
        email: ""
    });
    const handleUpdate = event => {
        event.preventDefault();
        axios
            .put("http://localhost:8081/update/" + id, value)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err));
    };
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleUpdate}>
                    <h2>Edit Student</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder="Enter you name"
                            className="form-control"
                            value={value.name}
                            onChange={e =>
                                setValues({...value, name: e.target.value})
                            }
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            placeholder="Enter you email"
                            className="form-control"
                            value={value.email}
                            onChange={e =>
                                setValues({...value, email: e.target.value})
                            }
                        />
                    </div>
                    <button className="btn btn-success">Edit</button>
                </form>
            </div>
        </div>
    );
}
