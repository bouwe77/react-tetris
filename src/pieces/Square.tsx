interface Props {
  x: number
  y: number
}

const Square = ({ x, y }: Props) => (
  <svg>
    <rect width="10" height="10" x={x} y={y} fill="lightblue" stroke="black" />
  </svg>
)

export default Square
