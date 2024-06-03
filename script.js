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
		
		let mid=0;
		
		if(n%2==0){
		  mid=n/2;
		}
		else{
		  mid=(n-1)/2;
		}
		
		console.log(mid);
			
		let sum1=arr[0]+arr[1];
		let sum2=arr[0]+arr[1];

    let sum3=arr[n-1]+arr[n-2];
		let sum4=arr[n-1]+arr[n-2];
		
		for(let i=2; i<=mid; i++){
		  sum1=sum1+arr[i];
		  sum2+=sum1;
		}
		
		if(mid>=n-2){
		  sum2+=sum1+arr[n-1];
		  console.log(sum2);
		  return sum2;
		}
		else{
		  for(let i=n-3; i>mid; i--){
		    sum3=sum3+sum[i];
		    sum4+=sum3;
		  }
		  let sum=sum2+sum4+sum1+sum2;
		  console.log(sum);
		  return sum;
		}
		
	}
}

module.exports=mincost;
