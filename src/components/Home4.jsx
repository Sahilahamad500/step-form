const Home4 = ({ formData }) => {
  return (
    <div>
      <h3>Submitted Data</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default Home4;
