import {Component} from 'react'
import './index.css'
import TabItem from '../TabItem'
import AppItem from '../AppItem'

class AppStore extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
    searchInput: '',
  }

  setActiveTab = tabId => {
    this.setState({activeTabId: tabId})
  }

  onSearchChange = event => {
    this.setState({searchInput: event.target.value})
  }

  getFilteredApps = () => {
    const {activeTabId, searchInput} = this.state
    const filteredByTab = appsList.filter(
      eachApp => eachApp.category === activeTabId,
    )
    return filteredByTab.filter(app =>
      app.appName.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  render() {
    const {activeTabId, searchInput} = this.state
    const filteredApps = this.getFilteredApps()

    return (
      <div className="app-store-bg">
        <h1 className="app-store-heading">App Store</h1>
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={this.onSearchChange}
        />
        <ul className="tabs-container">
          {tabsList.map(eachTab => (
            <TabItem
              key={eachTab.tabId}
              tabDetails={eachTab}
              isActive={activeTabId === eachTab.tabId}
              setActiveTab={this.setActiveTab}
            />
          ))}
        </ul>
        <ul className="apps-container">
          {filteredApps.map(eachApp => (
            <AppItem key={eachApp.appId} appDetails={eachApp} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AppStore

// Sample tabsList and appsList (add these above the component or import if needed)

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'FOOD', displayText: 'Food'},
]

const appsList = [
  {
    appId: 0,
    appName: 'Facebook',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png',
    category: 'SOCIAL',
  },
  {
    appId: 1,
    appName: 'Messenger',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png',
    category: 'SOCIAL',
  },
  {
    appId: 2,
    appName: 'Instagram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png',
    category: 'SOCIAL',
  },
  // Add more items with category values like GAMES, NEWS, FOOD...
]
