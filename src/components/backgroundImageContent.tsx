// Define the props type
interface BackgroundImageProps {
    imageUrl: string;
  }
  const BackgroundImageContent: React.FC<BackgroundImageProps> = ({imageUrl}) => {
    return (
        <img src={imageUrl} className="absolute inset-0 h-full w-full pointer-events-none" alt="Background"/>
    )
}
export default BackgroundImageContent