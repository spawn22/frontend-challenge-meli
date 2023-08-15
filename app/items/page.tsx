import Image from "next/image";
import Link from "next/link";
import api from "../api/api";
async function ItemsPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { results } = await api.item.search(searchParams.search);

  return (
    <section>
      <article className="grid gap-4">
        {results.map((item) => (
          <Link key={item.id} className="flex gap-4" href={`/items/${item.id}`}>
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={100}
              height={100}
            />
            <div>
              <p className="text-xl font-bold">
                {Number(item.price).toLocaleString("es-AR", {
                  style: "currency",
                  currency: item.currency_id,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <p>{item.title}</p>
            </div>
            <span className="ml-auto text-sm opacity-50 capitalize mr-2">
              {item.seller_address.city.name.toLowerCase()}
            </span>
          </Link>
        ))}
      </article>
    </section>
  );
}

export default ItemsPage;
