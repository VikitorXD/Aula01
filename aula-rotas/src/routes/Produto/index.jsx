import { Link } from 'react-router-dom'
import { listaProdutos } from '../../componentes/listaPrudutos'

export default function Produto(){

    return(
        <main>
            <h1>Produtos</h1>
            {listaProdutos.map(prod =>(
                <div key={prod.id}>
                    <Link to={`/produto/editar/${prod.id}`}>
                        Editar o Produto: {prod.id} {prod.nome} R${prod.preco}
                    </Link>
                </div>
            ))}
        </main>
    )
}