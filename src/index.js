module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let bracketsLen = bracketsConfig.length;
  let strLen = str.length;

  if(strLen % 2 != 0 || strLen == 0) return false;      

  for(let i = 0; i < strLen; i++){
    for(let j = 0; j < bracketsLen; j++){
      if(arr.length != 0 && arr[arr.length-1] == bracketsConfig[j][0] && str[i]==bracketsConfig[j][1]){
        arr.pop(); 
      }
      else if (str[i] == bracketsConfig[j][0]){       
        arr.push(str[i]);
      }
    }  
  }   
  return arr.length ? false : true;
};