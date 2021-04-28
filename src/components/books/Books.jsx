import React, { useEffect, useState } from 'react'

import { Table } from 'antd'
import axios from 'axios'

const Books = () => {
	const [books, setBooks] = useState([])
	const url = 'http://localhost:8080/api/books'

	useEffect(() => {
		 const getBooks = async () => {
			 const response = await axios.get(url)
			 setBooks(response.data)
		}

		getBooks()
	}, [])
	  
	  const columns = [
		{
		  title: 'Titulo',
		  dataIndex: 'title',
		  key: 'title',
		},
		{
		  title: 'Autor',
		  dataIndex: 'author',
		  key: 'author',
		},
		{
		  title: 'Genero',
		  dataIndex: 'genre',
		  key: 'genre',
		  },
		{
		  title: 'Leido',
		  dataIndex: 'read',
		  key: 'read',
		}
	  ];
	
	return (
		<div>
			<h1 style={{display: 'flex', justifyContent: 'center'}}>Libros</h1>
			<Table dataSource={books} columns={columns}/>
	  </div>
	  )
}

export default Books