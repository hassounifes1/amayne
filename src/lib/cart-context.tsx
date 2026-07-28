'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CartItem, Product } from './data';

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, weight: number, quantity?: number) => void;
  removeItem: (productId: string, weight: number) => void;
  updateQuantity: (productId: string, weight: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: Product, weight: number, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(
        i => i.product.id === product.id && i.weight === weight
      );
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id && i.weight === weight
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, weight, quantity }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, weight: number) => {
    setItems(prev => prev.filter(
      i => !(i.product.id === productId && i.weight === weight)
    ));
  }, []);

  const updateQuantity = useCallback((productId: string, weight: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, weight);
      return;
    }
    setItems(prev =>
      prev.map(i =>
        i.product.id === productId && i.weight === weight
          ? { ...i, quantity }
          : i
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, item) => {
    const w = item.product.weights.find(w => w.grams === item.weight);
    const unitPrice = w?.price ?? item.product.price;
    return sum + unitPrice * item.quantity;
  }, 0);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
        itemCount,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
