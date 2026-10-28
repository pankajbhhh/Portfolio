import { getTechIcon } from '../data/techIcons'

export default function TechIcon({ name, size = 18 }) {
  const icon = getTechIcon(name)

  return (
    <span className="tech-icon" style={{ width: size + 22, height: size + 22 }}>
      {icon.path ? (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill={icon.stroke ? 'none' : `#${icon.hex}`}
          stroke={icon.stroke ? `#${icon.hex}` : 'none'}
          strokeWidth={icon.stroke ? 1.8 : 0}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <span className="tech-icon__fallback">{name.slice(0, 2).toUpperCase()}</span>
      )}
    </span>
  )
}
