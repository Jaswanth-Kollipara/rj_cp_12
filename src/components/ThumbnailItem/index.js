import './index.css'

const ThumbnailItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="item-con">
      <button
        onClick={onClickTabItem}
        className={`${activeTabBtnClassName} b1`}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="img1" />
      </button>
    </li>
  )
}

export default ThumbnailItem
