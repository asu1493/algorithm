/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let cur1 = list1;
    let cur2 = list2;
    let answer, cur3;
    if(cur2 === null && cur1 === null) {
        return null;
    } else if(cur1 === null) {
        answer = new ListNode(cur2.val);
        cur2 = cur2.next;
        cur3 = answer;
    } else if(cur2 === null) {
        answer = new ListNode(cur1.val);
        cur1 = cur1.next;
        cur3 = answer;
    } else {
        let diff = cur1.val - cur2.val;
        if(diff > 0) {
            answer = new ListNode(cur2.val);
            cur2 = cur2.next;
            cur3 = answer;
        } else if(diff === 0) {
            answer = new ListNode(cur1.val, new ListNode(cur2.val));
            cur1 = cur1.next;
            cur2 = cur2.next;
            cur3 = answer.next;
        } else {
            answer = new ListNode(cur1.val);
            cur1 = cur1.next;
            cur3 = answer;
        }
    }
    while(true) {
        if(cur2 === null && cur1 === null) {
            break;
        } else if(cur1 === null) {
            cur3.next = new ListNode(cur2.val);
            cur2 = cur2.next;
            cur3 = cur3.next;
        } else if(cur2 === null) {
            cur3.next = new ListNode(cur1.val);
            cur1 = cur1.next;
            cur3 = cur3.next;
        } else {
            diff = cur1.val - cur2.val;
            if(diff > 0) {
                cur3.next = new ListNode(cur2.val);
                cur2 = cur2.next;
                cur3 = cur3.next;
            } else if(diff === 0) {
                cur3.next = new ListNode(cur1.val, new ListNode(cur2.val));
                cur1 = cur1.next;
                cur2 = cur2.next;
                cur3 = cur3.next;
                cur3 = cur3.next;
            } else {
                cur3.next = new ListNode(cur1.val);
                cur1 = cur1.next;
                cur3 = cur3.next;
            }
        }
        
    }
    return answer;
    
};