import { useState, useRef } from 'react'

import {
  Portal,
  Fade,
  Popper,
} from '@mui/material'

const randomString = () => (Math.random() + 1).toString(36).substring(7)

function Popover ({
  trigger,
  children = () => {},
}) {
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)

  const handlePopoverToggleClick = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const closePopover = () => {
    setOpen(false)
  }

  const id = open ? 'popover-'+randomString() : undefined

  return <>

    {trigger({
      ref: anchorRef,
      'aria-describedby': id,
      onClick: handlePopoverToggleClick,
      style: {
        pointerEvents: open ? 'none' : 'all',
      },
    })}

  <Portal>
    <div
      onClick={closePopover}
      style={{
        display: (open ? 'block' : 'none'),
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1299,
        cursor: 'pointer',
      }}
    />

    <Popper
      id={id}
      open={open}
      anchorEl={anchorRef.current}
      transition
      placement="bottom-start"
      disablePortal={true}
      modifiers={[
        {
          name: 'flip',
          enabled: true,
          options: {
            altBoundary: true,
            rootBoundary: 'viewport',
            padding: 8,
          },
        },
        {
          name: 'preventOverflow',
          enabled: true,
          options: {
            altAxis: true,
            altBoundary: true,
            tether: true,
            rootBoundary: 'viewport',
            padding: 8,
          },
        },
      ]}
      style={{
        zIndex: 1300,
      }}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps}>
          <div>
          {
            !!children && typeof children === 'function'
            ? children({
              open,
              style: {
                transformOrigin: 'top left',
              },
              closePopover,
            })
            : null
          }
          </div>
        </Fade>
      )}
    </Popper>

    </Portal>
  </>
}

export default Popover
