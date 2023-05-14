import {useState} from 'react'
import Header from './components/Header'
import NewButton from './components/NewButton'
import SlidesListContainer from './components/SlidesListContainer'
import './App.css'

import SlideContext from './context/SlideContext'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
]

const App = () => {
  const [initialList, setInitialList] = useState(initialSlidesList)

  const [activeIndex, setActiveIndex] = useState(0)

  const changeHeading = value => {
    setInitialList(prevState => {
      const newList = prevState.map((eachItem, index) => {
        if (activeIndex === index) {
          return {...eachItem, heading: value}
        }
        return eachItem
      })
      return setInitialList(newList)
    })
  }

  const changeDescription = value => {
    setInitialList(prevState => {
      const newList = prevState.map((eachItem, index) => {
        if (activeIndex === index) {
          return {...eachItem, description: value}
        }
        return eachItem
      })
      return setInitialList(newList)
    })
  }

  const changeActiveTab = index => {
    setActiveIndex(index)
  }

  const addNewItem = item => {
    setInitialList(prevState => {
      const newList = insert(prevState, activeIndex + 1, item)
      return setInitialList([...newList])
    })
  }

  return (
    <main>
      <Header />
      <SlideContext.Provider
        value={{
          initialList,
          activeIndex,
          changeActiveTab,
          addNewItem,
          changeHeading,
          changeDescription,
        }}
      >
        <NewButton />
        <SlidesListContainer />
      </SlideContext.Provider>
    </main>
  )
}

export default App
