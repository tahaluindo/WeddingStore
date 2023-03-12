export default function VideoCover() {
    return (
        <video className="absolute inset-0 object-cover h-full w-full" autoPlay={true} loop={true} muted playsInline={true}>
            <source src="https://res.cloudinary.com/dzsodhuun/video/upload/v1678019450/pexels_mart_production_7565625_6129942831.mp4?updated_at=2023-03-05T12:30:51.816Z" type="video/mp4" />
        </video>
    )
}