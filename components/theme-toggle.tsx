'use client'

import { useIsSSR } from '@react-aria/ssr'
import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { FC } from 'react'

import { cn } from '@/lib/utils'

import { Switch } from '../tem/components/ui/switch'

export interface ThemeSwitchProps {
  className?: string
}

export const ThemeToggle: FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, setTheme } = useTheme()
  const isSSR = useIsSSR()

  const onChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div className="flex items-center justify-center gap-1">
      <label htmlFor="theme">
        {theme === 'light' || isSSR ? (
          <Sun size={18} />
        ) : (
          <MoonStar size={18} />
        )}
      </label>
      <Switch
        id="theme"
        className={cn('hidden h-5 w-10', className)}
        checked={!!(theme === 'light' || isSSR)}
        onCheckedChange={onChange}
        aria-label={`Switch to ${theme === 'light' || isSSR ? 'dark' : 'light'} mode`}
      />
    </div>
  )
}
