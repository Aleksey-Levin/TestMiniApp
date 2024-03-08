'use client'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { observer } from "mobx-react-lite"
import React, { ComponentProps, FC, ReactNode } from 'react'

interface DropdownProps extends Omit<ComponentProps<typeof Menu>, 'open'>{
  label: ReactNode
  items: ReactNode[]
}

export const Dropdown: FC<DropdownProps> = observer(({ label, items, ...menuProps }) => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <div onClick={handleClick}>
        { label }
      </div>
      <Menu
        disableScrollLock
        id="customized-menu"
        anchorEl={anchorEl}
        open={open}
        autoFocus={false}
        {...menuProps}
        sx={{
          '& .MuiPaper-root': {
            background: 'none',
            padding: 0,
            boxShadow: 'none',
            cursor: 'pointer',

            '& img': {
              cursor: 'pointer',
            },
          },
          '& .MuiMenuItem-root': {
            '&:hover': {
              background: 'transparent',
              boxShadow: 'none',
            },
            '&.Mui-selected': {
              background: 'transparent',
            },
          },
          '& .MuiButtonBase-root': {
            padding: '0',
          },
          '& .MuiList-root': {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          },
        }}
        onClose={handleClose}
      >
        {items.map((item, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() => {
                setAnchorEl(null)
              }}
            >{
                item
              }
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
})