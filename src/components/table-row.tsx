import { useAppDispatch } from "@/store"
import { checkItem, remove } from "@/store/slices/list"
import { currencyUSD } from "@/utils/currency-formatter"

interface TableRowProp {
  id: string
  name: string
  quantity: number
  price: number
  checked: boolean
}

export function TableRow({ id, name, quantity, price, checked }: TableRowProp) {
  const dispatch = useAppDispatch()

  return (
    <tr>
      <td>
        <label htmlFor={`${id}-check`} className="sr-only">
          check {name}
        </label>
        <input
          className="cursor-pointer p-4"
          type="checkbox"
          id={`${id}-check`}
          checked={checked}
          onChange={() => dispatch(checkItem(id))}
        />
      </td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{currencyUSD.format(price)}</td>
      <td>
        <button
          aria-label={`delete ${name}`}
          onClick={() =>
            dispatch(remove({ id, name, quantity, price, checked }))
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </button>
      </td>
    </tr>
  )
}
