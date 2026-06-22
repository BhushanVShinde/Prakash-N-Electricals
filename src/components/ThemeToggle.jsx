import { useRef, useState } from 'react'
import { HiLightningBolt } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

const SPARKS = [
  { x: '-14px', y: '-12px' },
  { x: '14px', y: '-12px' },
  { x: '-16px', y: '6px' },
  { x: '16px', y: '6px' },
  { x: '0px', y: '-18px' },
  { x: '0px', y: '16px' },
]

const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme()
  const [animating, setAnimating] = useState(false)
  const buttonRef = useRef(null)
  const tooltipRef = useRef(null)

  const handleToggle = () => {
    setAnimating(true)
    toggleTheme()
    window.setTimeout(() => setAnimating(false), 500)

    // #region agent log
    ;(() => {
      const post = (hypothesisId, message, data) =>
        fetch('http://127.0.0.1:7452/ingest/1ea7c41a-338e-485c-a35d-90435abc08c6', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'c624f1' },
          body: JSON.stringify({
            sessionId: 'c624f1',
            runId: 'run1',
            hypothesisId,
            location: 'ThemeToggle.jsx:handleToggle',
            message,
            data,
            timestamp: Date.now(),
          }),
        }).catch(() => {})
      try {
        const active = document.activeElement
        post('A', 'focus state immediately after click', {
          activeIsButton: active === buttonRef.current,
          activeTag: active ? active.tagName : null,
          hasFocusWithin: buttonRef.current
            ? buttonRef.current.parentElement.matches(':focus-within')
            : null,
        })
        post('C', 'pointer/hover capability', {
          hoverNone: window.matchMedia('(hover: none)').matches,
          pointerCoarse: window.matchMedia('(pointer: coarse)').matches,
          hoverHover: window.matchMedia('(hover: hover)').matches,
        })
        window.setTimeout(() => {
          const tip = tooltipRef.current
          post('B', 'tooltip computed opacity ~200ms after click', {
            opacity: tip ? getComputedStyle(tip).opacity : null,
            stillFocusWithin: buttonRef.current
              ? buttonRef.current.parentElement.matches(':focus-within')
              : null,
            parentHovered: buttonRef.current
              ? buttonRef.current.parentElement.matches(':hover')
              : null,
          })
        }, 200)
      } catch (e) {}
    })()
    // #endregion
  }

  return (
    <div className={`group relative shrink-0 ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={handleToggle}
        role="switch"
        aria-checked={isDark}
        aria-label="Switch power mode"
        className={`relative flex items-center justify-center w-11 h-11 rounded-xl border-2 overflow-visible transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
          isDark
            ? 'bg-slate-800 border-secondary shadow-[0_0_18px_rgba(227,30,36,0.65)] focus-visible:ring-secondary focus-visible:ring-offset-slate-900'
            : 'bg-white border-primary shadow-[0_0_14px_rgba(31,26,120,0.45)] hover:bg-primary/5 focus-visible:ring-primary'
        }`}
      >
        {/* Expanding pulse ring on toggle */}
        <span
          aria-hidden="true"
          className={`absolute inset-0 rounded-xl ${
            isDark ? 'bg-secondary/40' : 'bg-primary/30'
          } ${animating ? 'animate-theme-pulse' : 'opacity-0'}`}
        />

        {/* Spark particles flying outward during toggle */}
        {animating && (
          <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            {SPARKS.map((spark, i) => (
              <span
                key={i}
                className={`animate-spark absolute w-1 h-1 rounded-full ${
                  isDark ? 'bg-secondary' : 'bg-primary'
                } shadow-[0_0_6px_currentColor]`}
                style={{ '--spark-x': spark.x, '--spark-y': spark.y }}
              />
            ))}
          </span>
        )}

        <HiLightningBolt
          aria-hidden="true"
          className={`relative w-6 h-6 transition-colors duration-300 ${
            isDark
              ? 'text-secondary drop-shadow-[0_0_7px_rgba(227,30,36,0.95)]'
              : 'text-primary drop-shadow-[0_0_5px_rgba(31,26,120,0.55)]'
          } ${animating ? 'animate-bolt-flicker' : ''}`}
        />
      </button>

      {/* Tooltip */}
      <span
        ref={tooltipRef}
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 dark:bg-slate-700 px-2.5 py-1.5 text-xs font-semibold text-white opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
      >
        Switch Power Mode
      </span>
    </div>
  )
}

export default ThemeToggle
