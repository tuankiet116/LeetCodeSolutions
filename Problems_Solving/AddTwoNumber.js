
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let maxLength = Math.max(l1.length, l2.length);
    let result = [];
    let listnode = ListNode();
    let remember = 0;
    for (let i = 0; i < maxLength; ++i) {
        let sum = (l1[i] ?? 0 + l2[i] ?? 0 + remember).split('');
        if (sum.length > 1) {
            remember = sum[0];
            result.push(sum[1]);
        } else {
            remember = 0;
            result.push(sum[0]);
        }
    }
    return l1.length;
};
let l3 = new ListNode(3);
let l2 = new ListNode(4, l3);
let l1 = new ListNode(2, l2);


let n3 = new ListNode(3);
let n2 = new ListNode(4, n3);
let n1 = new ListNode(2, n2);

console.log(addTwoNumbers(n1, l1));