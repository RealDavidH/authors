import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Form = () => {
    const [author, setAuthor] = useState({})
    const [error, setError] = useState([])
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:8000/api/create/author`, author)
            .then(() => navigate('/') )
            .catch(err =>{
                const err_Res = err.response.data.errors;
                const err_Arr = []
                for(const key of Object.keys(err_Res)){
                    err_Arr.push(err_Res[key].message)
                }
                setError(err_Arr)
            })
    }
    const handleChange = (e) =>{
        setAuthor({...author, [e.target.name]: e.target.value })
    } 

    return (
        <div className='w-50 m-auto'>
            <a href="/" className='text-dark'>Home</a>
            <p className='fs-4'>Add a new author:</p>
            <form className='bg-dark text-center pb-3' onSubmit={ handleSubmit } >
                {error.map((err,i) => <p key={i}>{err}</p>)}
                <div className='mb-3 w-25 text-center m-auto'>
                    <label className='form-label' >Enter Author Name:</label>
                    <input name='name' className='form-control' type="text" placeholder='Ex: "John Doe"' onChange={handleChange} />
                </div>
                <input type="submit" value="Submit" className="btn btn-primary" />
                <a href="/" className="btn btn-danger ms-3">Cancel</a>
            </form>
        </div>
    )
}

export default Form