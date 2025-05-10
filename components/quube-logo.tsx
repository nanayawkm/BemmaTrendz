import Image from 'next/image';

export default function QuubeLogo() {
  return (
    <div className="relative h-8 w-auto">
      <Image
        src="/quube-logo.png"
        alt="Quube"
        width={120}
        height={32}
        className="h-full w-auto object-contain hover:opacity-80 transition-opacity"
        priority
      />
    </div>
  );
} 