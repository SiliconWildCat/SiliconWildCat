import Loader from 'react-loader-spinner';

export default function LoadingLoadingProgress({ className }) {
  return (
    <div className={className}>
      <Loader
        type="Oval"
        // color="black"
        // color="#8977ad"
        color="white"
        width={60}
        height={60}
        timeout={30000}
      ></Loader>
    </div>
  );
}
