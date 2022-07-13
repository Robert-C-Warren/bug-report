import React from 'react'
import CardContent from '@mui/material/CardContent';
import { Card, CardHeader, IconButton, Typography } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function NoteCard({ bug, handleDelete }) {

  return (
    <div>
        <Card elevation={8} width='20vw' border>
            <CardHeader
                action={
                    <IconButton onClick={() => handleDelete(bug.id)}>
                        <DeleteOutlinedIcon />
                    </IconButton>
                }
                title={bug.bugName}
                subheader={bug.assignedTo}
            />
            <CardContent>
                <Typography variant='body2' color="textSecondary" style={{ overflowWrap: "break-word" }}>
                    {bug.bugDesc}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}