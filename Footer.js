export default function Footer({ text, link }) {
  return (
    <p className="footer">
      <a href={link} target="_blank">
        {text}
      </a>
    </p>
  );
}
