const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let rank = vegetables.sort(function(a, b) {
    if (metric === "redness") {
      return a.redness - b.redness;
    } else if (metric === "plumpness") {
      return a.plumpness - b.plumpness;
    }
  })
  console.log(rank[(rank.length)-1].submitter);
  return rank[(rank.length)-1].submitter;
}
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric);
