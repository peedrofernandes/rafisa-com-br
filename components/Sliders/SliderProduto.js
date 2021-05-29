export default function SliderProduto({children}) {
  return (
    <div className="slider full">
      <input type="radio" name="slider" id="slide1-5" defaultChecked />
      <input type="radio" name="slider" id="slide2-5"/>
      <input type="radio" name="slider" id="slide3-5"/>
      <input type="radio" name="slider" id="slide4-5"/>

          {children}
          
      <div className="controls full">
        <label htmlFor="slide1-5"></label>
        <label htmlFor="slide2-5"></label>
        <label htmlFor="slide3-5"></label>
        <label htmlFor="slide4-5"></label>
      </div>

      <div className="bullets">
        <label htmlFor="slide1-5"></label>
        <label htmlFor="slide2-5"></label>
        <label htmlFor="slide3-5"></label>
        <label htmlFor="slide4-5"></label>
      </div>

    </div>
  )
}