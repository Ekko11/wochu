import { home_list,garden } from "@actions/home/actionTypes";

const defaultState = {
    allData: [],
    imgBigUrl: [],
    imgSixUrl: [],
    gardenData:[],
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case home_list:
            let newState = JSON.parse(JSON.stringify(state));
            console.log(newState);
            newState.allData = JSON.parse(JSON.stringify(action.value.data.acts));
            newState.allData.map((item, index) => {
                if (item.items.length === 1 && index > 8) {
                    newState.imgBigUrl.push(item.items);
                } else if (item.items.length === 6) {
                    newState.imgSixUrl.push(item.items);
                }
            })
            return newState;
        case garden:
            let gardenNewState = JSON.parse(JSON.stringify(state));
            gardenNewState.gardenData=action.value.data.areaList;
            return gardenNewState;
        default:
            return state;
    }
}

