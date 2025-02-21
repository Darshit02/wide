import React, { Suspense } from 'react'
import CreatePageSkeleton from './_components/CreatePage/create-page-skeleton'
import RenderPage from './_components/render-page'

type Props = {}

const CreateProject = (props: Props) => {
  return (
    <main className='w-full h-full pt-6'>
        <Suspense fallback={<CreatePageSkeleton />}>
            <RenderPage />
        </Suspense>
    </main>
  )
}

export default CreateProject