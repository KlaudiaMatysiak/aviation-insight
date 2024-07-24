import aviationImg from "../assets/aviation.jpg";
export default function Header() {
  return (
    <header className="position-relative">
      <h1 className="av-header text-light display-3">Aviation Insight</h1>
      <img src={aviationImg} className="img-fluid av-img"></img>
    </header>
  );
}
