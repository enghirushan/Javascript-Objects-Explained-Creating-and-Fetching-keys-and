let student = {
  name: "Haritha",
  age: 22,
  gender: "male",

  getmsg: function(p1) {
    console.log(p1 + " is a good student and he is " + this.age + " years old");
  }
};

student.getmsg("Hirushan");

// how to get data list using for loop

for(let x in student){
  console.log(x + " : " + student[x]);
}