import { USDFormatter } from "@/utils/priceFormatter"
import { Trash2Icon } from "lucide-react"
import { ListItemData } from "@/entities/listItem"

interface DataProps {
  state: ListItemData[]
  deleteItem: (id: string) => void
}

export function ItemsTable({ state, deleteItem }: DataProps) {
  return (
    <div className='data_table'>
      <table>
        <thead>
          <tr>
            <th scope='col'>Items</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Price</th>
            <th scope='col'>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{USDFormatter.format(item.price)}</td>
                <td>{USDFormatter.format(item.price * item.quantity)}</td>
                <td scope='row'>
                  <button
                    title={`delete ${item.name}`}
                    onClick={() => deleteItem(item.id)}
                  >
                    <Trash2Icon />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <th scope='row'>Items on the list:</th>
            <td>{state.length}</td>
            <th scope='row'>Amount:</th>
            <td colSpan={2}>
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
        </tfoot>
      </table>
    </div>
  )
}
