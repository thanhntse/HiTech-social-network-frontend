import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material'
import {
  Search,
} from 'lucide-react'
import { useTranslation } from 'react-i18next';
import Tab from '../../../components/tab/Tab';
import { groupTabItems } from '../../../constants/all-tab-list';
import Dropdown from '../../../components/dropdown/dropdown';
import { filterGroupsOptions } from '../../../constants/all-filter-list';
import Button from '../../../components/button';

type Props = {}

export default function GroupList({ }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Box
        className='w-full flex flex-col justify-center items-center gap-8'
      >

        <Box
          className='w-full flex justify-center items-center gap-8 bg-white dark:bg-bg-secondary-dark rounded-lg shadow-gray-200 dark:shadow-bg-secondary-dark shadow-md p-8'
        >
          <FormControl
            className='w-3/4'
            variant="outlined"
          >
            <OutlinedInput
              id="outlined-adornment-search2"
              type='text'
              placeholder={t('searchGroup')}
              className='bg-bg-primary-light dark:bg-bg-primary-dark font-medium text-txt-primary-light dark:text-txt-primary-dark border border-gray-200 dark:border-bg-secondary-dark'
              startAdornment={
                <InputAdornment position="start">
                  <Search className='text-txt-primary-light dark:text-txt-primary-dark' size={24} />
                </InputAdornment>
              }
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'inherit',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'inherit',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2a5aa6',
                },
                '& .MuiOutlinedInput-input': {
                  padding: '12px 12px',
                },
              }}
            />
          </FormControl>
          <Button
            size='large'
            className='w-1/4'
          >
            {t('createAGroup')}
          </Button>
        </Box>

        <Box
          className='w-full flex flex-col justify-center items-start bg-white dark:bg-bg-secondary-dark rounded-lg shadow-gray-200 dark:shadow-bg-secondary-dark shadow-md p-8'
        >
          <Tab
            items={groupTabItems}
            headerChildren={
              <>
                <Typography>
                  {t('showBy')}:
                </Typography>
                <Dropdown options={filterGroupsOptions} />
              </>
            }
          />
        </Box>

      </Box>
    </>
  )
}
