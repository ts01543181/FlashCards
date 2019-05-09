import { ADD_COLLECTION, ADD_CARD, EDIT_CARD, DELETE_CARD } from "../actions/actionTypes";

const addToCollection = (card, collections) => {
    for (let col of collections) {
        if (col.title === card.collection) {
            col.cards.push(card);
            return collections;
        }
    }
};

const editCollection = (card, collections, id) => {
    for (let col of collections) {
        if (card.collection === col.title) {
            col.cards[id] = card;
            return collections;
        }
    }
}

const deleteInCollection = (card, id, collections) => {
    for (let col of collections) {
        if (col.title === card.collection) {
            col.cards.splice(id, 1);
            return collections;
        }
    }
}

const collectionReducer = (
    state = [
    {
        cards: [{
            backImg: null,
            collection: "Fruits",
            comment: "",
            definition: "lemon",
            frontImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQwGLA5rpAZfBg95DvrXjPGRAfBD3JNf3YCuKHBmVoWUfw5JRV",
            review: false,
            reviewInd: -1,
            term: ""
        },{
            backImg: null,
            collection: "Fruits",
            comment: "",
            definition: "lime",
            frontImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVng_NZsuGjG21qCIWnZaVxmzE-naTfKICmVCmssNIKUKcxV0ekQ",
            review: false,
            reviewInd: -1,
            term: ""
        },
        {
            backImg: null,
            collection: "Fruits",
            comment: "",
            definition: "orange",
            frontImg: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg",
            review: false,
            reviewInd: -1,
            term: ""
        },
        {
            backImg: null,
            collection: "Fruits",
            comment: "",
            definition: "mandarin",
            frontImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mOyZUg3QOBCYBtp5Nv-cxhEZFHqbAH9MTdSvyTcyfFsJ4X8I8A",
            review: false,
            reviewInd: -1,
            term: ""
        },
        {
            backImg: null,
            collection: "Fruits",
            comment: "",
            definition: "durian",
            frontImg: "https://img.theculturetrip.com/768x432/wp-content/uploads/2018/02/shutterstock_422852002.jpg",
            review: false,
            reviewInd: -1,
            term: ""
        },
        {
            backImg: null,
            collection: "Fruits",
            comment: "",
            definition: "jackfruit",
            frontImg: "https://i2.wp.com/4.bp.blogspot.com/-sP_WZQat6e0/UQf44EuGgDI/AAAAAAAAHn0/w4bldo7dKbg/s1600/Ripe_jackfruit.jpg",
            review: false,
            reviewInd: -1,
            term: ""
        }],
        description: "",
        title: "Fruits",
    },
    {
        cards:[{
            backImg: null,
            collection: "Animals",
            comment: "",
            definition: "cheetah",
            frontImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYgG50_9Xm8fDoP6o7ThhzJ72KdojpUUJI6_zynG0omch6v7R",
            review:false,
            reviewInd:-1,
            term:""
        },
        {
            backImg: null,
            collection: "Animals",
            comment: "",
            definition: "leopard",
            frontImg:"https://www.safaribookings.com/blog/wp-content/uploads/2017/06/Leopard-BW_1200px.jpg",
            review:false,
            reviewInd:-1,
            term:""
        },
        {
            backImg: null,
            collection: "Animals",
            comment: "",
            definition: "zebra",
            frontImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Common_zebra_1.jpg/1200px-Common_zebra_1.jpg",
            review:false,
            reviewInd:-1,
            term:""
        },
        {
            backImg: null,
            collection: "Animals",
            comment: "",
            definition: "dolphin",
            frontImg:"https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/f_auto,q_auto,w_1100/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg",
            review:false,
            reviewInd:-1,
            term:"A fish-like mammal"
        },
        {
            backImg: null,
            collection: "Animals",
            comment: "",
            definition: "husky",
            frontImg:"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/22184327/Siberian-Husky-on-White-12-800x600-1.jpg",
            review:false,
            reviewInd:-1,
            term:"A wolf-like dog"
        },
        {
            backImg: null,
            collection: "Animals",
            comment: "",
            definition: "crocodile",
            frontImg:"https://i2.wp.com/www.floridamuseum.ufl.edu/science/wp-content/uploads/2017/08/sc-aquarium-nile-crocodile-edit1.jpg?ssl=1",
            review:false,
            reviewInd:-1,
            term:""
        },
        {
            backImg: null,
            collection: "Animals",
            comment: "",
            definition: "aligator",
            frontImg:"https://thumbs.dreamstime.com/z/american-aligator-big-gray-detail-97674317.jpg",
            review:false,
            reviewInd:-1,
            term:""
        }],
        description: "",
        title: "Animals"
    }
], action) => {
    switch(action.type) {
        case ADD_COLLECTION:
            return [...state, action.payload];
        case ADD_CARD:
            return addToCollection(action.payload, state);
        case EDIT_CARD:
            const { card, id } = action.payload; 
            return editCollection(card, state, id);
        case DELETE_CARD:
            return deleteInCollection(action.payload.card, action.payload.id, state);
        default:
            return state;
    };
};

export default collectionReducer;