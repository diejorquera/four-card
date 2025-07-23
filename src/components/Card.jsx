export const Card = ( {key, title, description, icon, color} ) => {
  return (
    <div className="bg-white w-[350px] h-[250px] rounded-md shadow-md pl-[35px] pt-[37px] pb-[48px] pr-[56px] border-t-4" style={{borderTopColor: color}}>
      <h2 className="text-2xl text-grey-500 font-semibold mb-4">{title}</h2>
      <p className="text-sm">{description}</p>
      <img src={icon} alt="icon" />
    </div>
  )
}
