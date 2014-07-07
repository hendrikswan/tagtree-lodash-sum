var _ = require('lodash');

var sales = [
    {
        product: 'iphone',
        quantity: 5,
        date: new Date()
    },
    {
        product: 'nexus',
        quantity: 1,
        date: new Date()
    },
    {
        product: 'iphone',
        quantity: 2,
        date: new Date()
    },
    {
        product: 'nokia',
        quantity: 1,
        date: new Date()
    },
    {
        product: 'nexus',
        quantity: 4,
        date: new Date()
    },
];

function sum(arr, key, val){
    return _.reduce(arr, function(result, item){
        result[item[key]] = result[item[key]] || 0;
        result[item[key]] += item[val];
        return result;
    }, {});
}

_.mixin({
    sum: sum
});

var summed = _.sum(sales, 'product', 'quantity')

console.log(summed);














