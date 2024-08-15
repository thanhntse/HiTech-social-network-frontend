import {
  TabContext,
  TabList,
  TabPanel
} from '@mui/lab'
import {
  Box,
  Tab as MUITab,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { TabItemProps } from '../../types'
import React from 'react'
import RenderIf from '../RenderIf'

type Props = {
  items: TabItemProps[],
  headerChildren?: React.ReactNode,
}

export default function Tab({
  items,
  headerChildren,
}: Props) {
  const { t } = useTranslation();
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}
          className='flex justify-between items-center pb-5 w-full'
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                display: 'none'
              },
            }}
          >
            {items.map((item, index) => (
              <MUITab
                key={index}
                label={t(item.label)}
                value={item.value}
                className={`text-base rounded-md capitalize text-inherit ${value === item.value ? 'text-primary' : ""} hover:text-primary transition-all duration-200 ease-in-out relative`}
                sx={{
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: "5px",
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '2px',
                    backgroundColor: 'primary.main',
                    transition: 'all 200ms ease-in-out',
                    width: 0
                  },
                  '&:hover:after': {
                    width: '60%',
                  },
                  '&.Mui-selected:after': {
                    width: '60%',
                  }
                }}
              />
            ))}
          </TabList>
          <RenderIf
            ifTrue={headerChildren !== undefined}
          >
            <Box
              className='basis-1/2 flex justify-end items-center gap-3'
            >
              {headerChildren}
            </Box>
          </RenderIf>
        </Box>
        {items.map((item, index) => (
          <TabPanel
            key={index}
            value={item.value}
            className='w-full p-0 pt-5'
          >
            {item.children}
          </TabPanel>
        ))}
      </TabContext>
    </>
  )
}
