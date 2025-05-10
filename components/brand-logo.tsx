interface BrandLogoProps {
  name: string
}

export default function BrandLogo({ name }: BrandLogoProps) {
  return (
    <div className="text-center">
      {name === "BemmaTrendz" ? (
        <div className="relative group">
          <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
            Bemma
          </span>
          <span className="text-2xl md:text-3xl font-light tracking-wider text-gray-800 transition-all duration-300 group-hover:scale-105">
            Trendz
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f34f38] to-[#ff6b6b] transition-all duration-300 group-hover:w-full"></div>
        </div>
      ) : name === "Clothing" ? (
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
