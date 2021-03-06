import Loader from 'react-loader-spinner';

export default function LoadingLoadingProgress({ className }) {
  return (
    <div className={className}>
      <Loader
        type="Oval"
        color="white"
        width={60}
        height={60}
        timeout={300000}
      ></Loader>
    </div>
  );
}
