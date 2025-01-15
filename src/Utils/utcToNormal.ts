function utcToNormal (utc: number): string {
  return new Date(utc * 1000).toLocaleString();
}

export default utcToNormal;