import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
      <h1 className="flex-1 content-center text-center text-3xl font-bold underline font-sans bg-cyan-800">
          Hello world!
      </h1>
        <div id="container">
            <strong>Ready to create an app?</strong>
            <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        </div>
    </>
  );
};

export default ExploreContainer;
