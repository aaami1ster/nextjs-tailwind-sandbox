import React from 'react'
import CustomSelectBox from './components/CustomSelectBox'

type Props = {}

const SelectBox = (props: Props) => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>Select Box</h1>
      <br />
      <br />
      <CustomSelectBox />
    </div>
  )
}

export default SelectBox