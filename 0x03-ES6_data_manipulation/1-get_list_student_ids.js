export default function getListStudentIds(argument) {
  if (!Array.isArray(argument)) {
    return [];
  }
  return argument.map((a) => a.id);
}
