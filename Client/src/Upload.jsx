import React from 'react'
import { useState } from "react" 
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"

function Upload()
{
    const [file, setFile] = useState()

    const navigate = useNavigate()

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        axios.post('http://localhost:3001/upload', formData)
        .then( res => {console.log(res)
            if(res.data ==='Success')
            {
                toast.success('File Uploaded Successfully')
                navigate('/review')
            }
            else
            {
                toast.error(res.data)
            }
        })

        .catch( err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Case Upload</h2>
                    <div className="mb-3">
                        <label><strong>File</strong></label>
                        <input 
                        type="file"
                        onChange={e => setFile(e.target.files[0])}
                        className="form-control rounded-0"
                         />
                    </div>
                    <button type = "button" onClick={handleSubmit} className="btn btn-success w-100 rounded-0">
                        Upload
                    </button>
                    <Link to ="/home" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Cancel
                    </Link>
            </div>
        </div>
    );
}

export default Upload;