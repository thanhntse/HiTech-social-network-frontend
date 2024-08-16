import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';
import {
  Box
} from '@mui/material'
import { useTranslation } from 'react-i18next';
import { HeartHandshake, MessagesSquare, Users } from 'lucide-react';
import MessagesTab from './tab/MessagesTab';
import FriendsTab from './tab/FriendsTab';
import GroupsTab from './tab/GroupsTab';

type Props = {}

export default function MessageSidebarTab({ }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Box
        className='w-full bg-white dark:bg-bg-secondary-dark rounded-md flex flex-col gap-3 h-[474px]'
      >
        <Tabs defaultValue={1}
          className='flex flex-col h-full'
        >
          <TabsList className="w-full flex font-primary items-center justify-center content-between p-3 gap-1">
            <Tab
              slotProps={{
                root: ({ selected, disabled }) => ({
                  className: `font-primary ${selected
                    ? 'text-white bg-primary'
                    : 'text-txt-primary-light dark:text-txt-primary-dark bg-transparent hover:text-white hover:bg-primary'
                    } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                    } text-sm font-medium w-full p-3 border-0 rounded-md flex justify-center flex gap-1 items-center transition-all ease-in-out duration-300`,
                }),
              }}
              value={1}
            >
              <MessagesSquare
                className='w-4 h-4'
              />
              {t('messages')}
            </Tab>
            <Tab
              slotProps={{
                root: ({ selected, disabled }) => ({
                  className: `font-primary ${selected
                    ? 'text-white bg-primary'
                    : 'text-txt-primary-light dark:text-txt-primary-dark bg-transparent hover:text-white hover:bg-primary'
                    } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                    } text-sm font-medium w-full p-3 border-0 rounded-md flex justify-center flex gap-1 items-center transition-all ease-in-out duration-300`,
                }),
              }}
              value={2}
            >
              <Users
                className='w-4 h-4'
              />
              {t('friends')}
            </Tab>
            <Tab
              slotProps={{
                root: ({ selected, disabled }) => ({
                  className: `font-primary ${selected
                    ? 'text-white bg-primary'
                    : 'text-txt-primary-light dark:text-txt-primary-dark bg-transparent hover:text-white hover:bg-primary'
                    } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                    } text-sm font-medium w-full p-3 border-0 rounded-md flex justify-center flex gap-1 items-center transition-all ease-in-out duration-300`,
                }),
              }}
              value={3}
            >
              <HeartHandshake
                className='w-4 h-4'
              />
              {t('groups')}
            </Tab>
          </TabsList>

          <TabPanel className="flex-1 overflow-y-auto w-full font-primary text-sm" value={1}>
            <MessagesTab />
          </TabPanel>
          <TabPanel className="flex-1 overflow-y-auto w-full font-primary text-sm" value={2}>
            <FriendsTab />
          </TabPanel>
          <TabPanel className="flex-1 overflow-y-auto w-full font-primary text-sm" value={3}>
            <GroupsTab />
          </TabPanel>
        </Tabs>
      </Box>
    </>
  )
}
