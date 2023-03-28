import { useRef } from 'react';

function CarDetails({ initialData }) {
  const formRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      model: formData.get('model'),
      year: formData.get('year'),
      color: formData.get('color'),
    };
    console.log(data);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label>
        Model:
        <input name="model" type="text" defaultValue={initialData.model} />
      </label>
      <label>
        Year:
        <input name="year" type="number" defaultValue={initialData.year} />
      </label>
      <label>
        Color:
        <input name="color" type="text" defaultValue={initialData.color} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
