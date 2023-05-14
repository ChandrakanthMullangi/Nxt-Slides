import {useContext} from 'react'

import SlideListItem from '../SlideListItem'

import Slide from '../Slide'

import './index.css'

import SlideContext from '../../context/SlideContext'

const Slides = () => {
  const {initialList} = useContext(SlideContext)

  return (
    <aside className="slides-container">
      <ol className="slides-list">
        {initialList.map((eachSlide, index) => (
          <SlideListItem
            details={eachSlide}
            key={eachSlide.id}
            serialNumber={index + 1}
          />
        ))}
      </ol>
      <Slide />
    </aside>
  )
}

export default Slides
