'use client'

// React Imports
import { Children, isValidElement, useEffect, useState, type ReactNode } from 'react'

// Util Imports
import { cn } from '@/lib/utils'

type GridLayoutProps = {
  children: ReactNode
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

const ComponentsGrid = ({ children, sm, md, lg, xl, xs = 1 }: GridLayoutProps) => {
  // States
  const [columns, setColumns] = useState<number>(xl ?? lg ?? md ?? sm ?? xs)

  // Vars
  const length = Children.count(children)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      if (width >= 1280) setColumns(xl ?? lg ?? md ?? sm ?? xs)
      else if (width >= 1024) setColumns(lg ?? md ?? sm ?? xs)
      else if (width >= 768) setColumns(md ?? sm ?? xs)
      else if (width >= 640) setColumns(sm ?? xs)
      else setColumns(xs)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [xs, sm, md, lg, xl])

  return (
    <div
      className='group/grid mb-0 grid divide-x divide-y divide-dashed'
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {Children.map(children, (child, index) => (
        <div
          className={cn(
            {
              'border-b-0': index >= length - (length % columns || columns),
              'border-e-0': (index + 1) % columns === 0,
              'border-e border-dashed': length % columns !== 0 && index === length - 1
            },
            isValidElement<{ className?: string }>(child) &&
              child.props.className?.split(' ').filter(word => word.includes('col-span-') || word.includes('border-e-'))
          )}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

export default ComponentsGrid
