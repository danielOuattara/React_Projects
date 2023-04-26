/* This function take an array of 100 github repos as argument 

It first use reduce() method to gather data in 2 
lists array category: "repoByStars" & "repoByForks".

It finally  order data in each list according to count value 
and slice them to a limited number before return them.
-----------------------------------------------------------------*/

export default function column3dBar3dDataUtility(repos) {
  let { repoByStars, repoByForks } = repos.reduce(
    (total, item) => {
      total.repoByStars.push({
        label: item.name,
        value: item.stargazers_count,
      });
      total.repoByForks.push({
        label: item.name,
        value: item.forks,
      });
      return total;
    },
    {
      repoByStars: [],
      repoByForks: [],
    },
  );

  // order & slicer
  const orderAndSlicer = (arrayArg, sliceArgument) => {
    return Object.values(arrayArg)
      .sort((a, b) => {
        return b.value - a.value;
      })
      .slice(0, sliceArgument);
  };

  repoByStars = orderAndSlicer(repoByStars, 10);
  repoByForks = orderAndSlicer(repoByForks, 10);

  return { repoByStars, repoByForks };
}
