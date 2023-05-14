import {useContext} from 'react'

import './index.css'

import SlideContext from '../../context/SlideContext'

const SlideListItem = props => {
  const {changeActiveTab, activeIndex} = useContext(SlideContext)

  const {details, serialNumber} = props
  const {heading, description} = details

  const isActive = activeIndex === serialNumber - 1
  const activeStyling = isActive ? 'active-styling' : ''

  const onClickSlideTab = () => {
    changeActiveTab(serialNumber - 1)
  }

  return (
    <li
      className={`slide-list-item ${activeStyling}`}
      onClick={onClickSlideTab}
      testid={`slideTab${serialNumber}`}
    >
      <p className="slide-number">{serialNumber}</p>
      <section className="slide-tab">
        <h1 className="tab-heading">{heading}</h1>
        <p className="tab-description">{description}</p>
      </section>
    </li>
  )
}

export default SlideListItem
