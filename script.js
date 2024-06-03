function mincost(arr)
{ 
let n=arr.length;

	if(n==1){
		return 0;
	}
	else if(n==2){
		return arr[0]+arr[1];
	}
	else{
		arr.sort();
			
		let sum1=arr[0]+arr[1];
		let sum2=arr[0]+arr[1];

		for(let i=1; i<arr.length-1; i++){
		  sum2=sum2+arr[i+1];
		  sum1+=sum2;
		}
	
		return sum1;
	}
  
}

module.exports=mincost;
