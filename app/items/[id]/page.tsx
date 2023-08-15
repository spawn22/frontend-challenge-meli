import Image from "next/image";
import api from "@/app/api/api";
async function ItemsDetails({ params: { id } }: { params: { id: string } }) {
  const item = await api.item.fetch(id);
  return (
    <section className="max-w-5xl flex flex-col mx-auto">
      <article className="flex justify-around   mt-5 mb-6 flex-wrap">
        <Image
          src={item.thumbnail}
          alt={item.title}
          width={100}
          height={100}
          className="w-[30%]"
        />
        <div className="flex flex-col gap-6 ">
          <p className="text-2xl font-bold text-amber-400">{item.title}</p>
          <p className="text-xl font-bold">
            {Number(item.price).toLocaleString("es-AR", {
              style: "currency",
              currency: item.currency_id,
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <hr />
          <button className="bg-amber-400 text-white font-bold p-2 rounded-md">
            Agregar al carrito
          </button>
        </div>
      </article>
      <hr />
      <div className="flex flex-col gap-6  mt-5">
        <h1 className="text-2xl font-bold text-slate-50">
          Descripcion del Producto
        </h1>
        <p className="text-sm text-slate-300 font-semibold">
          {item.description}
        </p>
      </div>
    </section>
  );
}

export default ItemsDetails;
