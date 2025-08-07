import { getComments } from "../../comments";

type Comment = {
  id: number;
  name: string;
  comment: string;
  email: string;
  date: Date;
};

export default async function CommentDbPage() {
  const comments: Comment[] = await getComments();

  return (
    <ul className="space-y-4">
      {comments.map((comment) => (
        <li
          className="bg-blue-50 p-4 rounded-lg shadow-md font-medium text-lg"
          key={comment.id}
        >
          <div className="flex justify-between items-start">
            <h2 className="font-bold text-xl">{comment.name}</h2>
            <span className="text-sm text-gray-500">
              {new Date(comment.date).toLocaleDateString()}
            </span>
          </div>
          <p className="mt-2 text-gray-700">{comment.comment}</p>
          <p className="text-sm text-blue-600 mt-1">{comment.email}</p>
        </li>
      ))}
    </ul>
  );
}
