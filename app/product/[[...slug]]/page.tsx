type ProductPageProps = { params: { slug: string[] } };

async function getData() {
    // const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const res = await fetch("http://localhost:3000/api/product", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function ProductPage(props: ProductPageProps) {
    const { params } = await props;
    const products = await getData();

    // if (!slug) {
    //     return <h1>Halaman Product</h1>;
    // }
    return (
        <div className="grid grid-cols-4 mt-5 place-items-center">
            {/* <h1>{params.slug ? "Detail Product Page" : "Product Page"}</h1> */}
            {products.data.length > 0 &&
                products.data.map((product: any) => (

                    <div key={product.id} className="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs my-5">
                        <a href="#">
                            <img className="rounded-base mb-6 object-cover h-96 w-full" src={product.image} alt="product image" />
                        </a>
                        <div>
                            <a href="#">
                                <h5 className="text-xl text-heading font-semibold tracking-tight truncate">{product.title}</h5>
                            </a>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-3xl font-extrabold text-heading">${product.price}</span>
                                <button type="button" className="inline-flex items-center text-white bg-blue-700 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>

                ))}
            {params.slug && (
                <>
                    <h1>Detail Product Page</h1>
                    <h2>Category : {params.slug[0] ?? "-"}</h2>
                    <h2>Gender : {params.slug[1] ?? "-"}</h2>
                    <h2>Size : {params.slug[2] ?? "-"}</h2>
                </>
            )}
        </div>
    );
}