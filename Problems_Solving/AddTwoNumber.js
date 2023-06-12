
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
    let value1 = l1?.val ?? 0;
    let value2 = l2?.val ?? 0;
    let sum = (value1 + value2).toString().split('');
    let rememberNum = sum.length > 1 ? parseInt(sum[0]) : 0;
    if (l1.next || l2.next) {
        let holdRemember = l1.next ? l1 : l2;
        holdRemember.next.val += rememberNum;
        return new ListNode(sum[sum.length - 1], addTwoNumbers(l1?.next, l2?.next));
    }
    return new ListNode(parseInt(sum[sum.length - 1]) + rememberNum)
};
let l3 = new ListNode(4);
let l2 = new ListNode(6, l3);
let l1 = new ListNode(5, l2);


let n3 = new ListNode(3);
let n2 = new ListNode(4, n3);
let n1 = new ListNode(2, n2);

// console.log(n1.next);
console.log(addTwoNumbers(n1, l1));