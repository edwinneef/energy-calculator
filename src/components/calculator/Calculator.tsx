import { useState } from "react";
import { Input } from "..";

function Calculator() {
  const [result, setResult] = useState<null | number>(1);

  return (
   <div className="c-calculator">
    <div className="container">
      <form>
        <Input type="number" name="consumption" placeholder="123" label="Expected consumption in KW" />
        <Input type="number" name="consumption" placeholder="123" label="Expected consumption in KW" />
        <Input type="number" name="consumption" placeholder="123" label="Expected consumption in KW" />
      </form>
      { result && <div className="calculator__result">Result: { result }</div> }
    </div>
   </div>
  )
}

export default Calculator;