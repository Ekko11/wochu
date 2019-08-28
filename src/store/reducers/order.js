
import { handleActions } from "redux-actions"

const defaultState ={
    goodList:[],
    shopGoods:[],
    allChecked:true,
    name:"",
    password:"",
    isLogin:sessionStorage.getItem("user")?true:false,
    user:sessionStorage.getItem("user")||"未登录",
    users:JSON.parse(sessionStorage.getItem("users"))||[],
    n:0
}
function toOrder(){
    window.location.href = 'http://localhost:3000/#/order';
}

export default  handleActions({
    NAME_CHANGE_ORDER:(state,action)=>{
        let newState= Object.assign({},state)
        newState.name = action.value
        return newState
    },
    PSD_CHANGE_ORDER:(state,action)=>{
        let newState= Object.assign({},state)
        newState.password = action.value
        return newState
    },
    //注册验证
    REGISTER_ORDER:(state,action)=>{
        let newState= Object.assign({},state)
        let flag=false
        newState.users.map((item)=>{
            if(item.name===newState.name){
                flag = true
            }
        })
        if(!flag){
            var obj = {}
            obj.name=newState.name
            obj.password=newState.password
            newState.users.push(obj)
            sessionStorage.setItem("users",JSON.stringify(newState.users))
            alert("注册成功")
        }else{
          
            alert("用户名重复")
        }
        newState.name=""
            newState.password=""
        return  newState
    },
    //登录验证
    LOGIN_ORDER:(state,action)=>{
        let newState= Object.assign({},state)
        newState.users.map((item)=>{
            if(item.name===newState.name&&item.password === newState.password){
                newState.isLogin = true
                newState.user = item.name
                sessionStorage.setItem("user",newState.user)
            }
        })
        if(newState.isLogin){
            alert("登陆成功")
            toOrder()
        }else{
            alert("用户名或密码错误")
        }
        return newState
    },
    //点击添加到购物车
    ADDSHOP_ORDER:(state,action)=>{
        if(!state.isLogin){
            window.location.href = 'http://localhost:3000/#/login';
            return state
        } 
        let newState= JSON.parse(JSON.stringify(state))
        action.value.checked = true
        action.value.num = 1
        let flag = true
        newState.shopGoods.map((item,index) => {
            if(item.goodsGuid ===action.value.goodsGuid){
                flag = false
                newState.shopGoods[index].num++
            }
        })
        if(flag){
            let goods = JSON.parse(JSON.stringify(action.value))
            newState.shopGoods.push(goods)
        }
        newState.n++
        return newState
    },
    //选中图标点击
    CHACKED_CHANGE:(state,action)=>{
        let newState= JSON.parse(JSON.stringify(state))
        newState.shopGoods[action.value].checked =!newState.shopGoods[action.value].checked
        newState.allChecked = newState.shopGoods.every((item,index)=>(
            item.checked === true
        ))
        return newState
    },
    //全选按钮点击
    ALLCHACKED_CHANGE:(state,action)=>{
        let newState= JSON.parse(JSON.stringify(state))
        newState.allChecked = !newState.allChecked
        newState.shopGoods.forEach((item,index)=>(
            item.checked = newState.allChecked
        ))
        return newState
    },
    //计数器+
    GOODSNUM_ADD:(state,action)=>{
        let newState= JSON.parse(JSON.stringify(state))
        newState.shopGoods[action.value].num++
        return newState
    },
     //计数器-
    GOODSNUM_REDUCE:(state,action)=>{
        let newState= JSON.parse(JSON.stringify(state))
        if(newState.shopGoods[action.value].num>=2){
            newState.shopGoods[action.value].num--
        }
        return newState
    },
    //点击编辑切换
    GOODSDEL_TOG:(state,action)=>{
        let newState= JSON.parse(JSON.stringify(state))
        newState.shopGoods.forEach((item,index)=>(
            item.checked = action.value
        ))
        newState.allChecked=action.value
        return newState
    },
    //点击删除选中商品
    GOODSDEL_BN:(state,action)=>{
        let newState= JSON.parse(JSON.stringify(state))
        newState.shopGoods =newState.shopGoods.filter((item,index)=>(
            item.checked === false
        ))
        return newState
    },
    //清空购物车
    CLEAN_GOODS:(state,action)=>{
        let newState= JSON.parse(JSON.stringify(state))
        newState.shopGoods.length = 0
        return newState
    }

},defaultState)