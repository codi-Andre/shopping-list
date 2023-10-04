import { useAppSelector } from "@/store"
import { currencyUSD } from "@/utils/currency-formatter"
import { TableRow } from "./table-row"

export function ItemsTable() {
  const list = useAppSelector((state) => {
    return state.list
  })

  return (
    <table>
      <colgroup>
        <col className="w-[5%]" />
        <col />
        <col className="w-[5%]" />
        <col />
        <col className="w-[5%]" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">
            <span className="sr-only">
              Check the boxes below to add up the value of the items
            </span>
          </th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">
            <span className="sr-only">
              The buttons below are to delete their respective rows
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {list.items.map((product) => (
          <TableRow key={product.id} {...product} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">
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
              <rect x="3" y="5" width="6" height="6" rx="1" />
              <path d="m3 17 2 2 4-4" />
              <path d="M13 6h8" />
              <path d="M13 12h8" />
              <path d="M13 18h8" />
            </svg>
            <span className="sr-only">Checked items:</span>
          </th>
          <td>{currencyUSD.format(list.itemsChecked)}</td>
          <th scope="row">Total:</th>
          <td colSpan={2}>{currencyUSD.format(list.total)}</td>
        </tr>
      </tfoot>
    </table>
  )
}
