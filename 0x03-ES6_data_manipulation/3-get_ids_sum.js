export default function getStudentIdsSum(argument) {
  if (!Array.isArray(argument)) {
    return [];
  }

  return argument.map((a) => a.id).reduce((a, b) => a + b);
}
