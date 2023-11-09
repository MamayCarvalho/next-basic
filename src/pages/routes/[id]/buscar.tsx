import Link from 'next/link';
import {useRouter} from 'next/router';


export default function Buscar(){
    const router = useRouter();
    const codigo = router.query.id;
    const nome = router.query.buscar;
    console.log(router)

    return(
        <div>
            <h1>Rotas / id / buscar </h1>
            <h1>Código: {codigo} Nome: {nome}</h1>
            Read <Link href="/routes/">this page!</Link>
        </div>
    )
}