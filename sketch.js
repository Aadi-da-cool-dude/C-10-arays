var marks = [1,2,3,4,5,6,7]
var total = marks[0] + marks[1] + marks[2]  + marks[3] + marks[4] + marks[5] + marks[6]
console.log (total)
var sum = 0

function scoreAverage()
{
  for(var i = 0; i < marks.length; i++)
  {
    sum = sum + marks [i]
  }
  var avg = sum/marks.length
  console.log (sum)
  console.log (avg)

}
//calling function 
scoreAverage ()

function setup() 
{
  createCanvas(400,400);
}

function draw() 
{
background(51);

}

