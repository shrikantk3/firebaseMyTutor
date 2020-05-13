const initalState = [
{
    active: 1,
    assignTo: ["09120"],
    content_id: 120123,
    course_id: "cs001232",
    course_name: "Computer Application & AutoMation",
    course_price: 12000,
    createdBy: "092221",
    createdOn: new Date(),
    duration: 12,
    start_at: new Date(),
    volume: 1
},{
    active: 1,
    assignTo: ["09121"],
    content_id: 121232,
    course_id: "cs0011231",
    course_name: "Data Structure",
    course_price: 34000,
    createdBy: "092221",
    createdOn: new Date(),
    duration: 12,
    start_at: new Date(),
    volume: 1
}]

export function userReducers(state=initalState, action){
    switch(action.type){
        case 'USER_LIST':{
            return [...state]
        }
        default:{
            return [state];
        }
    }
}