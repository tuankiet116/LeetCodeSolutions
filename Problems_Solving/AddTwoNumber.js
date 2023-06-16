
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode();
    let current = result;
    let carry = 0;
    while (l1 || l2 || carry) {
        let num1 = l1 ? l1.val : 0;
        let num2 = l2 ? l2.val : 0;
        let sum = num1 + num2 + carry;
        carry = (sum - sum % 10) / 10;
        current.next = new ListNode(sum % 10);
        current = current.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return result.next;
};
let l3 = new ListNode(4);
let l2 = new ListNode(6, l3);
let l1 = new ListNode(5, l2);


let n3 = new ListNode(3);
let n2 = new ListNode(4, n3);
let n1 = new ListNode(2, n2);

// console.log(n1.next);
console.log(addTwoNumbers(n1, l1));