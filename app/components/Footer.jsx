import {Typography} from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left mb-2 lg:mb-0">
          <div className="flex flex-col text-center">
            <Typography className="text-[30px] font-bold">Ravel</Typography>
            <Typography>Travel Solution</Typography>
          </div>
        </div>
        <div className="text-center lg:text-right">
          Copyright &copy; 2023 All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
