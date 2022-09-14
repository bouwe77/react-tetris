import Square from './Square'

const I = () => {
  const rotations = [
    { x: 0, y: 0 },
    { x: 50, y: 0 },
  ]

  const index = 0

  return (
    <svg
      width="50"
      height="50"
      viewBox={`${rotations[index].x} ${rotations[index].y} 50 50`}
    >
      <g>
        <Square x={0} y={20} />
        <Square x={10} y={20} />
        <Square x={20} y={20} />
        <Square x={30} y={20} />
      </g>
      <g>
        <Square x={70} y={0} />
        <Square x={70} y={10} />
        <Square x={70} y={20} />
        <Square x={70} y={30} />
      </g>
    </svg>
  )
}

export default I
