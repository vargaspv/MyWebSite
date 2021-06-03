import { useRouter } from 'next/router';


export default function post() {
    const router = useRouter();
    console.log(router);

    return (
        <p>
            <h2>{router.query.id}</h2>
            <p>Header Post: {router.query.id}</p>
        </p>
    )
}