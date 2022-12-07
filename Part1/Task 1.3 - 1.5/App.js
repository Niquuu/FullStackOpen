const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        excercises: 10,
      },
      {
        name: 'Using props to pass data',
        excercises: 7,
      },
      {
        name: 'State of a component',
        excercises: 14,
      },
    ],
  };

  const Header = (props) => {
    return <h1>{props.course.name}</h1>;
  };
  const Part = (props) => {
    return <p>Part: {props.parts + ' ' + props.excercises} </p>;
  };
  const Content = () => {
    return (
      <div>
        <Part
          parts={course.parts[0].name}
          excercises={course.parts[0].excercises}
        />
        <Part
          parts={course.parts[1].name}
          excercises={course.parts[1].excercises}
        />
        <Part
          parts={course.parts[2].name}
          excercises={course.parts[2].excercises}
        />
      </div>
    );
  };
  console.log(course.parts[0].excercises);
  console.log(course.parts[1].excercises);
  console.log(course.parts[2].excercises);

  let total = 0;
  const Total = () => {
    course.parts.forEach((value) => {
      total += value.excercises;
    });
    console.log(total);
    return (
      <div>
        <p>Tehtäviä yhteensä: {total}</p>
      </div>
    );
  };
  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={total} />
    </div>
  );
};

export default App;
