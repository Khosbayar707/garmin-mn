import ImageTile from './ImageTile'

const columnClasses = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3' }

export default function TileGrid({ tiles, columns = 3, className = '' }) {
  return (
    <div className={`grid gap-1.5 ${columnClasses[columns]} ${className}`}>
      {tiles.map((tile) => <ImageTile key={tile.title} {...tile} />)}
    </div>
  )
}
