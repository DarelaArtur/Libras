export const Types = {
    GET_NUM: "calculadora/GET_NUM",
    CLEAN_NUM: "calculadora/CLEAN_NUM",
    DO_OPE:"calculadora/DO_OPE"
};

const INITIAL_STATE = { 
    expressao: "",
    result:"",
};
export default function calculadora(state=INITIAL_STATE,action){
    switch (action.type) {
        case Types.GET_NUM:
            console.tron.log("Clean",state.result)  
            if (state.result === "") {
                return {
                    ...state,
                    expressao: state.expressao + action.payload.numero, 
                }
            } else {
                // if (action.payload.numero == "+"
                // ||action.payload.numero == "-"
                // ||action.payload.numero == "*"
                // ||action.payload.numero == "/") {
            
                if (['+', '-', '*', '/'].includes(action.payload.numero)) {
                    return{ 
                        ...state, 
                        expressao: state.result + action.payload.numero,
                        result:""
                    }
                } else {
                    console.tron.log("ta caindo aki") 
                    return{
                    result:"",
                    expressao:  action.payload.numero,
                } 
            }
        }
        
            case Types.CLEAN_NUM:
            console.tron.log("Clean",state.result)    
            return{
                    expressao:"",
                    result:""
                };
            case Types.DO_OPE:
                if (state.expressao=="0/0") {
                    return{ result:"Erro"}
                }

                let getLast = state.expressao.substr(state.expressao.length -1);
                if (getLast == "+"||getLast == "-"||getLast == "*"||getLast == "/") {
                    
                    return {...state,
                    result: state.expressao.slice(0, -1),
                    
                    }                
                }else{
                    console.tron.log("CAIU",getLast)
                    
                    return {...state,
                        result: eval(state.expressao),
                       
                    }
                }
                
                //return 
                // { ...state,
                 
                //  result: eval(state.expressao),
                // }; 

        default:
            return state;
    }

}
export const creators = {
    // getNumeros: numero => ({
    //     type:Types.GET_NUM,
    //     payload: { numero }
    // }),
    getNumeros: numero => {
        return {
            type:Types.GET_NUM,
            payload: { numero }
        }
    },
    cleanNumeros: numero => ({
        type:Types.CLEAN_NUM,
    }),
    doOperations: expressao =>({
        type:Types.DO_OPE,
    }),
   
}
