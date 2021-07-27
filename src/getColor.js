export const getBg = color => {
  return { backgroundColor: `rgba(${color || '255,1,1'}, ${Math.random()})` }
}
