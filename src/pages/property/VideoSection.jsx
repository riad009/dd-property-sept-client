import ReactPlayer from "react-player";

const VideoSection = ({ property }) => {
  return (
    <div id="facilities " className="mb-8">
      <h1 className="text-2xl font-semibold mb-2">Video</h1>
      <ReactPlayer url={property?.video} />
    </div>
  );
};

export default VideoSection;
