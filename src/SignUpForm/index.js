const SignUpForm = () => {
  return (<>
    <div>
      <div>
        <p className="main-p">Welcome to PBG form</p>
      </div>
      <form>
        <div className="formControl">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="formControl">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="formControl">
          <label>Password</label>
          <input type="text" />
        </div>
        <button>sumbit</button>
      </form>
    </div>
  </>);
}

export default SignUpForm;