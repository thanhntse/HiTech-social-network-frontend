import { useTranslation } from 'react-i18next';

type Props = {}

export default function TopGroup({ }: Props) {
  const { t } = useTranslation();
  return (
    <>
      <div
        className='bg-[url(/images/demo-banner.jpg)] bg-center bg-cover w-full h-[300px] rounded-md flex flex-col justify-center gap-5 p-8 text-white'
      >
        <div className="text-4xl font-semibold">
          {t('top3MostActiveGroups')}
        </div>
        <div className="">
          {t('thisFeatureIsInDevelopment')}
        </div>
      </div>
    </>
  )
}
