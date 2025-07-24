export const Card = ( {key, title, description, icon, color} ) => {
  return (
    <div className="bg-white sm:w-[350px] h-[250px] rounded-md shadow-md pl-[35px] pt-[37px] pb-[48px] pr-[56px] border-t-4 relative" style={{borderTopColor: color}}>
      <h2 className="text-2xl text-grey-500 font-semibold mb-4">{title}</h2>
      <p className="text-sm">{description}</p>
      <img className="absolute bottom-[24px] right-[24px]" src={icon} alt="icon" />
    </div>
  )
}
