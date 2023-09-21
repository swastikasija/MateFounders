export default function Signin({ setShowSignin }) {
  return (
    <>
      <div className="sign-in">
        <div className="signin-children">
          <h1>Sign-In</h1>
          <form action="mailto:swastikasija072@gmail.com" method="GET">
            <input type="email" placeholder="email" />
            <br />
            <input type="password" placeholder="password" />
            <br />
          </form>
          <div className="close">
            <button>Go</button>
            <button onClick={() => setShowSignin(false)}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
}
