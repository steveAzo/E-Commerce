const products = [
    {
      id: 1,
      name: 'Machined Pen',
      description:
      'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',  
      color: 'Black',
      colors: [
        { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
        { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
        { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
      ],
      price: '$35',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
        id: 2,
        name: 'Machined Pen',
        description:
        'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',    
        color: 'Black',
        colors: [
          { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
          { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
          { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
        ],
        price: '$35',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      },
      {
        id: 3,
        name: 'Organize Basic Set (Walnut)',
        color: 'Black',
        description:
        'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',    
        colors: [
          { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
          { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
          { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
        ],
        price: '$149',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
      },
      {
        id: 4,
        name: 'Organize Pen Holder',
        href: '#',
        description:
        'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',    
        color: 'Black',
        colors: [
          { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
          { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
          { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
        ],
        price: '$15',
        rating: 5,
        reviewCount: 18,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        
      },
      {
        id: 5,
        name: 'Organize Phone Holder',
        color: 'Black',
        href: '#',
        description:
        'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',    
        colors: [
          { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
          { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
          { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
        ],
        price: '$15',
        rating: 4,
        reviewCount: 21,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
        imageAlt: 'TODO',
        
      },
      {
        id: 6,
        name: 'Nomad Tumbler',
        rating: 3.6,
        color: 'Black',
        description:
        'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',    
        colors: [
          { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
          { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
          { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
        ],
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        
      },
      {
        id: 7,
        name: 'Machined Pen',
        rating: 7,
        color: 'Black',
        description:
        'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',    
        colors: [
          { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
          { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
          { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
        ],
        price: '$35',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        
      },
      {
        id: 8,
        name: 'Machined Pen',
        rating: 9,
        color: 'Black',
        description:
        'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',    
        colors: [
          { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
          { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
          { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
        ],
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
        
      },
      {
        id: 9,
        name: 'Nomad Tumbler',
        rating: 4.5,
        color: 'Black',
        description:
        'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',    
        colors: [
          { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
          { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
          { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
        ],
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
       
      },
      {
        id: 10,
        name: 'Nomad Pouch',
        rating: 4.5,
        href: '#',
        description:
        'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',    
        price: '$50',
        colors: [
            { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
            { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
            { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
          ],
        color: 'White and Black',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
        imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
      },
      {
        id: 11,
        name: 'Zip Tote Basket',
        rating: 10,
        href: '#',
        price: '$140',
        description:
        'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',    
        colors: [
            { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
            { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
            { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
          ],
        color: 'Washed Black',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
        imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
      },
      {
        id: 12,
        name: 'Medium Stuff Satchel',
        rating: 7,
        href: '#',
        price: '$220',
        description:
        'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',    
        colors: [
            { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
            { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
            { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
          ],
        color: 'Blue',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
        imageAlt:
          'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
      },
    // More products...
  ]
  

export default products