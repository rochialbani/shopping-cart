import { useId } from 'react'
import '../styles/Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()
  const priceFilterId = useId()
  const categoryFilterId = useId()

  const handleChange = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={priceFilterId}>Price</label>
        <input
          type='range'
          id={priceFilterId}
          min='0'
          max='2000'
          onChange={handleChange}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>SmartPhones</option>
        </select>
      </div>
    </section>
  )
}
