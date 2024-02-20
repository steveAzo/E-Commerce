import { useState } from "react"
import ProductDetails from "./ProductDetails"
import products from "./productData"

  export default function Product() {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)

    const handleProductClick = (product) => {
      setSelectedProduct(product)
      setModalOpen(true)
    }



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
            <div className="relative -mb-6 w-full overflow-x-auto pb-6" >
              <ul
                role="list"
                className="flex-col  mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-x-0 "
              >
                {products.map((product) => (
                  <li key={product.id} className="inline-flex w-64 flex-col text-center lg:w-auto mb-8">
                    <div className="group relative" onClick={() => handleProductClick(product)}>
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <div className="mt-6">
                        <h3 className="mt-1 font-semibold text-gray-900">
                          <a href={product.href}>
                            <span className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                        <p className="text-sm text-gray-500">{product.color}</p>
                        <p className="mt-1 text-gray-900">{product.price}</p>
                      </div>
                    </div>
  
                    
                  </li>
                ))}
              </ul>
              
            </div>
            {selectedProduct && (
              <ProductDetails 
                product={selectedProduct}
                open={modalOpen}
                setOpen={setModalOpen}
              />
            )}
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
  