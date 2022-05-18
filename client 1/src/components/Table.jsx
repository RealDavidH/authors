import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
const Table = (props) => {
    const { favAuthors } = props
    const [authors, setAuthors ] = useState(favAuthors)

    const getAll = async () => {
        const response = await axios.get(`http://localhost:8000/api/all/authors`)
        return response.data
    }

    const deleteOne = async (id) => {
        await axios.delete(`http://localhost:8000/api/delete/author/${id}`)
    }

    const handleDelete = (id) => {
        deleteOne(id)
            .then(() => setAuthors(prev => prev.filter((author) => author._id !== id)))
    }

    useEffect(() => {
        getAll()
            .then(setAuthors)
    }, [])
    return (
            authors?
            <div className='w-50 m-auto'>
                <a href="/add/author" className='text-dark'>Add an Author</a>
                <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <td>Authors:</td>
                            <td>Actions:</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((author, i) => {
                                return (
                                    <tr key={i}>
                                        <td className='text-light fs-3' >{author.name}</td>
                                        <td className='flex-row d-flex p-3'><a href={`/edit/${author._id}`}>
                                            <input type="button" className='me-3 btn btn-outline-info btn-sm' value="Edit" /></a>
                                            |
                                            <input type="button" className='ms-3 btn btn-outline-danger btn-sm' onClick={() => handleDelete(author._id)} value="Delete" />
                                        </td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>

            </div>
            : <h1>Loading...</h1>
    )
}

export default Table