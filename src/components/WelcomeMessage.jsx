function WelcomeMessage({handleGetPostClick}) {
  return <>
  <h1>There are no post...</h1>
  <button onClick={handleGetPostClick} className="btn btn-primary mt-2">Get Post From Server</button>
  </>;
}

export default WelcomeMessage;