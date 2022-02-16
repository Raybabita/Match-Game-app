import './index.css'

const TabItem = props => {
  const {tabItemDetails, getActiveTab, isActive} = props
  const {displayText, tabId} = tabItemDetails
  const ActiveTabClassName = isActive ? 'active' : ''

  const onActiveTab = () => {
    getActiveTab(tabId)
    console.log(tabId)
  }

  return (
    <li className="list-item">
      <button
        className={`btn ${ActiveTabClassName}`}
        onClick={onActiveTab}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
