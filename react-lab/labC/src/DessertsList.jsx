function DessertsList(props) {
  const listItems = props.data
    .sort((a,b) => a.calories - b.calories)
    .filter(it => it.calories <= 500)
    .map(it => <li>{it.name} - {it.calories} cal</li>);
  return <ul>{listItems}</ul>;
}

export default DessertsList;
