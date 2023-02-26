import {Component} from 'react'
import './index.css'
import HistoryItems from '../HistoryItems'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class History extends Component {
  state = {searchInput: '', initialItems: initialHistoryList}

  searchChange = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearch = value => {
    this.setState({
      searchInput: value,
    })
  }

  deleteHistory = id => {
    const {initialItems} = this.state
    const filteredList = initialItems.filter(each => each.id !== id)
    this.setState({initialItems: filteredList})
  }

  render() {
    const {searchInput, initialItems} = this.state
    const searchResult = initialItems.filter(eachSearch =>
      eachSearch.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <>
        <div className="header-container">
          <img
            className="logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="search-history">
            <img
              className="search-icon"
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              type="search"
              placeholder="Search history"
              className="searchBox"
              onChange={this.searchChange}
              value={searchInput}
            />
          </div>
        </div>
        <div className="app-container">
          <ul className="history-container">
            {searchResult.length === 0 ? (
              <p className="error">There is no history to show</p>
            ) : (
              searchResult.map(eachItem => (
                <HistoryItems
                  historyDetails={eachItem}
                  updateSearch={this.updateSearch}
                  key={eachItem.id}
                  deleteHistory={this.deleteHistory}
                />
              ))
            )}
          </ul>
        </div>
      </>
    )
  }
}
export default History
