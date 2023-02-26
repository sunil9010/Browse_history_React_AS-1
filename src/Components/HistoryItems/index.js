import './index.css'

const HistoryItems = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const deleteItems = () => {
    deleteHistory(id)
  }
  return (
    <li className="list-item">
      <div className="row-container">
        <p className="time">{timeAccessed}</p>
        <div className="row">
          <img src={logoUrl} alt="domain logo" className="image" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <button
        type="button"
        data-testid="delete"
        className="button "
        onClick={deleteItems}
      >
        <img
          className="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItems
