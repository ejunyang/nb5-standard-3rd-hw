export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((student) => student.age >= 18);

  const openHandler = (student) => {
    alert(`${student.age}, ${student.grade}`);
  };

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {
          /* TODO: map을 사용해서 filteredStudents를 여기에 렌더링하세요. */
          filteredStudents.map((student) => {
            return (
              <>
                <h3
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => openHandler(student)}
                >
                  Name : {student.name}
                </h3>
                <h3>Age : {student.age}</h3>
                <h3>Grade : {student.grade}</h3>
              </>
            );
          })
        }
        {/* TODO: 학생이름을 클릭하면 나이와 점수가 alert 돼야 해요.*/}
      </ul>
    </div>
  );
}
