import "./styles.scss";

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

const RepositoryItem = (props: RepositoryItemProps) => {
  return (
    <li>
      <strong className="cap">{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href="/">{props.repository.html_url}</a>
    </li>
  );
};

export default RepositoryItem;
