import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

import Table from './Table'
const Main = () => {
    const [authors, setAuthors] = useState()
    

    const getAll = async () => {
        const response = await axios.get(`http://localhost:8000/api/all/authors`)
        return response.data
    }

    const deleteOne = async (id) =>{
        await axios.delete(`http://localhost:8000/api/delete/author/${id}`)
    }

    const handleDelete = (id) =>{
        deleteOne(id)
            .then(() => setAuthors(prev => prev.filter((author) => author._id !== id)))
    }

    useEffect(() => {
        getAll()
            .then(setAuthors)
    }, [])


    return (
        <div>
            <Table favAuthors={authors} />
        </div>
        
    )
}

export default Main