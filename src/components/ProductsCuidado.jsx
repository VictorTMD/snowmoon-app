export default function ProductsCuidado({ products }) {
  return (
    <div className='flex flex-wrap gap-14 md:gap-32 md:mx-14  justify-center py-8 md:py-14 h-full '>
      {products.map((product) => (
        <div className='book bg-color-cards' key={product.id}>
          <div
            className='cover'
            style={{
              backgroundImage: `linear-gradient(
                  0deg,
                  rgba(55, 8, 118, 0.304) 30%,
                  rgba(255, 255, 255, 0.323) 100%
                ),
                url(${product.image})`,
            }}
          >
            <p className=' text-text-color md:text-3xl text-2xl pb-48'>
              {product.title}
            </p>
          </div>
          <p className='text-left pl-7 '>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
