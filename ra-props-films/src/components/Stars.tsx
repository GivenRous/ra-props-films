import Star from "./Star";

type PropTypes = {
  count: number;
};

export default function Stars({ count }: PropTypes) {
  const validCount = count > 5 || count < 1;
  const countStars = [...new Array(count)];

  return validCount ? null : (
    <ul className="card-body-stars u-clearfix">
      {countStars.map(() => (
        <li className="card-star">
          <Star />
        </li>
      ))}
    </ul>
  );
}
