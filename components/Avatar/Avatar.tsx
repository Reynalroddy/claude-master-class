import styles from "./Avatar.module.css";

interface AvatarProps {
  name: string;
}

function getInitials(name: string): string {
  const uppercase = name.match(/[A-Z]/g) ?? [];
  if (uppercase.length >= 2) return uppercase[0] + uppercase[1];
  return name.charAt(0).toUpperCase();
}

export default function Avatar({ name }: AvatarProps) {
  return (
    <div className={styles.avatar} aria-label={`Avatar for ${name}`}>
      {getInitials(name)}
    </div>
  );
}
