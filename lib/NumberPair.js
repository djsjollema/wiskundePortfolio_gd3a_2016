class NumberPair{
  constructor(num1,num2){
    this.num1 = num1;
    this.num2 = num2;
  }
  sum(){
    return this.num1 + this.num2;
  };
  mul(){
    return this.num1*this.num2;
  }
  div(){
    return this.num1 / this.num2;
  }
  longDivision(){
    var ans = "";
    var divident = this.num1;
    var divisor = this.num2;
    var quotient = Math.floor(divident/divisor);
    var rest = divident % divisor;
    var rests = [];
    var quotients = [];
    ans = quotient + ".";

    while(rests.indexOf(rest) == -1){
      rests.push(rest);
      divident = rest * 10;
      quotient = Math.floor(divident/divisor);
      quotients.push(quotient);
      rest = divident % divisor;
    }
    quotients.splice(rests.indexOf(rest),0,"[");
    quotients.push("]");
    ans += quotients.join("");
    return ans;
  }
}

class Ratio extends NumberPair{
  constructor(num1,num2){
    super(num1,num2);
    this.dividend = num1;
    this.divisor = num2;
  }
  add(ratio){
    let dividend = this.dividend * ratio.divisor + ratio.dividend*this.divisor;
    let divisor = this.divisor * ratio.divisor;
    var ans = new Ratio(dividend,divisor);
    return ans;
  }
}
