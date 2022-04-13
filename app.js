// https://www.codingninjas.com/codestudio/problems/min-steps-to-one-using-dp_920548

function getMinStep(num, memo=[]){
  
  if (num===1) return 0
  
  if(memo[num]) return memo[num]

  let res = getMinStep(num-1)
  
  if (num%3===0) {
    res = Math.min(res, getMinStep(num/3))
  }
  if (num%2===0) {
    res = Math.min(res, getMinStep(num/2))
  }
  
  memo[num] = res + 1 
  return memo[num]
}

// driver code
console.log(getMinStep(6))
