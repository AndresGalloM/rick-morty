import { MutableRefObject, useEffect } from 'react'

export const useOutsideClick = (
  refContext: MutableRefObject<HTMLDivElement | null>,
  refButton: MutableRefObject<HTMLButtonElement | null>,
  callback: Function
) => {
  const handleClickOutside = (e: MouseEvent) => {
    if (
      !refContext.current?.contains(e.target as Node) &&
      !refButton.current?.contains(e.target as Node)
    ) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })
}
