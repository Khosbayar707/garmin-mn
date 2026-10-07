import { createContext, useContext, useState } from 'react'

const CartContext = createContext({ count: 0, add: () => {} })

export function CartProvider({ children }) {
  const [count, setCount] = useState(0)
  return <CartContext.Provider value={{ count, add: () => setCount((n) => n + 1) }}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react/only-export-components
export const useCart = () => useContext(CartContext)
