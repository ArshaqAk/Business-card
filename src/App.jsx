import './App.css';

function App() {
  return (
    <>
      <div className='text-center text-light m-4'>
          <h1>Adacode</h1>
          <hr />
      </div>
      <div className="container">
      <div className="row px-2 py-3 mb-2">
        <div className="col-6">
          <div className="imagediv">

          </div>
          {/* <img className='profile' width={'80px'} src="https://cdn2.iconfinder.com/data/icons/colored-simple-circle-volume-01/128/circle-flat-general-51851bd79-1024.png" alt="" /> */}
        </div>
        <div className="col-6"> 
        {/* <button className='btn btn-outline-light mt-3'>Reach out</button> */}
        </div>
      </div>

        <div className="row">
          <div className="col-12">
            <h1>Muhammed Shameem</h1>
            <h6>Managing Partner</h6>

            <p className='mt-4'>+91 9961234520
            <br />
            adacodesolutions@gmail.com
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="icons col-12 text-center">
          <i className="fa-brands fa-facebook text-light"></i>
          <i className="fa-brands fa-instagram text-light"></i>
          <i className="fa-brands fa-linkedin-in text-light"></i>
          <i className="fa-brands fa-telegram text-light"></i>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
          <a className='btn btn-outline-light w-100 border rounded-5' href="whatsapp://send?text=Hi&phone=+917736972033">Contact me</a>
                   </div>
        </div>
        <hr className='m-5' />
        
      </div>
    </>
  );
}

export default App;
