import '../App.css';

function header({web, setWeb}, a) {
  const salvar = (event) => {
    event.preventDefault()
    setWeb(event.target.value)
  }
  return (
   <header>
    <form onChange={ salvar }>
      <select  list='market' name='market' defaultValue={ web }>
      <optgroup  id='market' label='Ecolha uma opção' >
        <option value='Mercado Livre / BuscaPé'>Mercado Livre / BuscaPé</option>
        <option value='Mercado Livre'>Mercado Livre</option>
        <option value='BuscaPé'>BuscaPé</option>
      </optgroup>
      </select>
    </form>
   </header>
  );
}

export default header;
