import { Filters } from './Filters'
import { CartIcon } from './Icons'

export function Header () {
  return (
    <header>
      <h1>Shopping Cart <CartIcon /></h1>
      <Filters />
    </header>
  )
}
