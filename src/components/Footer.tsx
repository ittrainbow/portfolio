export const Footer = () => {
  const text = `ittrainbow ${String.fromCodePoint(0x00a9)} 2023`

  return (
    <div className="pt-12 pb-12 text-center text-gray-400">
      <div>{text}</div>
    </div>
  )
}
