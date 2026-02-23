export default function LoseBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer was <strong>{answer}</strong>.
      </p>
    </div>
  );
}
