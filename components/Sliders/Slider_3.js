export default function Slider_1(props) {
  return (
    <div className="slider impressa">
      <input type="radio" name="slider-3" id="slide1-3" defaultChecked></input>
      <input type="radio" name="slider-3" id="slide2-3"></input>
      <input type="radio" name="slider-3" id="slide3-3"></input>
      <input type="radio" name="slider-3" id="slide4-3"></input>

      <div className="slides">
        <div className="overflow">
          <div className="inner">

            <div className="slide slide_1"></div>

            <div className="slide slide_2"></div>

            <div className="slide slide_3"></div>

            <div className="slide slide_4"> </div>

          </div>
        </div>
      </div>

      <div className="controls">
        <label htmlFor="slide1-3"></label>
        <label htmlFor="slide2-3"></label>
        <label htmlFor="slide3-3"></label>
        <label htmlFor="slide4-3"></label>
      </div>

      <div className="bullets">
        <label htmlFor="slide1-3"></label>
        <label htmlFor="slide2-3"></label>
        <label htmlFor="slide3-3"></label>
        <label htmlFor="slide4-3"></label>
      </div>

    </div>
  )
}