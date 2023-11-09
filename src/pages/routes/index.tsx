import Link from 'next/link'

export default function index(){
    return <>
        <div>
            <h1>pages / 
                rotas / 
                index</h1>
            Read <Link href="routes/id/buscar">this page!</Link>
        </div>
    </>
}