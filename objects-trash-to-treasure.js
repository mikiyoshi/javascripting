function smartGarbage(trash, bins) {
  // if (bins.waste >= 0 || bins.recycling >= 0 || bins.compost >= 0) {
  // } else {
  //   bins.waste = 0;
  //   bins.recycling = 0;
  //   bins.compost = 0;
  // }
  if (trash === "waste") {
    bins.waste++;
    console.log(bins.waste);
  } else if (trash === "recycling") {
    bins.recycling++;
    console.log(bins.recycling);
  } else if (trash === "compost") {
    bins.compost++;
    console.log(bins.compost);
  }
  // return console.log(bins);
  //The smartGarbage function should return the object:
  // it's not console.log(bins)
  return bins;
}
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
smartGarbage('compost', { waste: 0, recycling: 5, compost: 0 });
