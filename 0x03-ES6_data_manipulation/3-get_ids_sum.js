export default function getStudentIdsSum(argument) {
  if (!Array.isArray(argument)) {
    return [];
  }

  return argument.reduce((a, b) => a.id || a + b.id, 0,);
}
