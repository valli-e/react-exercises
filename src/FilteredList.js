import { useMemo } from 'react';

function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter(item => item.age > 18);
  }, [list]);

  return (
    <div>
      {filteredList.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.age}</span>
        </div>
      ))}
    </div>
  );
}
