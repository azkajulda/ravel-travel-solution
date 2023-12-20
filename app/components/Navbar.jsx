'use client'

import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

const pages = [
  {
    title: 'Home',
    prefix: 'home',
  },
  {
    title: 'Tempat Lain',
    prefix: 'browse',
  },
  {
    title: 'Testimoni',
    prefix: 'testimonial',
  },
]

const settings = ['Logout']

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            src="/logo2.svg"
            alt="logo"
            width={180}
            height={37}
            priority
            className="hidden md:flex w-auto"
          />
          <div className="flex flex-col">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                ml: 2,
                display: {xs: 'none', md: 'flex'},
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Ravel
            </Typography>
            <Typography
              sx={{
                ml: 2,
                display: {xs: 'none', md: 'flex'},
                color: 'inherit',
              }}
            >
              Travel Solution by Randy
            </Typography>
          </div>

          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.prefix} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page?.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Image
            src="/logo2.svg"
            alt="logo"
            width={180}
            height={37}
            priority
            className="flex md:hidden mr-5 w-auto"
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="."
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Ravel
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              display: {xs: 'none', md: 'flex'},
            }}
          >
            {pages.map((page) => (
              <Button
                key={page?.title}
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: 'black', display: 'block'}}
              >
                <Link href={`/${page?.prefix}`}>{page?.title}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{flexGrow: 0}}>
            <div className="flex flex-row">
              <Typography className="self-center mr-3">{`Halo, ${'Azka'}`}</Typography>
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <Avatar alt="Azka" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </div>
            <Menu
              sx={{mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
