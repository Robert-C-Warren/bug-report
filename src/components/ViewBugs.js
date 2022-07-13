import { Grid, Paper } from '@mui/material'
import React, { Component, useEffect, useState } from 'react'
import { Container } from '@mui/system'
import NoteCard from '../card/NoteCard'
import Masonry from 'react-masonry-css'
import '../index.css'

export default function ViewBugs() {
  const [bugs, setBugs] = useState([])

  useEffect(() => {
      fetch('http://localhost:8000/bugs')
      .then(res => res.json())
      .then(data => setBugs(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/bugs/' + id, {
      method: 'DELETE'
    })

    const newBugs = bugs.filter(bugs = bugs.id != id)
    setBugs(newBugs)
  }

  const breakpoints = {
    default: 2,
    1100: 1,
    700: 1
  }

  return (
    <Container >
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {bugs.map(bug => (
          <div className='App' key = {bug.id}> 
            <NoteCard bug={bug} handleDelete={handleDelete} /> 
          </div>
        ))}
      </Masonry>
    </Container>
  )

}