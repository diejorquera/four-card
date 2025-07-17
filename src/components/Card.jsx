export const Card = ( {key, title, description, icon, color} ) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={icon} alt="icon" />
    </div>
  )
}
