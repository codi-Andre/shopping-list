import { USDFormatter } from '@/utils/priceFormatter'
import { Trash } from 'lucide-react'

import { ListItemData } from '../page'
interface DataProps {
  state: ListItemData[]
  deleteItem: (item: ListItemData, index: number) => void
}

export function ItemsTable({ state, deleteItem }: DataProps) {
  return (
    <div className="overflow-x-auto">
      <table className="data_table">
        <thead>
          <tr>
            <th scope="col" className="rounded-tl-md">
              Items
            </th>
            <th scope="col" className="max-w-min">
              Quantity
            </th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
            <th className="rounded-tr-md"></th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => {
            return (
              <tr key={`${item}-${index}`}>
                <td>{item.name}</td>
                <td className="max-w-min">{item.quantity}</td>
                <td>{USDFormatter.format(item.price)}</td>
                <td>{USDFormatter.format(item.price * item.quantity)}</td>
                <td scope="row">
                  <button
                    title="Delete item"
                    onClick={() => deleteItem(item, index)}
                  >
                    <Trash color="red"></Trash>
                  </button>
                </td>
              </tr>
            )
          })}
          <tr>
            <th scope="row" className="rounded-bl-md border-t-2 border-brown-3">
              items on the list:
            </th>
            <td>{state.length}</td>
            <th scope="row" className="border-t-2 border-brown-3">
              Amount:
            </th>
            <td colSpan={2} className="rounded-br-md">
              {USDFormatter.format(
                state.reduce(
                  (accumulator, currentValue) =>
                    accumulator +
                    Number(currentValue.price * currentValue.quantity),
                  0
                )
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
