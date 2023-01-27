import React, {useRef, useState} from "react";

const data = [
	{
		name: "A",
		balance: 100,
		month : {
			firstq: {
				hr: "a"
			}
		}
	},
    {
		name: "B",
		balance: 200,
	},{
		name: "C",
		balance: 300,
	},{
		name: "A",
		balance: 400,
	},{
		name: "A",
		balance: 500,
	},
    {
		name: "C",
		balance: 600,
	},
];


const nestedData = [
	{
		name: "A",
		balance: 100,
		month : {
			firstq: {
				hr: "a"
			}
		}
	},]

export const Employee = () => {

	

	// const uniqueIdsArr = [];

	// const checkDuplicate=(ele)=>{
	// 	if(!uniqueIdsArr.includes(ele)){
	// 		uniqueIdsArr.push(ele);
	// 		return true;

	// 	}
	// 	return false;
	// }

	// let finalArr=[];

    // data.map((item, index)=>{     
	// 	 let isDuplicate = checkDuplicate(item.name);
	// 	 if(isDuplicate){
	// 		finalArr=[...finalArr, item];
	// 	 }else{
	// 		finalArr.map((newArrItem, index)=>{
	// 			if(newArrItem.name===item.name){
	// 				newArrItem.balance = newArrItem.balance + item.balance;
	// 			}
	// 		})
	// 	 }
       
    // })

	// console.log(finalArr);

	

	// console.log("hi")


	nestedData.map((item, index)=>{
		
	})

	

	return <div>



<div></div>


	</div>;
};
