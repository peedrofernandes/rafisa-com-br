export default function SliderMain({className, children, id}) {
  return (
    <div className={`slider ${className}`}>
      <input type="radio" name={`slider-${id}`} id={`slide1-${id}`} defaultChecked></input>
      <input type="radio" name={`slider-${id}`} id={`slide2-${id}`}></input>
      <input type="radio" name={`slider-${id}`} id={`slide3-${id}`}></input>
      <input type="radio" name={`slider-${id}`} id={`slide4-${id}`}></input>

      {/* <div className="slides">
        <div className="overflow">
          <div className="inner">

            <div className="slide slide_1"></div>

            <div className="slide slide_2"></div>

            <div className="slide slide_3"></div>

            <div className="slide slide_4"> </div>

          </div>
        </div>
      </div> */}

      {children}

      <div className="controls">
        <label htmlFor={`slide1-${id}`}></label>
        <label htmlFor={`slide2-${id}`}></label>
        <label htmlFor={`slide3-${id}`}></label>
        <label htmlFor={`slide4-${id}`}></label>
      </div>

      <div className="bullets">
        <label htmlFor={`slide1-${id}`}></label>
        <label htmlFor={`slide2-${id}`}></label>
        <label htmlFor={`slide3-${id}`}></label>
        <label htmlFor={`slide4-${id}`}></label>
      </div>

    </div>
  )
}