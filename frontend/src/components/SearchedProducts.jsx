import { useState } from "react"
import products from "./productData"
import ProductDetails from "./ProductDetails"
import { useCart } from "../contexts/CartContext"


  export default function ProductSearched() {
    const { addToCart } = useCart()

    const [selectedProduct, setSelectedProduct] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)

    const handleProductClick = (product) => {
      setSelectedProduct(product)
      setModalOpen(true)
    }


    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8" >
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group text-sm" >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75" onClick={() => handleProductClick(product)}>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
                <p className="italic text-gray-500">{product.color}</p>
                <p className="mt-2 font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
            {selectedProduct && (
            <ProductDetails 
            product={selectedProduct}
            open={modalOpen}
            setOpen={setModalOpen}
            addToCart={() => {
              addToCart(selectedProduct)
              setModalOpen(false)
            }}
            />)}
          </div>
          
        </div>
      </div>
    )
  }
  