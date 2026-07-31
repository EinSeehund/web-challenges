import "./Card.css";

export default function Card({ name, colorClass }) {
  return <p className={colorClass}>{name}</p>;
}
