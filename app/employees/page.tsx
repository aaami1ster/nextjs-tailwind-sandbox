import ListView from '@/components/layout/ListView'
import SearchPanel from '@/components/layout/SearchPanel'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <SearchPanel />
      <div className="flex-1">
        <ListView />
      </div>
    </>
  )
}

export default page