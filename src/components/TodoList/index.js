
import './TodoList.css';

function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmpyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmpySearchResult(props.seachText)}


      {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}

    </section>
    
  );
}

export { TodoList };