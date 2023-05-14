import {useContext} from 'react'

import {v4 as uuidv4} from 'uuid'

import SlideContext from '../../context/SlideContext'

import './index.css'

const NewButton = () => {
  const {changeActiveTab, activeIndex, addNewItem} = useContext(SlideContext)

  const onClickAddButton = () => {
    const item = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    addNewItem(item)
    changeActiveTab(activeIndex + 1)
  }

  return (
    <button type="button" className="add-new-button" onClick={onClickAddButton}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
        alt="new plus icon"
        className="plus-icon"
      />
      New
    </button>
  )
}
export default NewButton
