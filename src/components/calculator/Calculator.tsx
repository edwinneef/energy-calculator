import { useState } from "react";
import { Input, DateInput, Select } from "../index.ts";
import { FormStateType, initialFormState, minutesOptionsData, hoursOptionsData } from "../../data/form.ts";
import { calculateCosts, formatResult, getTotalDurationInMinutes } from "../../utils/calculator.ts";

const Calculator : React.FC = () => {
  const [result, setResult] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [formState, setFormState] = useState<FormStateType>(initialFormState);

  const handleChange = (value: Date | string | null, type: 'startDate' | 'duration-minutes' | 'duration-hours' | 'consumption') => {
    setFormState({
      startDate: type === 'startDate' ? value as Date : formState.startDate,
      duration: {
        hours: type === 'duration-hours' ? parseInt(value as string) : formState.duration.hours,
        minutes: type === 'duration-minutes' ? parseInt(value as string) : formState.duration.minutes,
      },
      consumption: type === 'consumption' ? parseInt(value as string) : formState.consumption
    })
  }

  const isFormValid = (formState: FormStateType) => {
    return (
      formState.startDate != null &&
      formState.duration != null &&
      formState.consumption != null &&
      formState.consumption > 0 &&
      getTotalDurationInMinutes(formState.duration) >= 15
    );
  };

  const calculateResult = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (!isFormValid(formState)) {
      setError(true);
      return;
    }

    const { startDate, duration, consumption } = formState;
    const totalMinutes = getTotalDurationInMinutes(duration);

    setResult(calculateCosts(consumption, startDate, totalMinutes));
    setError(false);
  }

  const calculatorClass = result > 0 ? 'c-calculator c-calculator--result' : 'c-calculator';

  return (
    <section className={calculatorClass}>
      <header className="calculator__header">
        <h2>Calculate energy cost</h2>
      </header>
      <div className="calculator__inner">
        <form className="c-form flow" onSubmit={(e) => calculateResult(e)}>
          <DateInput name="start-date" value={formState.startDate} setValue={(e) => handleChange(e, 'startDate')} label="Starting date and time" error={submitted && formState.startDate == undefined} />
          <div className="calculator__row">
            <Select name="duration-hours" value={formState.duration?.hours?.toString()} setValue={(e) => handleChange(e, 'duration-hours')} label="Duration hours" options={hoursOptionsData} error={submitted && !formState.duration} />
            <Select name="duration-minutes" value={formState.duration?.minutes?.toString()} setValue={(e) => handleChange(e, 'duration-minutes')} label="Duration minutes" options={minutesOptionsData} error={submitted && !formState.duration} />
            {submitted && !formState.duration?.hours && !formState.duration?.minutes ? <div className="form-element__error"><span>Duration must be over 15 minutes</span></div> : null}
          </div>
          <Input name="consumption" value={formState.consumption?.toString()} setValue={(e) => handleChange(e, 'consumption')} placeholder="123" label="Expected consumption in KW" error={submitted && (!formState.consumption || formState.consumption == 0)} />
          <div className="calculator__result">
            <div className="calculator__result-inner">
              <span className="calculator__result-title">Result:</span>
              <div className="calculator__result-price">
                <span>€</span>{formatResult(result)}
              </div>
            </div>
            <button className="calculator__button" type="submit">{result > 0 ? 'Re-calculate cost' : 'Calculate cost'}</button>
          </div>
        </form>
        {error ? <div className="calculator__error"><p>Oops! Something went wrong.</p></div> : null}
      </div>
    </section>
  )
}

export default Calculator;