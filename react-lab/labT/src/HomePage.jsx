import ReactPlayer from "react-player"

function HomePage() {
    return (
        <div>
            <MyVideo />
        </div>
    );
}

const MyVideo = () => {
  return (
    <ReactPlayer src='https://www.youtube.com/watch?v=T8TZQ6k4SLE' />
  );
};

export default HomePage;
