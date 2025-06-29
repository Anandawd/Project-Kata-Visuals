import Image from "next/image";

interface PublicIconProps {
  name: string;
  size?: number;
  className?: string;
  alt?: string;
}

const iconMap = {
  // Communication icons
  mail: "ic_mail_16.svg",
  phone: "ic_phone_16.svg",
  whatsapp: "ic_whatsapp_24.svg",

  // Social media icons
  instagram: "ic_instagram_black_24.svg",
  "instagram-white": "ic_instagram_24.svg",
  facebook: "ic_facebook_black_24.svg",
  "facebook-white": "ic_facebook_24.svg",
  youtube: "ic_youtube_24.svg",
  tiktok: "ic_tiktok_24.svg",

  // UI icons
  pin: "ic_pin_16.svg",
  "pin-large": "ic_pin_32.svg",
  camera: "ic_camera_32.svg",
  calendar: "ic_calender_32.svg",
  checklist: "ic_checklist.svg",
  "right-arrow": "ic_right_12.svg",
  "right-circle": "ic_right_circle_32.svg",
  "arrow-right-large": "ic_arrow_right_32.svg",
  "arrow-down": "ic_arrow_down_32.svg",
  "arrow-corner": "ic_arrow_corner.svg",
  "arrow-right-notail": "ic_arrow_right_notail.svg",
};

export default function PublicIcons({
  name,
  size,
  className = "",
  alt,
}: PublicIconProps) {
  const iconFileName = iconMap[name as keyof typeof iconMap];

  if (!iconFileName) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return null;
  }
  return (
    <Image
      src={`/icons/${iconFileName}`}
      alt={alt || `${name} icon`}
      width={size}
      height={size}
      className={className}
    />
  );
}

export type PublicIconName = keyof typeof iconMap;
