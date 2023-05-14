import {useState, useContext} from 'react'

import './index.css'

import SlideContext from '../../context/SlideContext'

const Slide = () => {
  const [isHeadingActive, setIsHeadingActive] = useState(true)

  const [isDescriptionActive, setIsDescriptionActive] = useState(true)

  const {
    initialList,
    activeIndex,
    changeHeading,
    changeDescription,
  } = useContext(SlideContext)

  const onClickHeading = () => {
    setIsHeadingActive(false)
  }

  const onClickDescription = () => {
    setIsDescriptionActive(false)
  }

  const onBlurDescription = event => {
    if (event.target.value === '') {
      changeDescription('Description')
    }
    setIsDescriptionActive(true)
  }

  const onBlurHeading = event => {
    if (event.target.value === '') {
      changeHeading('Heading')
    }
    setIsHeadingActive(true)
  }

  const onChangeHeading = event => {
    changeHeading(event.target.value)
  }

  const onChangeDescription = event => {
    changeDescription(event.target.value)
  }

  const tabDetails = initialList[activeIndex]

  const {description, heading} = tabDetails

  return (
    <section className="slide-view-container">
      <section className="slide-container">
        {isHeadingActive ? (
          <h1 onClick={onClickHeading} className="slide-heading">
            {heading}
          </h1>
        ) : (
          <input
            type="text"
            value={heading}
            onChange={onChangeHeading}
            onBlur={onBlurHeading}
            className="slide-heading-input"
          />
        )}
        {isDescriptionActive ? (
          <p onClick={onClickDescription} className="slide-description">
            {description}
          </p>
        ) : (
          <input
            type="text"
            value={description}
            onChange={onChangeDescription}
            className="slide-description-input"
            onBlur={onBlurDescription}
          />
        )}
      </section>
    </section>
  )
}

export default Slide
