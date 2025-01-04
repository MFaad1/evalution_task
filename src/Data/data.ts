import * as Yup from 'yup';
import { Product, Category } from 'types/interfaces';

export const inputFields = [
  { name: 'name', type: 'text' },
  { name: 'description', type: 'text' },
  { name: 'price', type: 'number' },
  { name: 'discountPrice', type: 'number' },
];
export const withoutVariation = [
  { name: 'totalStockQuantity', type: 'number' },
];

export const Variation = [
  { name: 'variant', type: 'text' },
  { name: 'quantity', type: 'number' },
];

export const CategorinputFields = [{ name: 'name', type: 'text' }];

export const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  price: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
});

export const loginValidationSchema = Yup.object({
  name: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export const categoryValidationSchema = Yup.object({
  name: Yup.string().required('Required'),
});

export const initialValues: Product = {
  name: '',
  description: '',
  price: '',
  colors: [],
  totalStockQuantity: 0,
  variantStockQuantities: [],
  modelDetails: [],
  spacification: [],
  discountPrice: '',
  category: '',
};

export const categoryInitialValues: Category = {
  name: '',
};

export const loginInitialValue = {
  name: '',
  password: '',
};

export const generateSlug = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};





export const SEO_products = [
  {
    name: "iceberg-small-suction-cup",
    metaTitle: "Iceberg small suction cups, Unbreakable drinking glasses | ArtiArt",
    metaDescription: "Artiart's Unbreakable, Transparent Drinking Glasses. Buy Iceberg No Fall Party Mug, Small (280 ml) online on artiart.ae at the best prices.",
Script:
{
  "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "ICEBERG SMALL – SUCTION CUP",
  "image": [
  "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717486768%2F2guysProducts%2Frmokvtvpzx1ywztl98jy.jpg&w=3840&q=75",
  "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717486801%2F2guysProducts%2Fdmtdnhpjgi4ixhxahi9y.jpg&w=3840&q=75",
  "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717486811%2F2guysProducts%2Fvz9zkwhv0xdargi7fxhz.jpg&w=3840&q=75",
  "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717486823%2F2guysProducts%2Fxpigeoh6xm5njvwk6kcu.jpg&w=3840&q=75"
  ],
  "description": "Artiart's Unbreakable, Transparent Drinking Glasses. Buy Iceberg No Fall Party Mug, Small (280 ml) online on artiart.ae at the best prices.",
  "brand": {
  "@type": "Brand",
  "name": "ArtiArt"
  },
  "category": "Party Glasses",
  "offers": {
  "@type": "Offer",
  "priceCurrency": "AED",
  "price": "39",
  "availability": "https://schema.org/InStock"
  },
  "material": "Plastic",
  "color": ["light grey", "dark grey", "green", "pink"],
  "size": "280ml",
  "additionalProperty": [
  {
  "@type": "PropertyValue",
  "name": "Attributes",
  "value": "Unbreakable, suction technology"
  }
  ],
  "aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5",
  "bestRating": "5",
  "worstRating": "4",
  "ratingCount": "15"
  }
  }
  
    
  },
  {
    name: "iceberg-big-suction-cup",
    metaTitle: "Iceberg Suction Cup, Unbreakable, Party Mug | ArtiArt",
    metaDescription: "Buy ARTIART Unbreakable Tritan Transparent Plastic Iceberg No Fall Party Mug, Big (430 ml) online on artiart.ae at the best prices.",
    Script:{ 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "ICEBERG BIG - SUCTION CUP", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715267046%2F2guysProducts%2Fw1qyngaybzswhdxot6cv.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717487689%2F2guysProducts%2Fzzo6uzy9pqd7otf7zhlt.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717487676%2F2guysProducts%2Fcicns524cqdplflvt48h.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717487699%2F2guysProducts%2Feuq5xeajmzwh77jffu0k.jpg&w=3840&q=75" 
      ], 
      "description": "Buy ARTIART Unbreakable Tritan Transparent Plastic Iceberg No Fall Party Mug, Big (430 ml) online on artiart.ae at the best prices.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75" 
      }, 
      "category": "Party Glasses", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "49", 
      "availability": "https://schema.org/InStock", 
      "url": "https://artiart.ae/product/iceberg-big-suction-cup" 
      }, 
      "material": "Plastic", 
      "color": ["light grey", "dark grey", "green", "pink"], 
      "size": "430ml", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Unbreakable, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "22" 
      } 
      } 
      
  },
  {
    name: "idea-cafe-suction-bottle",
    metaTitle: "Spill-Proof coffee mug, Idea Cafe Travel cup | ArtiArt",
    metaDescription: "Shop the spill-proof coffee cup! Our 340ml travel mug features patented technology to keep drinks hot or cold on the go."
    ,
 Script:{ 
  "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "IDEA CAFE SUCTION BOTTLE", 
  "image": [ 
  "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715267694%2F2guysProducts%2Fhvj2d03rzrysvjn2oglh.jpg&w=3840&q=75", 
  "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715267692%2F2guysProducts%2Fqfxu2jqz5zyydi8d2zug.jpg&w=3840&q=75", 
  "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715267694%2F2guysProducts%2Fycmaq9kv3qgytdhrskt2.jpg&w=3840&q=75", 
  "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715267693%2F2guysProducts%2Fvwd3mjog5mkskbvuxeyx.jpg&w=3840&q=75", 
  "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1718352852%2F2guysProducts%2Fszcy3wc94dqfh2jnpfs6.png&w=3840&q=75", 
  "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1718352957%2F2guysProducts%2Fa8dssnolrnau9we48fgd.png&w=3840&q=75" 
  ], 
  "description": "Shop the spill-proof coffee cup! Our 340ml travel mug features patented technology to keep drinks hot or cold on the go.", 
  "brand": { 
  "@type": "Brand", 
  "name": "ArtiArt", 
  "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75" 
  }, 
  "category": "Suction Bottles", 
  "offers": { 
  "@type": "Offer", 
  "priceCurrency": "AED", 
  "price": "59", 
  "url": "https://artiart.ae/product/idea-cafe-suction-bottle" 
  }, 
  "material": "PP. TPE. Silicone", 
  "color": ["Gray", "Dark Blue", "Pink", "Sky Blue", "Black", "White"], 
  "size": "340ml", 
  "additionalProperty": [ 
  { 
  "@type": "PropertyValue", 
  "name": "Attributes", 
  "value": "Spill proof, suction technology" 
  } 
  ], 
  "aggregateRating": { 
  "@type": "AggregateRating", 
  "ratingValue": "5", 
  "bestRating": "5", 
  "worstRating": "4", 
  "ratingCount": "20" 
  } 
  } 
  

  },
  {
    name: "idea-cafe-suction-bottle-dubai-edition",
    metaTitle: "Spill-Proof suction bottle, Idea Cafe Travel cup | ArtiArt",
    metaDescription: "Experience the best Dubai Edition Artiart coffee cup! Shop our innovative 340ml spill-proof suction bottle, featuring Idea Café Travel's patented technology."
,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "IDEA CAFE SUCTION BOTTLE - Dubai Edition", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1723730929%2F2guysProducts%2Fzue63wt32tdhm8vamwfi.png&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1723730912%2F2guysProducts%2Fhoajoplaj97gufl6vpqb.png&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1723810872%2F2guysProducts%2Fczcbihvdoyuwnvotgh7y.jpg&w=3840&q=75" 
      ], 
      "description": "Experience the best Dubai Edition Artiart coffee cup! Shop our innovative 340ml spill-proof suction bottle, featuring Idea Café Travel's patented technology.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75" 
      }, 
      "category": "Suction Bottles", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "59", 
      "url": "https://artiart.ae/product/idea-cafe-suction-bottle-dubai-edition" 
      }, 
      "material": "PP. TPE. Silicone", 
      "color": ["White", "Pink", "SkyBlue"], 
      "size": "340ml", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "25" 
      } 
      } 
      
  },
  {
    name: "idea-cafe-suction-bottle-abu-dhabi-edition",
    metaTitle: "Spill-Proof suction bottle, Idea Cafe Travel cup | ArtiArt",
    metaDescription: "Experience the best Abu Dhabi Edition Artiart coffee cup! Shop our innovative 340ml spill-proof suction bottle, featuring Idea Café Travel's patented technology."
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "IDEA CAFE SUCTION BOTTLE - Abu Dhabi Edition", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1723804826%2F2guysProducts%2Fnc1gkdxg534v0iisbso6.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1723804935%2F2guysProducts%2Fghofz8vzvk74lx1zoomv.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1723804985%2F2guysProducts%2Fuwohusl5907gqavqnq09.jpg&w=3840&q=75" 
      ], 
      "description": "Experience the best Abu Dhabi Edition Artiart coffee cup! Shop our innovative 340ml spill-proof suction bottle, featuring Idea Café Travel's patented technology.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75" 
      }, 
      "category": "Suction Bottles", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "59", 
      "url": "https://artiart.ae/product/idea-cafe-suction-bottle-abu-dhabi-edition" 
      }, 
      "material": "PP. TPE. Silicone", 
      "color": ["White", "Pink", "SkyBlue"], 
      "size": "340ml", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "15" 
      } 
      } 
      
  },
  {
    name: "deer-suction-bottle",
    metaTitle: "Deer Suction Bottle, Spill-proof water bottle | ArtiArt",
    metaDescription: "Stay hydrated with the Deer Suction Bottle, a spill-proof water bottle designed for effortless sipping. Shop Now and Enjoy leak free commute."
    ,
    Script:
    {
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "DEER SUCTION BOTTLE",
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715253514%2F2guysProducts%2Fsnf8ydk5n6hnvyd3hihf.jpg&w=3840&q=75",
      "description": "Stay hydrated with the Deer Suction Bottle, a spill-proof water bottle designed for effortless sipping. Shop Now and Enjoy leak free commute.",
      "brand": {
      "@type": "Brand",
      "name": "ArtiArt"
      },
      "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "4",
      "ratingCount": "20"
      }
      }
      
  },
  {
    name: "artist-pp-suction-bottle",
    metaTitle: "Artist Suction Bottle, Thermal Stainless Steel, Travel Water Bottle | ArtiArt",
    metaDescription: "Take your favourite drinks on the go with our Artist Suction Bottle! Durable thermal stainless steel keeps drinks hot or cold for hours."
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "ARTIST PP SUCTION BOTTLE", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715236681%2F2guysProducts%2Fjted5hizwiewydfiqwbx.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715236693%2F2guysProducts%2Fqfdsqkadypj6lnzusbgs.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715236697%2F2guysProducts%2Fmcrytnutkdkv4nn663ac.jpg&w=3840&q=75" 
      ], 
      "description": "Take your favourite drinks on the go with our Artist Suction Bottle! Durable thermal stainless steel keeps drinks hot or cold for hours.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75" 
      }, 
      "category": "Suction Bottles", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "89", 
      "url": "https://artiart.ae/product/artist-pp-suction-bottle" 
      }, 
      "material": "PP. ABS. LDPE. Silicone", 
      "color": ["Pink", "Grey", "Deep Sky Blue"], 
      "size": "410ml", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "20" 
      } 
      } 
      
      
  },
  {
    name: "doctor-suction-mug",
    metaTitle: "Spill Proof Coffee Mug, Suction Mug with Flip-Up Lid | ArtiArt",
    metaDescription: "Take your coffee anywhere with confidence! Our coffee mug features a spill-proof suction base and flip-up lid so you can sip without spills."
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "IDEA CAFE SUCTION BOTTLE - Abu Dhabi Edition", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1723804826%2F2guysProducts%2Fnc1gkdxg534v0iisbso6.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1723804935%2F2guysProducts%2Fghofz8vzvk74lx1zoomv.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1723804985%2F2guysProducts%2Fuwohusl5907gqavqnq09.jpg&w=3840&q=75" 
      ], 
      "description": "Experience the best Abu Dhabi Edition Artiart coffee cup! Shop our innovative 340ml spill-proof suction bottle, featuring Idea Café Travel's patented technology.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75" 
      }, 
      "category": "Suction Bottles", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "59", 
      "url": "https://artiart.ae/product/idea-cafe-suction-bottle-abu-dhabi-edition" 
      }, 
      "material": "PP. TPE. Silicone", 
      "color": ["White", "Pink", "SkyBlue"], 
      "size": "340ml", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "15" 
      } 
      } 
      
      
  },
  {
    name: "seagull-suction-bottle",
    metaTitle: "Seagull Spill Proof Travel Bottle for hot and cold water | ArtiArt",
    metaDescription: "Shop our Seagull Spill Proof Travel Bottle and stay hydrated! Perfect for hot coffee or cold water."
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "SEAGULL SUCTION BOTTLE", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715268934%2F2guysProducts%2Ftql9m46btz7vpjhzysel.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715268933%2F2guysProducts%2Fumrobs3zmiseatloe027.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715268934%2F2guysProducts%2Fgrkr1kkmqahrrrfu9aoh.jpg&w=3840&q=75" 
      ], 
      "description": "Shop our Seagull Spill Proof Travel Bottle and stay hydrated! Perfect for hot coffee or cold water.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75" 
      }, 
      "category": "Suction Bottles", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "89", 
      "url": "https://artiart.ae/product/seagull-suction-bottle" 
      }, 
      "material": "PP. ABS . AS . Silicon. TPE", 
      "color": ["Black", "Blue", "Pink"], 
      "size": "370ml", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "20" 
      } 
      } 
      
  },
  {
    name: "watermelon-seagull-suction-bottle",
    metaTitle: "Watermelon seagull suction bottle, Travel water Bottle | ArtiArt",
    metaDescription: "Buy our Watermelon Suction Bottle, a Seagull Spill Proof travel water bottle perfect for sipping. Shop now and enjoy."
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "WATERMEL SEAGULL SUCTION BOTTLE", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1719841468%2F2guysProducts%2Fk7zn8nrypxzqiykofiam.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1719841493%2F2guysProducts%2Fvoobcltzojqtlfwufjyb.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1719841481%2F2guysProducts%2Fti0w06uikjirly3syiwb.jpg&w=3840&q=75" 
      ], 
      "description": "Buy our Watermelon Suction Bottle, a Seagull Spill Proof travel water bottle perfect for sipping. Shop now and enjoy.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75" 
      }, 
      "category": "Suction Bottles", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "89", 
      "url": "https://artiart.ae/product/watermelon-seagull-suction-bottle" 
      }, 
      "material": "PP. ABS . AS . Silicon. TPE", 
      "color": ["Black", "Blue", "Pink"], 
      "size": "370ml", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "22" 
      } 
      } 
      
      
  },
  {
    name: "antelope-suction-bottle",
    metaTitle: "Antelope spill-proof travel water bottle with Flip-up lid | ArtiArt",
    metaDescription: "Refresh your routine with our Artiart Antelope spill-proof travel water bottle. Durable, leakproof, and easy to use. Shop now and take it with you."
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "ANTELOPE SUCTION BOTTLE", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715236057%2F2guysProducts%2Ft8vgbr3bjehmmkgfob7n.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717488972%2F2guysProducts%2Fsdmyfggqkr0lfnjluwkc.jpg&w=3840&q=75" 
      ], 
      "description": "Refresh your routine with our Artiart Antelope spill-proof travel water bottle. Durable, leakproof, and easy to use. Shop now and take it with you.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75" 
      }, 
      "category": "Suction Bottles", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "99", 
      "url": "https://artiart.ae/product/antelope-suction-bottle" 
      }, 
      "material": "Steel Core with Plastic Exterior", 
      "color": ["Off white", "Grey"], 
      "size": "370ml", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "20" 
      } 
      } 
      
      
  },
  {
    name: "dumbo-suction-mug",
    metaTitle: "Dumbo Spill Proof Travel Mug, Insulated Coffee Mug | ArtiArt",
    metaDescription: "Our Dumbo Spill Proof Travel Mug is the perfect companion for your coffee routine. Insulated to keep your drinks hot or cold. Buy now and sip with joy!"
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "DUMBO SUCTION MUG", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717480687%2F2guysProducts%2Fskroh7uzu315ngdnxy4u.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717480792%2F2guysProducts%2Fqy14jip0b9yrsrlbklav.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717480798%2F2guysProducts%2Fjlajm7ftqdgm3pkuzngq.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717480766%2F2guysProducts%2Fojrewdsujyryvcenpczk.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717480775%2F2guysProducts%2Fwva6xrwsghkrpgdhkzfi.jpg&w=3840&q=75" 
      ], 
      "description": "Our Dumbo Spill Proof Travel Mug is the perfect companion for your coffee routine. Insulated to keep your drinks hot or cold. Buy now and sip with joy!", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75" 
      }, 
      "category": "Suction Mugs", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "99", 
      "url": "https://artiart.ae/product/dumbo-suction-mug" 
      }, 
      "material": "PP, ABS, 304 Stainless Steel, Silicon", 
      "color": ["White", "Black", "Yellow", "Blue", "Pink"], 
      "size": "450ml", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "25" 
      } 
      } 
      
  },
  {
    name: "elephant-suction-mug",
    metaTitle: "Elephant Insulated Coffee Mug with Flip-up Lid | ArtiArt",
    metaDescription: "From dawn till dusk, our Elephant Spill Proof Travel Mug keeps your drinks hot or cold and your hands free from spills. Shop now and start your day off right."
  
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "ELEPHANT SUCTION MUG", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715258871%2F2guysProducts%2Fxjeggcnwxvmbs3ygmyzj.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715258872%2F2guysProducts%2Fduvvn5ac8jycvvham2ge.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717481046%2F2guysProducts%2Fnab9thscwgn3kbcfm1af.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717481084%2F2guysProducts%2Fxdqfc2r3m6gun9krwg1m.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717481069%2F2guysProducts%2Fqd0tjzrqr0o0gojgrzm1.jpg&w=3840&q=75" 
      ], 
      "description": "From dawn till dusk, our Elephant Spill Proof Travel Mug keeps your drinks hot or cold and your hands free from spills. Shop now and start your day off right.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75" 
      }, 
      "category": "Suction Mugs", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "99", 
      "url": "https://artiart.ae/product/elephant-suction-mug" 
      }, 
      "material": "PP, ABS, 304 Stainless Steel, Silicon", 
      "color": ["Grey", "Black", "Green", "Yellow", "Pink"], 
      "size": "400ml", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "30" 
      } 
      } 
       
      
  },
  {
    name: "grace-suction-mug",
    metaTitle: "Grace Spill Proof Suction Mug for Tea and Coffee | ArtiArt",
    metaDescription: "Wherever your day takes you, our Grace Spill Proof Travel Suction Mug keeps your tea or coffee hot and secure. Buy now and enjoy every sip."
  
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "GRACE SUCTION MUG", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717481145%2F2guysProducts%2Fihpcaiax7jdfezlys2ob.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717481167%2F2guysProducts%2Fqs5yjzjwng85ddgl5wfb.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717481176%2F2guysProducts%2Fj3ze1awspw5whx4jgsps.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717481265%2F2guysProducts%2Fc0qx2ikbyqtogjvfgaax.jpg&w=3840&q=75" 
      ], 
      "description": "Wherever your day takes you, our Grace Spill Proof Travel Suction Mug keeps your tea or coffee hot and secure. Buy now and enjoy every sip.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75" 
      }, 
      "category": "Suction Mugs", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "99", 
      "url": "https://artiart.ae/product/grace-suction-mug" 
      }, 
      "material": "PP, ABS, 304 Stainless Steel, Silicon", 
      "color": ["White", "Black", "Red", "Green"], 
      "size": "470ml", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "25" 
      } 
      } 
      
      
  }
    ,
  {
    name: "ostrich-suction-bottle",
    metaTitle: "Ostrich Spill Proof Travel Suction Bottle | ArtiArt",
    metaDescription: "Refresh your routine with our Artiart Ostrich spill-proof travel bottle. Durable, leakproof, and easy to use. Shop now and take it with you."
 
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "OSTRICH SUCTION BOTTLE", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715268239%2F2guysProducts%2Fb9k71cluzarxlh61mbqc.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717481367%2F2guysProducts%2Fi8pxrdswavmjt3agjk3w.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717481397%2F2guysProducts%2Fy9w5ghy4slaivfkochgk.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717481385%2F2guysProducts%2Fgip1j3wfqlil3tvcwlbl.jpg&w=3840&q=75" 
      ], 
      "description": "Refresh your routine with our Artiart Ostrich spill-proof travel bottle. Durable, leakproof, and easy to use. Shop now and take it with you.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "category": "Suction Bottles", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "99" 
      }, 
      "material": "PP, ABS, 304 Stainless Steel, Silicon", 
      "color": ["Off White", "Gray", "Green", "Red"], 
      "size": "400ml", 
      "url": "https://artiart.ae/product/ostrich-suction-bottle", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75" 
      } 
      

       },
  {
    name: "vitality-sky-suction-mug",
    metaTitle: "Vitality Sky Suction Coffee mug with Airtight lid | ArtiArt",
    metaDescription: "Begin your day with a perfect coffee mug. Our Vitality Sky Suction Coffee Mug keeps your coffee safe. Shop now!"
  
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "VITALITY SKY SUCTION MUG", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715270498%2F2guysProducts%2Fieamhuj8bhlkti3gf5ri.jpg&w=3840&q=75" 
      ], 
      "description": "Begin your day with a perfect coffee mug. Our Vitality Sky Suction Coffee Mug keeps your coffee safe. Shop now!", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "category": "Suction Mugs", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "99" 
      }, 
      "material": "PP, ABS, Ceramic, Silicon, TPR", 
      "color": "Grey", 
      "size": "260ml", 
      "url": "https://artiart.ae/product/vitality-sky-suction-mug", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75" 
      } 
      
  
  
  },
  {
    name: "zebra-suction-mug",
    metaTitle: "Zebra Travel Mug, Coffee Mug with Flip Cover Lid | ArtiArt",
    metaDescription: "Take your coffee ritual to new places with Zebra Travel Mug, designed with a practical flip cover lid and durable design that's perfect for hot or cold drinks."
 
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "ZEBRA SUCTION MUG", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715270967%2F2guysProducts%2Fircpufcagxt32qgcal0v.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715270968%2F2guysProducts%2Fvrhyhqikildrolpsgkqy.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715270969%2F2guysProducts%2Fqg37qxdjw9t8kxe07c9g.jpg&w=3840&q=75" 
      ], 
      "description": "Take your coffee ritual to new places with Zebra Travel Mug, designed with a practical flip cover lid and durable design that's perfect for hot or cold drinks.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "category": "Suction Mugs", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "99" 
      }, 
      "material": "PP, TPR, Silicon", 
      "color": "Off White, Grey, Green", 
      "size": "350ml", 
      "url": "https://artiart.ae/product/zebra-suction-mug", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "15" 
      } 
      } 
       
       },
  {
    name: "artist-steel-suction-bottle",
    metaTitle: "Artist Suction Bottle, Thermal Stainless Steel, Travel Water Bottle | ArtiArt",
    metaDescription: "Take your favourite drinks on the go with our Artist Suction Bottle! Durable thermal stainless steel keeps drinks hot or cold for hours."
  
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "ARTIST STEEL SUCTION BOTTLE", 
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715236969%2F2guysProducts%2Ffrzpvcegioxd4qqbogxv.jpg&w=3840&q=75", 
      "description": "Take your favourite drinks on the go with our Artist Suction Bottle! Durable thermal stainless steel keeps drinks hot or cold for hours.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "category": "Suction Bottles", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "119" 
      }, 
      "material": "PP, ABS, LDPE, Silicone", 
      "color": "Steel Black", 
      "size": "450ml", 
      "url": "https://artiart.ae/product/artist-steel-suction-bottle", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "22" 
      } 
      } 
      
      
    
    },
  {
    name: "party-suction-cup-set-of-6-pcs",
    metaTitle: "Party Suction Cup, Unbreakable Set of 6 cups | ArtiArt",
    metaDescription: "Get the party started with our unbreakable Party Suction Cup set of 6! Durable, fun, and perfect for any celebration. Buy now and enjoy."
  
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "PARTY SUCTION CUP | Set of 6 Pcs", 
      "image": "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715268491%2F2guysProducts%2Frukioe2pua1hla9dta2k.jpg&w=3840&q=75", 
      "description": "Get the party started with our unbreakable Party Suction Cup set of 6! Durable, fun, and perfect for any celebration. Buy now and enjoy.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "category": "Party Glasses", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "119" 
      }, 
      "material": "Plastic", 
      "color": "Multicolors", 
      "size": "290ml", 
      "url": "https://artiart.ae/product/party-suction-cup-set-of-6-pcs", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Unbreakable, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "25" 
      } 
      } 
      
      },
  {
    name: "butterfly-thermal-suction-bottle",
    metaTitle: "Butterfly Thermal Water Bottle, Vacuum Flask Travel Bottle | ArtiArt",
    metaDescription: "Enjoy perfect temperatures every time with our Butterfly Thermal Water Bottle, a premium vacuum flask travel bottle for hot and cold drinks. Shop Now!"
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "BUTTERFLY THERMAL SUCTION BOTTLE", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715246604%2F2guysProducts%2Fpo33q6pqzxsqaxbzj8vq.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717503032%2F2guysProducts%2Fxyysg0klnuc6n8yau417.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717503046%2F2guysProducts%2Fkgmtbsvuuivqr8iz0qyl.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717503053%2F2guysProducts%2Ffwqqejas33pzy6ntym7w.jpg&w=3840&q=75" 
      ], 
      "description": "Enjoy perfect temperatures every time with our Butterfly Thermal Water Bottle, a premium vacuum flask travel bottle for hot and cold drinks. Shop Now!", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "category": "Suction Bottles", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "129" 
      }, 
      "material": "Stainless Steel, Plastic", 
      "color": ["White", "Black", "Yellow", "Green"], 
      "size": "400ml", 
      "url": "https://artiart.ae/product/butterfly-thermal-suction-bottle", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "30" 
      } 
      } 
       
      
  },
  {
    name: "whale-suction-mug",
    metaTitle: "Whale Travel Mug, Coffee mug with Flip Cover Lid | ArtiArt",
    metaDescription: "Take your coffee ritual to new places with Whale Travel Mug, designed with a practical flip cover lid and durable design that's perfect for hot or cold drinks."
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "WHALE SUCTION MUG", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715270756%2F2guysProducts%2Fn6zoa7u0lbub7agyhe3z.jpg&w=3840&q=75" 
      ], 
      "description": "Take your coffee ritual to new places with Whale Travel Mug, designed with a practical flip cover lid and durable design that's perfect for hot or cold drinks.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "category": "Suction Mugs", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "129" 
      }, 
      "material": "PP, ABS, 304 Stainless Steel, Silicon", 
      "color": "White", 
      "size": "380ml", 
      "url": "https://artiart.ae/product/whale-suction-mug", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "20" 
      } 
      } 
      
      
  },
  {
    name: "cloud-thermal-suction-bottle",
    metaTitle: "Cloud Thermal Water Bottle, Vacuum Flask Travel Bottle | ArtiArt",
    metaDescription: "Perfect temperatures, every time, anywhere! Get your Cloud Thermal Water Bottle now and start sipping in comfort."
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "CLOUD THERMAL SUCTION BOTTLE", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715247206%2F2guysProducts%2Fyqjh9pmqvdz8s5k2dki1.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717503444%2F2guysProducts%2Fzqfhsvs67xjehyyntn72.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715247208%2F2guysProducts%2Fpruagur4o6yqo9j8wf1w.jpg&w=3840&q=75", 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1717503268%2F2guysProducts%2Frddvme9gmuntylvrgufk.jpg&w=3840&q=75" 
      ], 
      "description": "Perfect temperatures, every time, anywhere! Get your Cloud Thermal Water Bottle now and start sipping in comfort.", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "category": "Suction Bottles", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "149" 
      }, 
      "material": "PP, ABS, 304 Stainless Steel, Silicon", 
      "color": ["Pink", "White", "Black", "Light Green"], 
      "size": "400ml", 
      "url": "https://artiart.ae/product/cloud-thermal-suction-bottle", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "20" 
      } 
      }
      
  },
  {
    name: "guardian-thermal-suction-bottle",
    metaTitle: "Guardian Thermal Water Bottle, Vacuum Flask Travel Bottle | ArtiArt",
    metaDescription: "Sip happy, anywhere! Guardian Thermal Water Bottle - your perfect travel companion for hot and cold drinks. Shop Now!"
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "GUARDIAN THERMAL SUCTION BOTTLE", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715266846%2F2guysProducts%2Fnzlock9zt5qcwuv3mnoo.jpg&w=3840&q=75" 
      ], 
      "description": "Sip happy, anywhere! Guardian Thermal Water Bottle - your perfect travel companion for hot and cold drinks. Shop Now!", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "category": "Suction Bottles", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "149" 
      }, 
      "material": "PP, ABS, 304 Stainless Steel, Silicon, PC", 
      "color": "Blue", 
      "size": "450ml", 
      "url": "https://artiart.ae/product/guardian-thermal-suction-bottle", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "15" 
      } 
      } 
      
      
  },
  {
    name: "vitality-hill-thermal-suction-mug",
    metaTitle: "Vitality Hill thermal Mug, Coffee mug with Flip Cover lid | ArtiArt",
    metaDescription: "Savour the flavour with the Vitality Hill Thermal Mug, a coffee mug with a protective flip-cover lid for on-the-go enjoyment. Shop now and Enjoy!"
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "VITALITY HILL THERMAL SUCTION MUG", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1715269510%2F2guysProducts%2Ftyhrr52kfuq4xlq0e3px.jpg&w=3840&q=75" 
      ], 
      "description": "Savour the flavour with the Vitality Hill Thermal Mug, a coffee mug with a protective flip-cover lid for on-the-go enjoyment. Shop now and Enjoy!", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "category": "Suction Mugs", 
      "offers": { 
      "@type": "Offer", 
      "priceCurrency": "AED", 
      "price": "209" 
      }, 
      "material": "PP, ABS, 304 Stainless Steel, Silicon", 
      "color": "Off white", 
      "size": "380ml", 
      "url": "https://artiart.ae/product/vitality-hill-thermal-suction-mug", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "22" 
      } 
      } 
      
      
  },
  {
    name: "swan-carafe-with-child-lock",
    metaTitle: "Swan Tea Flask, Vaccum Insulated Tea Pot | Artiart",
    metaDescription: "Pour perfection every time with our Swan Tea Flask, a vacuum-insulated teapot that keeps your tea hot and fresh. Buy now and start pouring!"
    ,
    Script:
    { 
      "@context": "https://schema.org/", 
      "@type": "Product", 
      "name": "SWAN CARAFE", 
      "image": [ 
      "https://artiart.ae/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdz7nqwiev%2Fimage%2Fupload%2Fv1720176295%2F2guysProducts%2Fqelssyumnpfm8zpdye2a.webp&w=3840&q=75" 
      ], 
      "description": "Pour perfection every time with our Swan Tea Flask, a vacuum-insulated teapot that keeps your tea hot and fresh. Buy now and start pouring!", 
      "brand": { 
      "@type": "Brand", 
      "name": "ArtiArt" 
      }, 
      "category": "Tea Pots", 
      "offers": { 
      "@type": "Offer", 
      "url": "https://artiart.ae/product/swan-carafe-with-child-lock", 
      "priceCurrency": "AED", 
      "price": "229" 
      }, 
      "material": "PP, POM, 304 Stainless Steel, Silicon", 
      "color": "White", 
      "size": "1500ml", 
      "logo": "https://artiart.ae/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30c92217.jpeg&w=256&q=75", 
      "additionalProperty": [ 
      { 
      "@type": "PropertyValue", 
      "name": "Attributes", 
      "value": "Spill Proof, suction technology" 
      } 
      ], 
      "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "5", 
      "bestRating": "5", 
      "worstRating": "4", 
      "ratingCount": "15" 
      } 
      }
      
  }

];



export const Categories_MetaData = [
  {
    "Category": "suction-bottles",
    "URL": "https://artiart.ae/products/suction-bottles",
    "Meta Title": "Durable Suction Water Bottles - Insulated & Anti-Spill | Artiart",
    "Meta Description": "Artiart offers insulated sports water bottles with suction technology, combining durability and style. Leak-proof and perfect for daily commutes."
  },
  {
    "Category": "suction-mugs",
    "URL": "https://artiart.ae/products/suction-mugs",
    "Meta Title": "Suction Coffee Mugs for Travel, Office & Daily Use | Artiart",
    "Meta Description": "Keep your coffee hot or cold for hours with Artiart's insulated suction mugs. Ideal for travel, work, and daily commutes."
  },
  {
    "Category": "insulated-suction-flasks",
    "URL": "https://artiart.ae/products/insulated-suction-flasks",
    "Meta Title": "Insulated Suction Flasks - Spill-Proof & Leak-Proof | Artiart",
    "Meta Description": "Artiart's insulated suction flasks combine thermal insulation with spill-proof technology. Perfect for coffee, tea, or cold beverages."
  },
  {
    "Category": "party-glasses",
    "URL": "https://artiart.ae/products/party-glasses",
    "Meta Title": "Party Glasses - Drinking Glasses with Suction Bottom | Artiart",
    "Meta Description": "From birthdays to holidays, make every moment count! Artiart's durable drinking glasses with suction button technology keep the party going."
  },
  {
    "Category": "suction-coffee-cups",
    "URL": "https://artiart.ae/products/suction-coffee-cups",
    "Meta Title": "Coffee Suction Cups - Spill-Proof, Suction Coffee Cups | Artiart",
    "Meta Description": "Artiart's coffee suction cups are designed for coffee lovers. These are Spill-proof, durable, and good for sports and travellers."
  },
  {
    "Category": "tea-pots",
    "URL": "https://artiart.ae/products/tea-pots",
    "Meta Title": "Hot Water Flask & Tea Pots | Artiart's Tea Essentials",
    "Meta Description": "Share laughter, share tea. Artiart's hot water and tea flask for special moments with loved ones."
  }
]
