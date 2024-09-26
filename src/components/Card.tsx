// NewPost.tsx
import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/usedispatch'; // Adjust path as necessary
import { createNewPost } from '../redux/postSlice';
import { Post } from '../types/postypes'; // Adjust path as necessary

const NewPost: React.FC = () => {
    const dispatch = useAppDispatch(); // Use typed dispatch
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (image) {
            const post: Post = {
                description,
                image: URL.createObjectURL(image), // Replace with the actual URL after upload
                comments: [],
                likes: [],
                user: "user-id", // Replace with actual user id
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            await dispatch(createNewPost(post)); // Dispatch the async thunk
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Post description"
                required
            />
            <input type="file" accept="image/*" onChange={handleImageChange} required />
            <button type="submit">Add Post</button>
        </form>
    );
};

export default NewPost;
