
const products = [
    {
      id: 1,
      name: 'Machined Pen',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      availableColors: [
        { name: 'Black', colorBg: '#111827' },
        { name: 'Green', colorBg: 'Green' },
        { name: 'Chrome', colorBg: '#E5E7EB' },
      ],
    },
    {
        id: 1,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 1,
        name: 'Organize Basic Set (Walnut)',
        color: 'Black',
        price: '$149',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 1,
        name: 'Organize Pen Holder',
        color: 'Black',
        price: '$15',
        rating: 5,
        reviewCount: 18,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 1,
        name: 'Organize Phone Holder',
        color: 'Black',
        price: '$15',
        rating: 4,
        reviewCount: 21,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
        imageAlt: 'TODO',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 1,
        name: 'Nomad Tumbler',
        color: 'Black',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 1,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Blue', colorBg: 'blue' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 1,
        name: 'Machined Pen',
        color: 'Black',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
        availableColors: [
          { name: 'red', colorBg: 'red' },
          { name: 'Gray', colorBg: 'gray' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 1,
        name: 'Nomad Tumbler',
        color: 'Black',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
    // More products...
  ]
  
  export default function Product() {
    return (
      <div className="bg-white">
        <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>
            <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
  
          <div className="relative mt-8">
            <div className="relative -mb-6 w-full overflow-x-auto pb-6">
              <ul
                role="list"
                className="flex-col  mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-x-0 "
              >
                {products.map((product) => (
                  <li key={product.id} className="inline-flex w-64 flex-col text-center lg:w-auto mb-8">
                    <div className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <div className="mt-6">
                        <p className="text-sm text-gray-500">{product.color}</p>
                        <h3 className="mt-1 font-semibold text-gray-900">
                          <a href={product.href}>
                            <span className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-gray-900">{product.price}</p>
                      </div>
                    </div>
  
                    <h4 className="sr-only">Available colors</h4>
                    <ul role="list" className="mt-auto flex items-center justify-center space-x-3 pt-6">
                      {product.availableColors.map((color) => (
                        <li
                          key={color.name}
                          className="h-4 w-4 rounded-full border border-black border-opacity-10"
                          style={{ backgroundColor: color.colorBg }}
                        >
                          <span className="sr-only">{color.name}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          <div className="mt-12 flex px-4 sm:hidden">
            <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  