const Header = (course) => {
  return <h1>{course.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = (course) => {
  return (
    <div>
      {course.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

function Total(course) {
  const totalExercises = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );
  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  );
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header {...course} />
      <Content {...course} />
      <Total {...course} />
    </div>
  );
};

export default App;
