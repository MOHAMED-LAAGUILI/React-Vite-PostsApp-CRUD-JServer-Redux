
import { BallTriangle } from 'react-loader-spinner';



const LoaderComponent = () => {
    return (
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        padding: '20px'
      }}>
        <BallTriangle
          color="#007bff"
          height={80}
          width={80}
        />
      </div>
    );
  };


export default LoaderComponent;