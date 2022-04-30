const array=[2,5,1,8,11,3,5,1];

const fn=(array)=>{
  for(let i=0;i<array.length-1;i++){
    for(let j=i+1;j<array.length;j++){
      
      if(array[i]>array[j]){
        const temp =array[i];
        array[i]=array[j];
        array[j]=temp;
      }
    }
  }
}


fn(array);

console.log(array);