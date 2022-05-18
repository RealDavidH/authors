import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    const { id } = useParams()
    const [author, setAuthor] = useState()
    const navigate = useNavigate()
    const [error, setError] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(author)
        axios.put(`http://localhost:8000/api/update/author/${id}`, author)
            .then(() => navigate('/'))
            .catch(err => {
                const err_Res = err.response.data.errors;
                const err_Arr = []
                for (const key of Object.keys(err_Res)) {
                    err_Arr.push(err_Res[key].message)
                }
                setError(err_Arr)
            })
    }

    const handleChange = (e) => {
        setAuthor({ ...author, [e.target.name]: e.target.value })
    }

    const getOne = async () => {
        const response = await axios.get(`http://localhost:8000/api/author/${id}`)
        return response.data
    }

    useEffect(() => {
        getOne()
            .then(setAuthor)
    }, [])

    return (
        author ?
            <div>
                <div className='w-50 m-auto'>
                    <a href="/" className='text-dark'>Home</a>
                    <p className='fs-4'>Edit author:</p>
                    <form className='bg-dark text-center pb-3' onSubmit={handleSubmit} >
                        {error.map((err, i) => <p key={i}>{err}</p>)}
                        <div className='mb-3 w-25 text-center m-auto'>
                            <label className='form-label' >Enter Author Name:</label>
                            <input name='name' className='form-control' type="text" placeholder='Ex: "John Doe"' value={author.name} onChange={handleChange} />
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary" />
                        <a href="/" className="btn btn-danger ms-3">Cancel</a>
                    </form>
                </div>
            </div>
            :
            <h1>Loading</h1>
    )
}

export default Edit
