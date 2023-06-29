import { USDFormatter } from "@/utils/priceFormatter"
import { Trash2Icon } from "lucide-react"
import { ListItemData } from "@/entities/listItem"

interface DataProps {
  state: ListItemData[]
  deleteItem: (id: string) => void
}

export function ItemsTable({ state, deleteItem }: DataProps) {
  return (
    <div className='overflow-y-auto'>
      <table className='data_table'>
        <thead>
          <tr>
            <th scope='col' className='rounded-tl-md'>
              Items
            </th>
            <th scope='col' className='max-w-min'>
              Quantity
            </th>
            <th scope='col'>Price</th>
            <th scope='col'>Total</th>
            <th className='rounded-tr-md'></th>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td className='max-w-min'>{item.quantity}</td>
                <td>{USDFormatter.format(item.price)}</td>
                <td>{USDFormatter.format(item.price * item.quantity)}</td>
                <td scope='row'>
                  <button
                    className='hover:text-red-danger dark:text-gray-lavenderLight dark:hover:text-red-danger'
                    aria-label='delete item'
                    onClick={() => deleteItem(item.id)}
                  >
                    <Trash2Icon />
                  </button>
                </td>
              </tr>
            )
          })}
          <tr>
            <th
              scope='row'
              className='rounded-bl-md border-t-2 border-gray-lavenderDark dark:border-black-eerieBlack'
            >
              Items on the list:
            </th>
            <td>{state.length}</td>
            <th
              scope='row'
              className='border-t-2 border-gray-lavenderDark dark:border-black-eerieBlack'
            >
              Amount:
            </th>
            <td colSpan={2} className='rounded-br-md'>
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
