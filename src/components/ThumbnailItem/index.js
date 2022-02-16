import './index.css'

const ThumbnailItem = props => {
  const {imageItemDetails, onClickThumbnail} = props
  const {id, thumbnailUrl} = imageItemDetails

  const onActiveThumbnail = () => {
    onClickThumbnail(id)
    console.log('active image')
  }

  return (
    <li className="app-item">
      <button
        className="thumbnail-button"
        onClick={onActiveThumbnail}
        type="button"
      >
        <img className="app-image" alt="thumbnailAltText" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ThumbnailItem
