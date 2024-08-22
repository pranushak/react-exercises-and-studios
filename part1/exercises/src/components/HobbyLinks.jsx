export default function HobbyLinks() {
    const pageTitle = "My Hobbies Links"
    const hobbyLinks = ["Gardening", "Playing Tennis", "Cooking"];
    return (
        <div>
            <h3>{pageTitle}</h3>
            <a href = {hobbyLinks[0]}>Gardening </a>
            <a href = {hobbyLinks[1]}>Playing Tennis</a>
            <a href = {hobbyLinks[2]}>Cooking</a>
        </div>
    );
}