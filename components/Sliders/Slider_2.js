export default function Slider_1(props) {
  return (
    <div className="slider laminada">
      <input type="radio" name="slider-2" id="slide1-2" defaultChecked></input>
      <input type="radio" name="slider-2" id="slide2-2"></input>
      <input type="radio" name="slider-2" id="slide3-2"></input>
      <input type="radio" name="slider-2" id="slide4-2"></input>

      <div className="slides">
        <div className="overflow">
          <div className="inner">

            <div className="slide slide_1"> </div>

            <div className="slide slide_2"></div>

            <div className="slide slide_3"></div>

            <div className="slide slide_4"></div>

          </div>
        </div>
      </div>

      <div className="controls">
        <label htmlFor="slide1-2"></label>
        <label htmlFor="slide2-2"></label>
        <label htmlFor="slide3-2"></label>
        <label htmlFor="slide4-2"></label>
      </div>

      <div className="bullets">
        <label htmlFor="slide1-2"></label>
        <label htmlFor="slide2-2"></label>
        <label htmlFor="slide3-2"></label>
        <label htmlFor="slide4-2"></label>
      </div>

    </div>
  )
}