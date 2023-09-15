const Home = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <input
        type="range"
        min={0}
        max="100"
        value="25"
        className="range"
        step="25"
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>

      <div
        tabIndex={0}
        className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
      >
        <div className="collapse-title">Focus me to see content</div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
