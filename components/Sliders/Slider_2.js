export default function Slider_1(props) {
  return (
    <div className="slider">
      <input type="radio" name="slider-2" id="slide1-2" defaultChecked></input>
      <input type="radio" name="slider-2" id="slide2-2"></input>
      <input type="radio" name="slider-2" id="slide3-2"></input>
      <input type="radio" name="slider-2" id="slide4-2"></input>

      <div className="slides">
        <div className="overflow">
          <div className="inner">

            <div className="slide slide_1">
              <div className="slide-content">
                <h2>Slide 1</h2>
                <p>Conteúdo para o slide 1</p>
              </div>
            </div>

            <div className="slide slide_2">
              <div className="slide-content">
                <h2>Slide 2</h2>
                <p>Conteúdo para o slide 2</p>
              </div>
            </div>

            <div className="slide slide_3">
              <div className="slide-content">
                <h2>Slide 3</h2>
                <p>Conteúdo para o slide 3</p>
              </div>
            </div>

            <div className="slide slide_4">
              <div className="slide-content">
                <h2>Slide 4</h2>
                <p>Conteúdo para o slide 4</p>
              </div>
            </div>

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