const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    'BUY_STOCK'(state, { id, price, quantity }) {
        const record = state.stocks.find(x => x.id === id)
        if (record) {//record exists
            record.quantity += quantity
        } else {//no existe
            state.stocks.push({
                id: id,
                quantity: quantity
            })
        }
        if (price * quantity > state.funds) {
            alert("cant buy more than funds allow")
        } else {
            state.funds -= price * quantity
        }

    },
    'SELL_STOCK'(state, { id, price, quantity }) {
        const record = state.stocks.find(x => x.id === id)
        if (record.quantity > quantity) {
            record.quantity -= quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        if (price * quantity > state.funds) {
            alert("cant buy more than funds allow")
        } else {
            state.funds += price * quantity
        }
    }
}

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order)
    }
}

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(x => {
            const record = getters.stocks.find(y => y.id === x.id)
            return {
                id: x.id,
                quantity: x.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds(state) {
        return state.funds
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}