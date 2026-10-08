const SectionHeading = ({ eyebrow, title, subtitle, align = 'center', action }) => {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'
  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <div className={`flex w-full flex-col gap-3 ${alignClass} ${action ? 'md:flex-row md:items-end md:justify-between md:text-left' : ''}`}>
        <div className={`flex flex-col gap-3 ${alignClass}`}>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
          {subtitle && <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>}
        </div>
        {action}
      </div>
    </div>
  )
}

export default SectionHeading
