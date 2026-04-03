export interface CommitData {
  x: number;
  z: number;
  commits: number;
}

export function generateMockCommits(): CommitData[] {
  const commits: CommitData[] = [];
  
  for (let x = 0; x < 10; x++) {
    for (let z = 0; z < 7; z++) {
      commits.push({
        x,
        z,
        commits: Math.floor(Math.random() * 5),
      });
    }
  }
  
  return commits;
}