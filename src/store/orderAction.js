export const  nameAc_order = (value)=>({
    type:"NAME_CHANGE_ORDER",
    value
})
export const psdAc_order = (value)=>({
    type:"PSD_CHANGE_ORDER",
    value
})

export const login_order = {
    type:"LOGIN_ORDER"
}
export const register_order = {
    type:"REGISTER_ORDER"
}

export const addShop_order =  (value)=>({
    type:"ADDSHOP_ORDER",
    value
})

export const checked_change =  (value)=>({
    type:"CHACKED_CHANGE",
    value
})
export const allChecked_change =  {
    type:"ALLCHACKED_CHANGE",
}
export const goodsNum_Add =  (value)=>({
    type:"GOODSNUM_ADD",
    value
})

export const goodsNum_Reduce =  (value)=>({
    type:"GOODSNUM_REDUCE",
    value
})
export const goodsDel_Tog = (value)=>({
    type:"GOODSDEL_TOG",
    value
})
export const goodsDel_Bn =  {
    type:"GOODSDEL_BN",
}
export const clean_goods =  {
    type:"CLEAN_GOODS",
}
export const logOutAc =  {
    type:"LOGOUT_AC",
}
