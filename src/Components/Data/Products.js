import GreenTea1 from '../Elements/Imgs/products/greentea1.jpg'
import GreenTea2 from '../Elements/Imgs/products/greentea2.jpg'
import GreenTea3 from '../Elements/Imgs/products/greentea3.jpg'
import BlackTea1 from '../Elements/Imgs/products/blacktea1.jpg'
import BlackTea2 from '../Elements/Imgs/products/blacktea2.jpg'
import BlackTea3 from '../Elements/Imgs/products/blacktea3.jpg'
import RedTea1 from '../Elements/Imgs/products/redtea1.jpg'
import RedTea2 from '../Elements/Imgs/products/redtea2.jpg'
import RedTea3 from '../Elements/Imgs/products/redtea3.jpg'
let productsList=[
    {
        id:0,
        category:"Чай",
        name:"Зелений чай",
        portions:[
            { weight: 50, price: 50 },
        ],
        inStock:true,
        imgList:[
            GreenTea1,
            GreenTea2,
            GreenTea3,
        ],
        img:GreenTea2,
        description:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet urna eu mauris ornare aliquet a semper metus. Proin velit est, consectetur eu sagittis ac, eleifend feugiat magna. In elementum faucibus gravida. Proin vulputate neque ut malesuada iaculis. Pellentesque ac consequat ipsum. Aenean a eleifend tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`
    },
    {
        id:1,
        category:"Чай",
        name:"Чорний чай",
        portions:[
            { weight: 50, price: 50 },
            { weight: 100, price: 100 },
        ],
        inStock:true,
        imgList:[
            BlackTea1,
            BlackTea2,
            BlackTea3,
        ],
        img:BlackTea2,
        description:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet urna eu mauris ornare aliquet a semper metus. Proin velit est, consectetur eu sagittis ac, eleifend feugiat magna. In elementum faucibus gravida. Proin vulputate neque ut malesuada iaculis. Pellentesque ac consequat ipsum. Aenean a eleifend tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`
    },
    {
        id:2,
        category:"Чай",
        name:"Каркаде",
        portions:[
            { weight: 50, price: 50 },
        ],
        inStock:true,
        imgList:[
            RedTea1,
            RedTea2,
            RedTea3,
        ],
        img:RedTea2,
        description:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet urna eu mauris ornare aliquet a semper metus. Proin velit est, consectetur eu sagittis ac, eleifend feugiat magna. In elementum faucibus gravida. Proin vulputate neque ut malesuada iaculis. Pellentesque ac consequat ipsum. Aenean a eleifend tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`
    },
];
export default productsList;