
const items=[
  {name:'bike',price:'100'},
  {name:'Tv',price:'200'},
  {name:'Album',price:'10'},
  {name:'book',price:'5'},
  {name:'phone',price:'500'},
  {name:'computer',price:'1000'},
  {name:'ketyboard',price:'25'}
]



const hasInexpensiveItems=items.some((item)=>{
  return parseInt(item.price)<=100
 })

 console.log(hasInexpensiveItems)
 
