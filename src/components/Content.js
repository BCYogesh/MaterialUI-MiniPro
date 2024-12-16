import { Box } from '@mui/material'
import React from 'react'
import TourCard from './TourCard'

const Content = () => {
    return (
        <Box flex={2}>
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />

        </Box>
    )
}

export default Content