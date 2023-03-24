const users = [
  {
    first_name: 'Mike',
    location: 'London'
  },
  {
    first_name: 'Tim',
    location: 'US'
  },
  {
    first_name: 'John',
    location: 'Australia'
  }
];

let a=users.map(function(b){
	return (`${b.first_name} lives in ${b.location}`);
});
console.log(a);