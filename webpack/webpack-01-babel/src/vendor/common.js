/**
 * module.exports===exports
 * module.exports = xxxx
 * 这么写会切断module.exports和exports的引用，导致后续的exports.dsx = function () { }会无效
 */

// module.exports = function (a, b) {
//     return a - b;
// };

module.exports.ddd = function (a, b) {
    return a - b;
};
exports.dsx = function () { }
