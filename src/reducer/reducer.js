import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
    {
        name: 'product',
        initialState: {
            user: [],
            // userCurrent: {
            //     user: {},
            //     data: []
            // },
            userData: [],
            modal: {
                item: '',
                modal: false
            },
            categoryProduce: []
            ,
            categoryFilter: {
                filterCategory: 'all',
                filterSearch: '',
            }


        },
        reducers: {
            showModal(state, action) {
                state.modal = action.payload
            },
            onhideModal(state, action) {
                state.modal = action.payload
            },
            updateDatapageHome(state, action) {
                state.categoryProduce = action.payload

            },
            fitercategory(state, action) {
                state.categoryFilter.filterCategory = action.payload

            },
            filterSearch(state, action) {
                state.categoryFilter.filterSearch = action.payload
            },
            Onlogin(state, action) {
                state.user.push(action.payload)
                console.log(state.user)
            },
            addcart(state, action) {
                state.userData.push(action.payload)
            },
            updatecart(state, action) {

                state.userData[action.payload.index].quantity = state.userData[action.payload.index].quantity + action.payload.quantity
            },
            deletecart(state, action) {
                state.userData.splice(action.payload, 1)
            }
        }

    }
)

export default counterSlice