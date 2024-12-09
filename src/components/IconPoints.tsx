'use client';
import Image from "next/image";

interface IconPointsProps {
  text: string; // Text to display
  imageSrc: string; // Source of the image
}

const IconPoints: React.FC<IconPointsProps> = ({
  imageSrc, text,
}) => {
  return (
    <div
      className="flex items-center"
      style={{
        marginTop: "15px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Image
        src={imageSrc}
        alt="Icon"
        width={27.17} // Default width for desktop
        height={27.17}   // Default height for desktop
        className="w-[18px] h-[18px] sm:w-[27px] sm:h-[27px]" // Adjusts the width/height for mobile
        style={{
          marginLeft: "2px 8px 4px 6px",
        }}
      />

      <span
        style={{
          width: "auto", // Automatically adjusts to text content
          height: "27px",
          fontFamily: "Manrope",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "28px",
          color: "#000000",
          marginLeft: "25px"
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default IconPoints;
