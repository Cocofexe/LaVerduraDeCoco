import {GET_ALL_PRODUCTS, ADD_TO_CART, GET_CART, CHANGE_QUANTITY, DELETE_CART, DELETE_PRODUCT, ID_PRODUCT, PAY_PRODUCTS, FILTER_PRODUCT} from '../app/actions.js'

const initialState={
    products:[
        {
          id:1,
          name:'Strawberry',
          img:'https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/strawberry.jpg',
          description:'A strawberry is both a low-growing, flowering plant and also the name of the fruit that it produces. Strawberries are soft, sweet, bright red berries.',
          stock:10,
          price:3,
          category:'Fruits',
          quantity:0
        },
        {
          id:2,
          name:'Banana',
          img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/220px-Bananas_white_background_DS.jpg',
          description:'A banana is an elongated, edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.',
          stock:30,
          price:5,
          category:'Fruits',
          quantity:0
        },
        {
          id:3,
          name:'Corn',
          img:'https://s3-us-west-2.amazonaws.com/melingoimages/Images/20413.jpg',
          description:'Maize (/meɪz/ MAYZ; Zea mays subsp. mays, from Spanish: maíz after Taino: mahiz), also known as corn (North American and Australian English), is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago.',
          stock:15,
          price:10,
          category:'Vegetables',
          quantity:0
        },
        {
          id:4,
          name:'Kale',
          img:'https://lh3.googleusercontent.com/proxy/Hwokpf-IlVanGMiyHRA188n1VlUG_aOszHT-gMPSPkGuHJiX1bBlLj6-GvPDQSl0y9TOEZdY-sDVxi7JTVagfBKwo3jBvUuTNnvbZKvz_sHm8LzDUDL1MqMyFsf4PC24pG760C4-0kyv_hE9cTKUCx5rwDs',
          description:'Kale (/keɪl/), or leaf cabbage, belongs to a group of cabbage (Brassica oleracea) cultivars grown for their edible leaves, although some are used as ornamentals. ',
          stock:0,
          price:20,
          category:'Vegetables',
          quantity:0
        }
        ],
    cart:JSON.parse(localStorage.getItem('cart') || '[]'),
    productId:{},
    productsFiltered:[]
  }
  const rootReducer = (state = initialState, action) => {
    if (action.type === GET_ALL_PRODUCTS) {
        return {
            ...state,
            products:action.payload
        }
    }
    if (action.type === ADD_TO_CART) {
        return {
            ...state,
            cart: action.payload,
        };
    };
    if (action.type === GET_CART) {
        return {
            ...state,
            cart: action.payload
        }
    }
    if (action.type === CHANGE_QUANTITY) {
      const { id, quantity } = action.payload;
        return {
            ...state,
            cart: state.cart.map(product => {
              if(product.id === id) return { ...product, quantity };
              return product;
            })
        };
    }
    if(action.type === DELETE_CART) {
      return {
        ...state,
        cart: [],
      };
    };
    if(action.type === DELETE_PRODUCT) {
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload),
      };
    };
    if(action.type === ID_PRODUCT) {
      return {
        ...state,
        productId: state.products.filter(product2 => product2.id === Number(action.payload))[0],
      };
    };
    if(action.type === PAY_PRODUCTS) {
      return {
        ...state,
        cart: [],
        products: action.payload,
      };
    };
    if(action.type === FILTER_PRODUCT) {
      return {
        ...state,
        productsFiltered: action.payload,
      };
    };
    return state;
  };

export default rootReducer;
