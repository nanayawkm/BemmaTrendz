interface BrandLogoProps {
  name: string
}

export default function BrandLogo({ name }: BrandLogoProps) {
  return (
    <div className="text-center">
      {name === "Clothing" ? (
        <div className="text-xl font-bold italic">Clothing</div>
      ) : name === "SUNSET" ? (
        <div className="text-xl font-bold tracking-wider">SUNSET</div>
      ) : name === "VIPSTER" ? (
        <div className="text-xl font-light tracking-widest">VIPSTER</div>
      ) : (
        <div className="text-xl font-bold">{name}</div>
      )}
    </div>
  )
}
